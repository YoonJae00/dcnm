import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as api from '../lib/api';
import { useItem, useTable, useUser } from '../lib/hooks';
import { WEEKDAYS, dayKey, fullDate, paragraphs, parseDay, shortDate } from '../lib/format';
import { KINDS, ORIGIN_LABEL, STATUS_LABEL, deadlineLeft, deadlineText, isMember, meetingText, memberCount } from '../lib/projects';
import { ArchiveCard, Avatar, Chips, Fab, Progress, ProjectBadges, ProjectCard, RecruitCard } from '../components/UI';
import { canEnter, isTeamMember, spacePath } from '../lib/workspace';

// 팀원(작성자·참여 확정)과 운영진에게만 보이는 팀 공간 바로가기
function SpaceButton({ p, user }) {
  if (!canEnter(p, user)) return null;
  return <Link className="btn dark wide" to={spacePath(p.id)}>팀 공간 열기{isTeamMember(p, user) ? '' : ' (운영진)'}</Link>;
}

const loginLink = (path) => `/login?next=${encodeURIComponent(path)}`;

/* ---------------- 프로젝트 목록 (진행 중 / 모집 중) ---------------- */
export function ProjectList() {
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab') === 'recruiting' ? 'recruiting' : 'ongoing';
  const { rows, error } = useTable('projects');
  const members = useTable('members').rows;
  const apps = useTable('applications').rows || [];
  const user = useUser();
  const [kind, setKind] = useState('all');
  const [origin, setOrigin] = useState('all');
  const [sort, setSort] = useState('deadline');

  const counts = { ongoing: 0, recruiting: 0 };
  for (const p of rows || []) if (p.status in counts) counts[p.status] += 1;
  const kinds = useMemo(() => [...new Set((rows || []).filter((p) => p.status === tab).map((p) => p.kind))], [rows, tab]);
  let shown = (rows || []).filter((p) => p.status === tab && (kind === 'all' || p.kind === kind) && (origin === 'all' || p.origin === origin));
  if (tab === 'recruiting' && sort === 'deadline') {
    shown = [...shown].sort((a, b) => (deadlineLeft(a) ?? 999) - (deadlineLeft(b) ?? 999));
  }
  const myApp = (pid) => user && apps.find((a) => a.project_id === pid && a.user_id === user.id)?.status;

  return (
    <>
      <div className="page-head">
        <h1>프로젝트 목록</h1>
        <p>동아리가 열었거나 부원이 직접 올린 프로젝트입니다. 지금 진행 중인 것과 사람을 모으는 중인 것을 나눠 볼 수 있습니다.</p>
      </div>
      <div className="tabbar" role="tablist">
        {[['ongoing', '진행 중'], ['recruiting', '모집 중']].map(([k, label]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k}
            onClick={() => { setParams(k === 'ongoing' ? {} : { tab: k }, { replace: true }); setKind('all'); }}>
            {label} <span className="count">{counts[k]}</span>
          </button>
        ))}
      </div>
      <div className="toolbar">
        <div className="filters">
          <Chips label="유형" options={kinds} value={kind} onChange={setKind} />
          <Chips label="개설" options={['club', 'personal']} value={origin} onChange={setOrigin} format={(o) => ORIGIN_LABEL[o]} />
        </div>
        {tab === 'recruiting' && (
          <label className="small muted" htmlFor="sort">
            <span className="skip">정렬</span>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="deadline">마감 임박순</option>
              <option value="new">최신순</option>
            </select>
          </label>
        )}
      </div>
      {error && <p className="error-box">프로젝트를 불러오지 못했습니다: {error}</p>}
      {!rows && !error && <p className="state">불러오는 중입니다.</p>}
      <div className={`card-grid${tab === 'recruiting' ? ' two' : ''}`}>
        {shown.map((p) => tab === 'recruiting'
          ? <RecruitCard key={p.id} p={p} userId={user?.id} applied={myApp(p.id)} />
          : <ProjectCard key={p.id} p={p} members={members} userId={user?.id} />)}
      </div>
      {rows && shown.length === 0 && (
        <p className="state">
          {tab === 'recruiting' ? '조건에 맞는 모집 중인 프로젝트가 없습니다. 직접 올려 보세요.' : '조건에 맞는 진행 중인 프로젝트가 없습니다.'}
        </p>
      )}
      <Fab />
    </>
  );
}

