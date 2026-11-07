import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import * as api from '../lib/api';
import { useTable, useUser } from '../lib/hooks';
import { WEEKDAYS, addDays, dayKey, parseDay, shortDate } from '../lib/format';
import { isMember, nextMeeting, occurrences } from '../lib/projects';
import { Avatar, MonthCalendar, ProjectBadges, Progress } from '../components/UI';

const STATUS = { pending: ['neutral', '수락 대기'], accepted: ['ok', '수락됨'], rejected: ['neutral', '거절됨'] };

function nextText(p) {
  const n = nextMeeting(p);
  if (!n) return p.place ? `장소: ${p.place}` : '정기 모임 없음';
  const d = parseDay(n.date);
  return `다음 모임 ${d.getMonth() + 1}/${d.getDate()}(${WEEKDAYS[d.getDay()]}) ${n.start_time}${p.place ? ` · ${p.place}` : ''}`;
}

export default function Me() {
  const user = useUser();
  const projects = useTable('projects').rows || [];
  const apps = useTable('applications').rows || [];
  const events = useTable('events').rows || [];
  const posts = useTable('posts').rows || [];
  const [selected, setSelected] = useState(dayKey(new Date()));
  const [busy, setBusy] = useState('');

  const calendarEvents = useMemo(() => {
    if (!user) return [];
    const today = new Date();
    const from = addDays(today, -62);
    const to = addDays(today, 120);
    const mine = projects.filter((p) => p.status !== 'done' && isMember(p, user.id)).flatMap((p) => occurrences(p, from, to).map((e) => ({ ...e, mine: true })));
    return [...events, ...mine];
  }, [user, projects, events]);

  if (user === undefined) return <p className="state">확인하는 중입니다.</p>;
  if (!user) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>내 활동</h1>
      <p className="muted">로그인하면 참여 중인 프로젝트, 신청 현황, 개인 캘린더를 한곳에서 볼 수 있습니다.</p>
      <Link className="btn primary" to="/login?next=%2Fme">로그인하기</Link>
    </div>
  );

  const joined = projects.filter((p) => p.status !== 'done' && isMember(p, user.id));
  const myApps = apps.filter((a) => a.user_id === user.id);
  const myRecruits = projects.filter((p) => p.status === 'recruiting' && p.author_id === user.id);
  const myPosts = posts.filter((p) => p.author_id === user.id);
  const titleOf = (id) => projects.find((p) => p.id === id)?.title || '삭제된 프로젝트';

  const decide = async (a, ok) => { setBusy(a.id); try { await api.decideApplication(a, ok); } finally { setBusy(''); } };

  return (
    <>
      <div className="profile">
        <span className="big" aria-hidden="true">{user.name.slice(0, 1)}</span>
        <div>
          <h1>{user.name}</h1>
          <p className="sub">{[user.generation ? `${user.generation}기` : '기수 미정', user.part, user.role].filter(Boolean).join(' · ')}</p>
        </div>
        <div className="actions">
          {user.isAdmin && <Link className="btn" to="/admin">운영진 화면</Link>}
          <button type="button" className="btn ghost" onClick={api.signOut}>로그아웃</button>
        </div>
      </div>
      <p className="stats">
        <span>참여 중<b>{joined.length}</b></span>
        <span>신청 대기<b>{myApps.filter((a) => a.status === 'pending').length}</b></span>
        <span>내가 올린 모집<b>{myRecruits.length}</b></span>
        <span>작성한 글<b>{myPosts.length}</b></span>
      </p>

      <div className="me-grid">
        <section className="section" aria-labelledby="cal-h">
          <div className="section-head">
            <h2 id="cal-h">내 캘린더</h2>
            <span className="legend"><span><i style={{ background: 'var(--accent-soft)', boxShadow: 'inset 0 0 0 1px var(--accent)' }} />내 프로젝트</span><span><i style={{ background: 'var(--stone-soft)', boxShadow: 'inset 0 0 0 1px var(--stone)' }} />동아리 일정</span></span>
          </div>
          <MonthCalendar events={calendarEvents} selected={selected} onSelect={setSelected} compact />
        </section>

        <div className="stack" style={{ gap: 36 }}>
          <section className="section" aria-labelledby="j-h">
            <div className="section-head"><h2 id="j-h">참여 중인 활동</h2><Link to="/projects">프로젝트 목록</Link></div>
            {joined.length === 0 && <p className="muted small">아직 참여 중인 프로젝트가 없습니다. <Link to="/projects?tab=recruiting">모집 중인 프로젝트</Link>를 둘러보세요.</p>}
            <div className="stack">
              {joined.map((p) => (
                <Link key={p.id} to={`/projects/${p.id}`} className="mini">
                  <span className="line"><ProjectBadges p={p} withStatus /><span className="mine-flag">{p.author_id === user.id ? '내가 연 프로젝트' : '참여자'}</span></span>
                  <b>{p.title}</b>
                  <span className="sub">{nextText(p)}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="a-h">
            <h2 id="a-h">내 신청 현황</h2>
            {myApps.length === 0 && <p className="muted small">보낸 참여 신청이 없습니다.</p>}
            <div className="rows">
              {myApps.map((a) => (
                <div key={a.id} className="rrow">
                  <span className="line"><Link to={`/projects/${a.project_id}`}><b>{titleOf(a.project_id)}</b></Link><span className={`badge ${STATUS[a.status][0]}`}>{STATUS[a.status][1]}</span></span>
                  <span className="line small muted"><span>{shortDate(a.created_at)} 신청</span>{a.status === 'pending' && <button type="button" className="btn ghost small" onClick={() => api.remove('applications', a.id)}>신청 취소</button>}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="r-h">
            <div className="section-head"><h2 id="r-h">내가 올린 모집</h2><Link to="/projects/new">새로 올리기</Link></div>
            {myRecruits.length === 0 && <p className="muted small">올린 모집글이 없습니다.</p>}
            {myRecruits.map((p) => {
              const list = apps.filter((a) => a.project_id === p.id && a.status === 'pending');
              return (
                <div key={p.id} className="mini">
                  <span className="line"><Link to={`/projects/${p.id}`}><b>{p.title}</b></Link><Progress p={p} /></span>
                  {list.length === 0 && <span className="sub">새 신청이 없습니다.</span>}
                  {list.map((a) => (
                    <div key={a.id} className="applicant">
                      <span className="line"><span className="author"><Avatar name={a.user_name} />{a.user_name}<span className="when">{shortDate(a.created_at)}</span></span>
                        <span className="actions">
                          <button type="button" className="btn primary small" disabled={busy === a.id} onClick={() => decide(a, true)}>수락</button>
                          <button type="button" className="btn small" disabled={busy === a.id} onClick={() => decide(a, false)}>거절</button>
                        </span>
                      </span>
                      {a.message && <p>{a.message}</p>}
                    </div>
                  ))}
                </div>
              );
            })}
          </section>

          <section className="section" aria-labelledby="p-h">
            <div className="section-head"><h2 id="p-h">내가 쓴 글</h2><Link to="/community/new">글쓰기</Link></div>
            {myPosts.length === 0 && <p className="muted small">아직 쓴 글이 없습니다.</p>}
            <div className="rows">
              {myPosts.map((p) => <Link key={p.id} to={`/community/${p.id}`} className="row"><span className="date">{shortDate(p.created_at)}</span><span className="row-title">{p.title}</span><span className="meta">{p.category}</span></Link>)}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export function Login() {
  const user = useUser();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = params.get('next') || '/me';
  const members = useTable('members').rows || [];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const local = api.mode === 'local';

  if (user) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>{user.name}로 로그인되어 있습니다</h1>
      <div className="actions"><Link className="btn primary" to={next}>계속하기</Link><button type="button" className="btn" onClick={api.signOut}>로그아웃</button></div>
    </div>
  );

  return (
    <div className="login">
      <div className="page-head" style={{ marginBottom: 0 }}>
        <h1>로그인</h1>
        <p>{local
          ? '지금은 예시 데이터로 동작하는 시연 모드입니다. 아래에서 멤버 한 명을 골라 그 사람으로 들어가 보세요. 회장·부회장·운영진으로 들어가면 운영진 화면도 쓸 수 있습니다.'
          : '부원 이메일을 입력하면 로그인 링크를 보내 드립니다. 비밀번호가 있는 계정은 비밀번호를 함께 입력하면 바로 들어갑니다.'}</p>
      </div>
      {local ? (
        <div className="account-grid">
          {members.map((m) => (
            <button key={m.id} type="button" className="account" onClick={async () => { await api.signIn(m.id); navigate(next); }}>
              <Avatar name={m.name} /><span>{m.name}<small>{m.generation ? `${m.generation}기` : '기수 미정'} · {m.role}</small></span>
            </button>
          ))}
        </div>
      ) : (
        <form className="card-form" onSubmit={async (e) => {
          e.preventDefault(); setErr(''); setMsg('');
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { setErr('name@example.com 형식으로 입력하세요.'); return; }
          if (password) {
            try { await api.signInWithPassword(email, password); navigate(next); }
            catch (x) { setErr(`로그인하지 못했습니다. 이메일과 비밀번호를 확인하세요. (${x.message})`); }
            return;
          }
          try { await api.signIn(email); setMsg(`${email}로 로그인 링크를 보냈습니다. 메일함에서 링크를 누르면 내 활동 화면으로 돌아옵니다.`); }
          catch (x) { setErr(`로그인 링크를 보내지 못했습니다. (${x.message})`); }
        }}>
          <div className="field"><label htmlFor="login-email">이메일</label><input id="login-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="field">
            <label htmlFor="login-password">비밀번호 (선택)</label>
            <input id="login-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className="hint">비워 두면 이메일로 로그인 링크를 보냅니다.</span>
          </div>
          {err && <p className="error-box" role="alert">{err}</p>}
          {msg && <p className="notice-box" role="status">{msg}</p>}
          <div className="actions"><button type="submit" className="btn primary">{password ? '로그인' : '로그인 링크 받기'}</button></div>
          <p className="small muted">처음 로그인하면 운영진이 승인한 뒤에 글과 모집글을 쓸 수 있습니다.</p>
        </form>
      )}
    </div>
  );
}