/* ---------------- 완료 프로젝트 ---------------- */
export function ProjectsDone() {
  const { rows, error } = useTable('projects');
  const posts = useTable('posts').rows || [];
  const [year, setYear] = useState('all');
  const [kind, setKind] = useState('all');
  const done = (rows || []).filter((p) => p.status === 'done');
  const years = [...new Set(done.map((p) => String(p.end_date || p.created_at).slice(0, 4)))].sort().reverse();
  const kinds = [...new Set(done.map((p) => p.kind))];
  const shown = done.filter((p) => (year === 'all' || String(p.end_date || p.created_at).startsWith(year)) && (kind === 'all' || p.kind === kind))
    .sort((a, b) => String(b.end_date).localeCompare(String(a.end_date)));
  return (
    <>
      <div className="page-head">
        <h1>완료 프로젝트</h1>
        <p>끝난 프로젝트와 결과물을 모아 둡니다. 참여한 사람이 쓴 후기는 커뮤니티로 이어집니다.</p>
      </div>
      <div className="filters">
        <Chips label="연도" options={years} value={year} onChange={setYear} format={(y) => `${y}년`} />
        <Chips label="유형" options={kinds} value={kind} onChange={setKind} />
      </div>
      {error && <p className="error-box">{error}</p>}
      <div className="card-grid">
        {shown.map((p) => <ArchiveCard key={p.id} p={p} reviews={posts.filter((x) => x.project_id === p.id).length} />)}
      </div>
      {rows && shown.length === 0 && <p className="state">아직 완료된 프로젝트가 없습니다.</p>}
    </>
  );
}

/* ---------------- 프로젝트 상세 ---------------- */
function ApplyPanel({ p, user, apps, members }) {
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const mine = user && apps.find((a) => a.project_id === p.id && a.user_id === user.id);
  const pending = apps.filter((a) => a.project_id === p.id && a.status === 'pending');
  const full = memberCount(p) >= (p.capacity || 0);
  const left = deadlineLeft(p);
  const closed = left !== null && left < 0;
  const path = `/projects/${p.id}`;

  let action;
  if (!user) action = <Link className="btn primary wide" to={loginLink(path)}>로그인하고 참여 신청</Link>;
  else if (p.author_id === user.id) action = (
    <>
      <Link className="btn dark wide" to="/me">신청자 {pending.length}명 확인하기</Link>
      <button type="button" className="btn wide" onClick={() => api.save('projects', { id: p.id, status: 'ongoing' })}>모집 마감하고 시작하기</button>
    </>
  );
  else if (isMember(p, user.id)) action = <p className="notice-box">참여가 확정됐습니다. 정기 모임이 내 활동 캘린더에 들어갔습니다.</p>;
  else if (mine?.status === 'pending') action = (
    <>
      <p className="notice-box">참여 신청을 보냈습니다. 작성자가 수락하면 알려 드립니다.</p>
      <button type="button" className="btn wide" onClick={() => api.remove('applications', mine.id)}>신청 취소</button>
    </>
  );
  else if (mine?.status === 'rejected') action = <p className="notice-box">이번에는 함께하지 못하게 됐습니다. 다른 모집을 둘러보세요.</p>;
  else if (closed || full) action = <p className="notice-box">{closed ? '모집이 마감됐습니다.' : '정원이 찼습니다.'} 문의는 남길 수 있습니다.</p>;
  else action = (
    <form className="apply-box" onSubmit={async (e) => {
      e.preventDefault();
      if (msg.trim().length > 300) { setErr('300자 이하로 줄여 주세요.'); return; }
      setBusy(true); setErr('');
      try { await api.save('applications', { project_id: p.id, user_id: user.id, user_name: user.name, message: msg.trim(), status: 'pending' }); setMsg(''); }
      catch (x) { setErr(`신청하지 못했습니다: ${x.message}`); }
      finally { setBusy(false); }
    }}>
      <label htmlFor="apply-msg" className="small" style={{ fontWeight: 600 }}>작성자에게 한마디 <span className="muted" style={{ fontWeight: 400 }}>(선택)</span></label>
      <textarea id="apply-msg" placeholder="예: 목요일 저녁 가능합니다. Java는 수업에서 배웠어요." value={msg} onChange={(e) => setMsg(e.target.value)} />
      {err && <span className="small" style={{ color: 'var(--hot)' }}>{err}</span>}
      <button type="submit" className="btn primary wide" disabled={busy}>참여 신청</button>
    </form>
  );

  return (
    <aside className="panel" aria-label="모집 조건">
      <h2>모집 조건</h2>
      <dl className="kv">
        <dt>모집 인원</dt><dd><Progress p={p} /></dd>
        <dt>마감</dt><dd>{p.deadline ? `${fullDate(p.deadline)} ` : ''}{left !== null && <span className={`badge ${left >= 0 && left <= 7 ? 'due' : 'neutral'}`}>{deadlineText(p)}</span>}</dd>
        <dt>기간</dt><dd>{p.period}</dd>
        <dt>진행 방식</dt><dd>{meetingText(p) || p.mode}</dd>
        <dt>조건</dt><dd>{p.condition || '없음'}</dd>
      </dl>
      <hr />
      <div className="actions"><span className="avatars">{(p.member_ids || []).map((id, i) => <Avatar key={id} name={members?.find((m) => m.id === id)?.name || p.member_names?.[i]} />)}</span><span className="small">참여 확정 {memberCount(p)}명</span></div>
      {action}
      <SpaceButton p={p} user={user} />
      {user && p.author_id !== user.id && <a className="btn wide" href="#inquiry" onClick={(e) => { e.preventDefault(); document.getElementById('inquiry-input')?.focus(); }}>문의하기</a>}
      {(!user || p.author_id !== user.id) && <p className="note">작성자가 수락하면 내 활동과 개인 캘린더에 모임 일정이 들어갑니다.</p>}
    </aside>
  );
}

function InfoPanel({ p, user, members }) {
  const names = (p.member_ids || []).map((id, i) => members?.find((m) => m.id === id)?.name || p.member_names?.[i]).filter(Boolean);
  return (
    <aside className="panel" aria-label="프로젝트 정보">
      <h2>{p.status === 'done' ? '프로젝트 기록' : '진행 정보'}</h2>
      <dl className="kv">
        <dt>상태</dt><dd>{STATUS_LABEL[p.status]}</dd>
        <dt>기간</dt><dd>{p.period}</dd>
        {p.status === 'ongoing' && <><dt>정기 모임</dt><dd>{meetingText(p) || '공지 예정'}</dd></>}
        <dt>인원</dt><dd>{memberCount(p)}명</dd>
        <dt>개설</dt><dd>{ORIGIN_LABEL[p.origin]} · {p.author_name}</dd>
        {p.tags?.length > 0 && <><dt>기술</dt><dd><span className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</span></dd></>}
      </dl>
      <hr />
      <div className="actions"><span className="avatars">{names.map((n, i) => <Avatar key={i} name={n} />)}</span><span className="small">{names.join(', ')}</span></div>
      <SpaceButton p={p} user={user} />
      {p.link && <a className="btn wide" href={p.link} target="_blank" rel="noreferrer">결과물 보기</a>}
      {user && p.author_id === user.id && p.status === 'ongoing' && (
        <button type="button" className="btn wide" onClick={() => api.save('projects', { id: p.id, status: 'done' })}>프로젝트 완료 처리</button>
      )}
      {user && p.status === 'done' && isMember(p, user.id) && <Link className="btn dark wide" to={`/community/new?project=${p.id}`}>후기 쓰기</Link>}
    </aside>
  );
}

function Inquiries({ p, user }) {
  const { rows } = useTable('inquiries');
  const list = (rows || []).filter((q) => q.project_id === p.id);
  const [text, setText] = useState('');
  const [err, setErr] = useState('');
  return (
    <section className="thread" id="inquiry" aria-labelledby="inq-h">
      <h2 id="inq-h">문의 <span className="muted" style={{ fontWeight: 500 }}>{list.length}</span></h2>
      {list.length === 0 && <p className="muted small">아직 문의가 없습니다. 궁금한 점을 남기면 작성자가 답합니다.</p>}
      {list.map((q) => (
        <div key={q.id} className={`comment${q.user_id === p.author_id ? ' reply' : ''}`}>
          <Avatar name={q.user_name} />
          <span className="who">{q.user_name}{q.user_id === p.author_id && <span className="badge neutral">작성자</span>}<span>{shortDate(q.created_at)}</span></span>
          <p>{q.body}</p>
        </div>
      ))}
      {user ? (
        <form className="comment-form" onSubmit={async (e) => {
          e.preventDefault();
          if (text.trim().length < 2) { setErr('두 글자 이상 적어 주세요.'); return; }
          setErr('');
          await api.save('inquiries', { project_id: p.id, user_id: user.id, user_name: user.name, body: text.trim() });
          setText('');
        }}>
          <label htmlFor="inquiry-input" className="skip">문의 내용</label>
          <textarea id="inquiry-input" placeholder="궁금한 점을 남기면 작성자에게 알림이 갑니다" value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit" className="btn dark">문의 남기기</button>
        </form>
      ) : <p className="small"><Link to={loginLink(`/projects/${p.id}`)}>로그인</Link>하면 문의를 남길 수 있습니다.</p>}
      {err && <p className="small" style={{ color: 'var(--hot)' }}>{err}</p>}
    </section>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const { item: p, error } = useItem('projects', id);
  const user = useUser();
  const members = useTable('members').rows;
  const apps = useTable('applications').rows || [];
  const posts = useTable('posts').rows || [];
  if (error) return <p className="error-box">프로젝트를 불러오지 못했습니다: {error}</p>;
  if (p === undefined) return <p className="state">불러오는 중입니다.</p>;
  if (!p) return (
    <div className="article"><h1>찾는 프로젝트가 없습니다</h1><p className="muted">삭제되었거나 주소가 바뀌었을 수 있습니다.</p><Link to="/projects">프로젝트 목록으로 가기</Link></div>
  );
  const back = p.status === 'done' ? ['/projects/done', '완료 프로젝트'] : p.status === 'recruiting' ? ['/projects?tab=recruiting', '모집 중인 프로젝트'] : ['/projects', '진행 중인 프로젝트'];
  const reviews = posts.filter((x) => x.project_id === p.id);
  return (
    <>
      <Link className="back" to={back[0]}>← {back[1]}</Link>
      <div className="detail">
        <article className="article">
          <ProjectBadges p={p} withStatus />
          <h1>{p.title}</h1>
          <div className="meta-line"><span className="author"><Avatar name={p.author_name} />{p.author_name}</span><span>{fullDate(p.created_at)} 작성</span></div>
          {p.summary && <p className="muted">{p.summary}</p>}
          <div className="prose" style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
            {paragraphs(p.body).map((lines, i) => <p key={i}>{lines.map((l, j) => <span key={j}>{l}{j < lines.length - 1 && <br />}</span>)}</p>)}
          </div>
          {p.status === 'done' && (
            <section className="section" style={{ marginTop: 16 }}>
              <h2>후기 {reviews.length}개</h2>
              <div className="rows">
                {reviews.map((r) => <Link key={r.id} to={`/community/${r.id}`} className="row"><span className="date">{shortDate(r.created_at)}</span><span className="row-title">{r.title}</span><span className="meta">{r.author_name}</span></Link>)}
              </div>
              {reviews.length === 0 && <p className="muted small">아직 후기가 없습니다.</p>}
            </section>
          )}
          {p.status !== 'done' && <Inquiries p={p} user={user} />}
        </article>
        {p.status === 'recruiting' ? <ApplyPanel p={p} user={user} apps={apps} members={members} /> : <InfoPanel p={p} user={user} members={members} />}
      </div>
    </>
  );
}

/* ---------------- 프로젝트 신청 (모집글 쓰기) ---------------- */
const EMPTY = { kind: '스터디', title: '', summary: '', body: '', capacity: '4', deadline: '', start_date: '', end_date: '', meet_days: [], meet_time: '', place: '', mode: '온라인', condition: '', link: '', club: false };

function periodText(s, e) {
  if (!s) return '';
  const a = parseDay(s);
  if (!e) return `${a.getMonth() + 1}/${a.getDate()} 시작`;
  const b = parseDay(e);
  const weeks = Math.max(1, Math.round((b - a) / 86400000 / 7));
  return `${a.getMonth() + 1}/${a.getDate()} – ${b.getMonth() + 1}/${b.getDate()} (${weeks}주)`;
}

function validateProject(v) {
  const e = {};
  const today = dayKey(new Date());
  if (v.title.trim().length < 4) e.title = '제목을 4자 이상 적어 주세요.';
  else if (v.title.trim().length > 60) e.title = '제목은 60자 이하로 적어 주세요.';
  if (v.summary.trim().length < 10) e.summary = '목록에 보일 소개를 10자 이상 적어 주세요.';
  if (v.body.trim().length < 20) e.body = '자세한 설명을 20자 이상 적어 주세요.';
  const cap = Number(v.capacity);
  if (!Number.isInteger(cap) || cap < 2 || cap > 30) e.capacity = '모집 인원은 2~30명 사이로 정해 주세요.';
  if (!v.deadline) e.deadline = '모집 마감일을 정해 주세요.';
  else if (v.deadline < today) e.deadline = '마감일은 오늘 이후여야 합니다.';
  if (!v.start_date) e.start_date = '시작일을 정해 주세요.';
  if (v.end_date && v.start_date && v.end_date < v.start_date) e.end_date = '종료일이 시작일보다 빠릅니다.';
  if (v.meet_days.length && !v.meet_time) e.meet_time = '모임 요일을 골랐다면 시작 시각도 정해 주세요.';
  if (v.link && !/^https?:\/\//.test(v.link.trim())) e.link = 'https://로 시작하는 주소를 넣어 주세요.';
  return e;
}

function NF({ id, label, opt, hint, error, children }) {
  return (
    <div className={`field${error ? ' invalid' : ''}`}>
      <label htmlFor={`np-${id}`}>{label}{opt && <span className="opt"> (선택)</span>}</label>
      {children}
      {error ? <span className="err" role="alert">{error}</span> : hint && <span className="hint">{hint}</span>}
    </div>
  );
}

export function ProjectNew() {
  const user = useUser();
  const navigate = useNavigate();
  const [v, setV] = useState(EMPTY);
  const [tried, setTried] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  if (user === undefined) return <p className="state">확인하는 중입니다.</p>;
  if (!user) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>프로젝트 신청</h1>
      <p className="muted">모집글은 로그인한 부원만 올릴 수 있습니다. 올린 사람의 이름이 글에 함께 표시됩니다.</p>
      <div className="actions"><Link className="btn primary" to={loginLink('/projects/new')}>로그인하기</Link><Link className="btn" to="/projects?tab=recruiting">모집 중인 프로젝트 보기</Link></div>
    </div>
  );

  if (!user.approved) return (
    <div className="login"><h1 style={{ fontSize: 'var(--t-xl)' }}>운영진 승인을 기다리고 있습니다</h1><p className="muted">처음 로그인한 계정은 운영진이 동아리 부원인지 확인한 뒤에 글을 쓸 수 있습니다. 승인이 늦어지면 운영진에게 이야기해 주세요.</p><Link className="btn" to="/">메인으로</Link></div>
  );
  const errors = validateProject(v);
  const show = (k) => tried && errors[k];
  const set = (k) => (e) => setV((x) => ({ ...x, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  const toggleDay = (d) => setV((x) => ({ ...x, meet_days: x.meet_days.includes(d) ? x.meet_days.filter((y) => y !== d) : [...x.meet_days, d].sort() }));
  const preview = {
    id: 'preview', status: 'recruiting', origin: v.club && user.isAdmin ? 'club' : 'personal', kind: v.kind,
    title: v.title || '제목을 적으면 여기에 보입니다', summary: v.summary || '한 줄 소개가 들어갑니다.', condition: v.condition,
    capacity: Number(v.capacity) || 0, member_ids: [user.id], deadline: v.deadline, period: periodText(v.start_date, v.end_date) || '기간',
    meet_days: v.meet_days, meet_time: v.meet_time, place: v.place, mode: v.mode, author_id: '', author_name: user.name,
  };

  async function onSubmit(e) {
    e.preventDefault();
    setTried(true);
    if (Object.keys(errors).length) { document.getElementById(`np-${Object.keys(errors)[0]}`)?.focus(); return; }
    setBusy(true); setErr('');
    try {
      const saved = await api.save('projects', {
        status: 'recruiting', origin: v.club && user.isAdmin ? 'club' : 'personal', kind: v.kind,
        title: v.title.trim(), summary: v.summary.trim(), body: v.body.trim(), capacity: Number(v.capacity),
        deadline: v.deadline, start_date: v.start_date, end_date: v.end_date || null, period: periodText(v.start_date, v.end_date),
        meet_days: v.meet_days, meet_time: v.meet_time, place: v.place.trim(), mode: v.mode, condition: v.condition.trim(),
        link: v.link.trim(), tags: [], author_id: user.id, author_name: user.name, member_ids: [user.id], member_names: [user.name],
      });
      navigate(`/projects/${saved.id}`);
    } catch (x) { setErr(`올리지 못했습니다: ${x.message}`); setBusy(false); }
  }

  return (
    <>
      <div className="page-head">
        <h1>프로젝트 신청</h1>
        <p>공모전, 스터디, 사이드 프로젝트를 올리고 같이 할 사람을 모으세요. 올린 글은 프로젝트 목록의 모집 중 탭에 나옵니다.</p>
      </div>
      <div className="form-layout">
        <form className="card-form boxed" noValidate onSubmit={onSubmit}>
          <div className="field">
            <span className="label">유형</span>
            <div className="chip-group" role="group" aria-label="유형">
              {KINDS.filter((k) => k !== '독서').map((k) => <button key={k} type="button" className="chip" aria-pressed={v.kind === k} onClick={() => setV((x) => ({ ...x, kind: k }))}>{k}</button>)}
            </div>
          </div>
          <NF error={show('title')} id="title" label="제목"><input id="np-title" value={v.title} onChange={set('title')} placeholder="예: 정보처리기사 필기 스터디 같이 하실 분" /></NF>
          <NF error={show('summary')} id="summary" label="한 줄 소개" hint="목록 카드에 두 줄까지 보입니다."><input id="np-summary" value={v.summary} onChange={set('summary')} /></NF>
          <NF error={show('body')} id="body" label="자세한 설명" hint="무엇을, 어떻게, 왜 하는지 적어 주세요."><textarea id="np-body" value={v.body} onChange={set('body')} /></NF>
          <div className="two">
            <NF error={show('capacity')} id="capacity" label="모집 인원 (나 포함)"><input id="np-capacity" type="number" min="2" max="30" value={v.capacity} onChange={set('capacity')} /></NF>
            <NF error={show('deadline')} id="deadline" label="모집 마감" hint="마감일이 지나면 신청을 받지 않습니다."><input id="np-deadline" type="date" value={v.deadline} onChange={set('deadline')} /></NF>
          </div>
          <div className="two">
            <NF error={show('start_date')} id="start_date" label="활동 시작"><input id="np-start_date" type="date" value={v.start_date} onChange={set('start_date')} /></NF>
            <NF error={show('end_date')} id="end_date" label="활동 종료" opt><input id="np-end_date" type="date" value={v.end_date} onChange={set('end_date')} /></NF>
          </div>
          <div className="field">
            <span className="label">정기 모임 요일 <span className="opt">(선택)</span></span>
            <div className="chip-group" role="group" aria-label="정기 모임 요일">
              {[1, 2, 3, 4, 5, 6, 0].map((d) => <button key={d} type="button" className="chip" aria-pressed={v.meet_days.includes(d)} onClick={() => toggleDay(d)}>{WEEKDAYS[d]}</button>)}
            </div>
            <span className="hint">고르면 참여가 확정된 사람의 개인 캘린더에 반복 일정으로 들어갑니다.</span>
          </div>
          <div className="two">
            <NF error={show('meet_time')} id="meet_time" label="모임 시각" opt><input id="np-meet_time" type="time" value={v.meet_time} onChange={set('meet_time')} /></NF>
            <NF error={show('place')} id="place" label="장소" opt><input id="np-place" value={v.place} onChange={set('place')} placeholder="예: 디스코드, 인성관 306호" /></NF>
          </div>
          <div className="field">
            <span className="label">진행 방식</span>
            <div className="chip-group" role="group" aria-label="진행 방식">
              {['온라인', '대면', '혼합'].map((m) => <button key={m} type="button" className="chip" aria-pressed={v.mode === m} onClick={() => setV((x) => ({ ...x, mode: m }))}>{m}</button>)}
            </div>
          </div>
          <NF error={show('condition')} id="condition" label="참여 조건" opt hint="신청자가 미리 알아야 할 조건을 구체적으로 적어 주세요."><input id="np-condition" value={v.condition} onChange={set('condition')} placeholder="예: 매주 기출 1회분 풀어 오기" /></NF>
          <NF error={show('link')} id="link" label="참고 링크" opt><input id="np-link" type="url" value={v.link} onChange={set('link')} placeholder="공모전 공고나 강의 주소" /></NF>
          {user.isAdmin && (
            <label className="check-line" htmlFor="np-club">
              <input id="np-club" type="checkbox" checked={v.club} onChange={set('club')} />
              <span>동아리 개설로 올리기<small>운영진만 보이는 옵션입니다. 선택하지 않으면 개인 신청으로 표시됩니다.</small></span>
            </label>
          )}
          {tried && Object.keys(errors).length > 0 && <p className="small" role="alert" style={{ color: 'var(--accent-text)' }}>빨간색으로 표시된 {Object.keys(errors).length}개 항목을 고쳐 주세요.</p>}
          {err && <p className="error-box">{err}</p>}
          <div className="actions"><button type="submit" className="btn primary" disabled={busy}>모집글 올리기</button><Link className="btn" to="/projects?tab=recruiting">취소</Link></div>
        </form>
        <aside className="stack">
          <span className="small muted" style={{ fontWeight: 600 }}>목록에 이렇게 보입니다</span>
          <div style={{ pointerEvents: 'none' }} aria-hidden="true"><RecruitCard p={preview} userId="none" /></div>
          <div className="aside-box soft">
            <h2>올리기 전에 확인하세요</h2>
            <ul>
              <li>전화번호나 카카오톡 ID는 본문에 적지 말고, 수락 후에 참여자에게만 알려 주세요.</li>
              <li>참여 신청이 들어오면 내 활동에서 수락하거나 거절할 수 있습니다.</li>
              <li>끝난 프로젝트는 완료 처리하면 완료 프로젝트로 옮겨집니다.</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
