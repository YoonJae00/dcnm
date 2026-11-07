// 프로젝트 팀 공간: 작성자·참여 확정 팀원·운영진만. 탭은 ?tab= 으로 기억합니다.
import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import * as api from '../lib/api';
import { useItem, useRows, useTable, useUser } from '../lib/hooks';
import { addDays, dayKey, fullDate, paragraphs, shortDate, timeRange } from '../lib/format';
import { occurrences } from '../lib/projects';
import {
  EVENT_KIND, WS_TABS, canDelete, canEnter, dueState, eventItem, isTeamMember, meetingItem, teamOf, upcoming,
} from '../lib/workspace';
import { MonthCalendar, ProjectBadges } from '../components/UI';
import { DelBtn, Empty, ErrLine, F, Meta, useRun } from '../components/SpaceUI';
import { Meetings, JoinButton } from './SpaceMeetings';
import { Tasks } from './SpaceTasks';

export default function Space() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const tab = WS_TABS.some(([k]) => k === params.get('tab')) ? params.get('tab') : 'home';
  const { item: p, error } = useItem('projects', id);
  const user = useUser();
  const members = useTable('members').rows;
  const allowed = canEnter(p, user);
  const match = allowed ? { project_id: id } : null;
  const data = {
    posts: useRows('ws_posts', match),
    events: useRows('ws_events', match),
    meetings: useRows('ws_meetings', match),
    slots: useRows('ws_meeting_slots', match),
    votes: useRows('ws_meeting_votes', match),
    minutes: useRows('ws_minutes', match),
    tasks: useRows('ws_tasks', match),
  };

  if (error) return <p className="error-box">프로젝트를 불러오지 못했습니다: {error}</p>;
  if (p === undefined || user === undefined) return <p className="state">불러오는 중입니다.</p>;
  if (!p) return (
    <div className="article"><h1>찾는 프로젝트가 없습니다</h1><p className="muted">삭제되었거나 주소가 바뀌었을 수 있습니다.</p><Link to="/projects">프로젝트 목록으로 가기</Link></div>
  );
  if (!user) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>팀 공간</h1>
      <p className="muted">팀 공간은 프로젝트 팀원만 볼 수 있어요. 로그인해 주세요.</p>
      <div className="actions">
        <Link className="btn primary" to={`/login?next=${encodeURIComponent(`/projects/${p.id}/space`)}`}>로그인하기</Link>
        <Link className="btn" to={`/projects/${p.id}`}>프로젝트 상세로 돌아가기</Link>
      </div>
    </div>
  );
  if (!allowed) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>팀원만 볼 수 있어요</h1>
      <p className="muted">「{p.title}」 팀 공간은 프로젝트 작성자와 참여가 확정된 팀원만 들어올 수 있습니다.</p>
      <div className="actions"><Link className="btn" to={`/projects/${p.id}`}>프로젝트 상세로 돌아가기</Link></div>
    </div>
  );

  const team = teamOf(p, members);
  const readOnly = p.status === 'done';
  const ctx = { p, user, team, readOnly, data, go: (t) => setParams(t === 'home' ? {} : { tab: t }) };
  const loadErr = Object.values(data).map((d) => d.error).find(Boolean);
  const loading = Object.values(data).some((d) => !d.rows && !d.error);

  return (
    <div className="space">
      <Link className="back" to={`/projects/${p.id}`}>← 프로젝트 상세</Link>
      <div className="space-head">
        <ProjectBadges p={p} withStatus />
        <h1>{p.title} <span className="muted">팀 공간</span></h1>
        <p className="muted small">
          팀원 {team.map((m) => m.name).join(', ')}
          {!isTeamMember(p, user) && user.isAdmin && <span className="badge neutral" style={{ marginLeft: 8 }}>운영진으로 보는 중</span>}
        </p>
      </div>
      {readOnly && <p className="notice-box">완료된 프로젝트라 읽기만 할 수 있어요.</p>}
      <div className="tabbar ws-tabs" role="tablist" aria-label="팀 공간 메뉴">
        {WS_TABS.map(([k, label]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => ctx.go(k)}>{label}</button>
        ))}
      </div>
      {loadErr && <p className="error-box">팀 공간 자료를 불러오지 못했습니다: {loadErr}</p>}
      {loading && !loadErr && <p className="state">불러오는 중입니다.</p>}
      {!loading && !loadErr && (
        <div role="tabpanel">
          {tab === 'home' && <Home ctx={ctx} />}
          {tab === 'schedule' && <Schedule ctx={ctx} />}
          {tab === 'meetings' && <Meetings ctx={ctx} />}
          {tab === 'tasks' && <Tasks ctx={ctx} />}
          {tab === 'files' && <Files ctx={ctx} />}
        </div>
      )}
    </div>
  );
}

// 이 팀의 캘린더 항목: 팀 일정 + 확정·끝난 회의 + 정기 모임
function teamItems(p, data) {
  const today = new Date();
  const evs = (data.events.rows || []).map((e) => eventItem(e));
  const mts = (data.meetings.rows || []).filter((m) => m.status !== 'polling' && m.starts_at).map((m) => ({ ...meetingItem(m), meeting: m }));
  const regular = p.status === 'done' ? [] : occurrences(p, addDays(today, -62), addDays(today, 120)).map((e) => ({ ...e, title: '정기 모임', kind: '정기', to: undefined }));
  return [...evs, ...mts, ...regular];
}

/* ---------------- 홈 ---------------- */
function Home({ ctx }) {
  const { p, user, data, go } = ctx;
  const pinned = (data.posts.rows || []).filter((x) => x.kind === 'notice' && x.pinned);
  const next = upcoming(teamItems(p, data), 3);
  const myTasks = (data.tasks.rows || []).filter((t) => t.assignee_id === user.id && t.status !== 'done');
  const recent = (data.posts.rows || []).filter((x) => x.kind !== 'notice').sort((a, b) => String(b.created_at).localeCompare(String(a.created_at))).slice(0, 4);
  const polling = (data.meetings.rows || []).filter((m) => m.status === 'polling');

  return (
    <div className="ws-home">
      <section className="section" aria-labelledby="h-pin">
        <div className="section-head"><h2 id="h-pin">고정 공지</h2><button type="button" className="linkish" onClick={() => go('files')}>공지 전체</button></div>
        {pinned.length === 0 && <Empty>고정된 공지가 없습니다. 자료 탭에서 공지를 쓰고 고정해 보세요.</Empty>}
        {pinned.map((n) => <NoticeBody key={n.id} n={n} />)}
      </section>

      <section className="section" aria-labelledby="h-next">
        <div className="section-head"><h2 id="h-next">다가오는 회의·일정</h2><button type="button" className="linkish" onClick={() => go('schedule')}>일정 전체</button></div>
        {next.length === 0 && <Empty>다가오는 일정이 없습니다.</Empty>}
        <div className="stack">
          {next.map((e) => (
            <div key={e.id} className="ws-card row-card">
              <span className="when">{shortDate(e.date)} {timeRange(e)}</span>
              <b>{e.title} <span className="badge neutral">{e.kind}</span></b>
              {e.place && <span className="muted small">{e.place}</span>}
              {e.meeting && <JoinButton m={e.meeting} />}
            </div>
          ))}
        </div>
        {polling.length > 0 && (
          <p className="notice-box">날짜를 정하는 중인 회의가 {polling.length}개 있어요. <button type="button" className="linkish" onClick={() => go('meetings')}>가능한 시간 체크하기</button></p>
        )}
      </section>

      <section className="section" aria-labelledby="h-task">
        <div className="section-head"><h2 id="h-task">내 할 일</h2><button type="button" className="linkish" onClick={() => go('tasks')}>보드 열기</button></div>
        {myTasks.length === 0 && <Empty>나에게 맡겨진 할 일이 없습니다.</Empty>}
        <div className="rows">
          {myTasks.map((t) => {
            const due = dueState(t);
            return (
              <div key={t.id} className="rrow">
                <span className="line"><b>{t.title}</b>{due && <span className={`badge ${due.cls}`}>{due.text}</span>}</span>
                <span className="small muted">{t.status === 'doing' ? '진행 중' : '할 일'}{t.due ? ` · ${shortDate(t.due)} 마감` : ''}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" aria-labelledby="h-recent">
        <div className="section-head"><h2 id="h-recent">최근 자료</h2><button type="button" className="linkish" onClick={() => go('files')}>자료 전체</button></div>
        {recent.length === 0 && <Empty>아직 올린 링크나 파일이 없습니다.</Empty>}
        <div className="rows">
          {recent.map((x) => (
            <div key={x.id} className="rrow">
              <span className="line">
                {x.kind === 'link' ? <a href={x.url} target="_blank" rel="noreferrer"><b>{x.title}</b></a> : <b>{x.title}</b>}
                <span className="badge neutral">{x.kind === 'link' ? '링크' : '파일'}</span>
              </span>
              <Meta row={x} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function NoticeBody({ n }) {
  return (
    <article className="ws-card">
      <b>{n.pinned && <span className="pin">고정</span>} {n.title}</b>
      {n.body && <div className="ws-text">{paragraphs(n.body).map((ls, i) => <p key={i}>{ls.map((l, j) => <span key={j}>{l}{j < ls.length - 1 && <br />}</span>)}</p>)}</div>}
      <Meta row={n} />
    </article>
  );
}

/* ---------------- 일정 ---------------- */
const EMPTY_EVENT = { title: '', kind: 'event', date: '', start_time: '', end_time: '', place: '', note: '' };

function EventForm({ ctx, initial, onDone }) {
  const { p, user } = ctx;
  const [v, setV] = useState(() => ({ ...EMPTY_EVENT, date: dayKey(new Date()), ...(initial || {}) }));
  const [tried, setTried] = useState(false);
  const { busy, err, run } = useRun();
  const e = {};
  if (!v.title.trim()) e.title = '제목을 적어 주세요.';
  else if (v.title.trim().length > 120) e.title = '120자 이하로 적어 주세요.';
  if (!v.date) e.date = '날짜를 골라 주세요.';
  if (v.end_time && !v.start_time) e.start_time = '끝 시각을 정했다면 시작 시각도 정해 주세요.';
  if (v.start_time && v.end_time && v.end_time < v.start_time) e.end_time = '끝 시각이 시작보다 빠릅니다.';
  const show = (k) => tried && e[k];
  const set = (k) => (ev) => setV((x) => ({ ...x, [k]: ev.target.value }));
  const fid = (k) => `ev-${initial?.id || 'new'}-${k}`;

  async function submit(ev) {
    ev.preventDefault();
    setTried(true);
    if (Object.keys(e).length) return;
    const row = { title: v.title.trim(), kind: v.kind, date: v.date, start_time: v.start_time || null, end_time: v.end_time || null, place: v.place.trim() || null, note: v.note.trim() || null };
    const ok = await run(() => api.save('ws_events', initial?.id ? { id: initial.id, ...row } : { ...row, project_id: p.id, created_by: user.id, created_by_name: user.name }));
    if (ok) { if (!initial) { setV({ ...EMPTY_EVENT, date: v.date }); setTried(false); } onDone?.(); }
  }

  return (
    <form className="ws-form" noValidate onSubmit={submit}>
      <div className="chip-group" role="group" aria-label="종류">
        {Object.entries(EVENT_KIND).map(([k, label]) => <button key={k} type="button" className="chip" aria-pressed={v.kind === k} onClick={() => setV((x) => ({ ...x, kind: k }))}>{label}</button>)}
      </div>
      <F id={fid('title')} label="제목" error={show('title')}><input id={fid('title')} value={v.title} onChange={set('title')} placeholder={v.kind === 'deadline' ? '예: 1차 배포 마감' : '예: 운영진 시연'} /></F>
      <div className="three">
        <F id={fid('date')} label="날짜" error={show('date')}><input id={fid('date')} type="date" value={v.date} onChange={set('date')} /></F>
        <F id={fid('start')} label="시작" opt error={show('start_time')}><input id={fid('start')} type="time" value={v.start_time || ''} onChange={set('start_time')} /></F>
        <F id={fid('end')} label="끝" opt error={show('end_time')}><input id={fid('end')} type="time" value={v.end_time || ''} onChange={set('end_time')} /></F>
      </div>
      <F id={fid('place')} label="장소" opt><input id={fid('place')} value={v.place || ''} onChange={set('place')} placeholder="예: 인성관 306호, 디스코드" /></F>
      <F id={fid('note')} label="메모" opt><textarea id={fid('note')} className="short" value={v.note || ''} onChange={set('note')} /></F>
      <ErrLine err={err} />
      <div className="actions">
        <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장 중…' : initial ? '고친 내용 저장' : '일정 추가'}</button>
        {onDone && initial && <button type="button" className="btn" onClick={onDone}>취소</button>}
      </div>
    </form>
  );
}

function Schedule({ ctx }) {
  const { p, user, data, readOnly } = ctx;
  const [selected, setSelected] = useState(dayKey(new Date()));
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const { err, run } = useRun();
  const items = useMemo(() => teamItems(p, data), [p, data.events.rows, data.meetings.rows]);
  const today = dayKey(new Date());
  const events = data.events.rows || [];
  const coming = events.filter((e) => e.date >= today);
  const past = events.filter((e) => e.date < today).reverse();

  const row = (e) => editing === e.id ? (
    <div key={e.id} className="ws-card"><EventForm ctx={ctx} initial={e} onDone={() => setEditing(null)} /></div>
  ) : (
    <div key={e.id} className="ws-card row-card">
      <span className="when">{shortDate(e.date)} {timeRange(e)}</span>
      <b>{e.title} <span className={`badge ${e.kind === 'deadline' ? 'due' : 'neutral'}`}>{EVENT_KIND[e.kind] || '일정'}</span></b>
      {(e.place || e.note) && <span className="muted small">{[e.place, e.note].filter(Boolean).join(' · ')}</span>}
      <span className="line"><Meta row={e} />
        {!readOnly && (
          <span className="actions">
            <button type="button" className="btn ghost small" onClick={() => setEditing(e.id)}>고치기</button>
            {canDelete(e, p, user) && <DelBtn what={`일정 「${e.title}」`} onDelete={() => run(() => api.remove('ws_events', e.id))} />}
          </span>
        )}
      </span>
    </div>
  );

  return (
    <div className="ws-split">
      <section className="section" aria-labelledby="s-cal">
        <div className="section-head">
          <h2 id="s-cal">팀 캘린더</h2>
          <span className="legend"><span><i style={{ background: 'var(--accent-soft)', boxShadow: 'inset 0 0 0 1px var(--accent)' }} />팀 일정·회의</span><span><i style={{ background: 'var(--stone-soft)', boxShadow: 'inset 0 0 0 1px var(--stone)' }} />정기 모임</span></span>
        </div>
        <MonthCalendar events={items.map((e) => ({ ...e, mine: e.kind !== '정기' }))} selected={selected} onSelect={setSelected} compact />
        <p className="small muted">여기 넣은 일정과 확정된 회의는 팀원 모두의 내 활동 캘린더에도 들어갑니다.</p>
      </section>
      <div className="stack" style={{ gap: 28 }}>
        <section className="section" aria-labelledby="s-list">
          <div className="section-head">
            <h2 id="s-list">다가오는 일정</h2>
            {!readOnly && <button type="button" className="btn small primary" aria-expanded={adding} onClick={() => setAdding((x) => !x)}>{adding ? '닫기' : '일정 추가'}</button>}
          </div>
          {adding && !readOnly && <div className="ws-card"><EventForm ctx={ctx} /></div>}
          <ErrLine err={err} />
          {coming.length === 0 && <Empty>다가오는 팀 일정이 없습니다. 마감이나 발표처럼 팀이 함께 기억할 날을 넣어 보세요.</Empty>}
          <div className="stack">{coming.map(row)}</div>
        </section>
        {past.length > 0 && (
          <details className="ws-past">
            <summary>지난 일정 {past.length}개</summary>
            <div className="stack">{past.map(row)}</div>
          </details>
        )}
      </div>
    </div>
  );
}

/* ---------------- 자료 (공지·링크·파일) ---------------- */
function PostForm({ ctx, kind, initial, onDone }) {
  const { p, user } = ctx;
  const [v, setV] = useState(() => ({ title: initial?.title || '', body: initial?.body || '', url: initial?.url || '', pinned: !!initial?.pinned }));
  const [tried, setTried] = useState(false);
  const { busy, err, run } = useRun();
  const e = {};
  if (!v.title.trim()) e.title = '제목을 적어 주세요.';
  else if (v.title.trim().length > 120) e.title = '120자 이하로 적어 주세요.';
  if (kind === 'link' && !/^https?:\/\/\S+$/i.test(v.url.trim())) e.url = 'https://로 시작하는 주소를 넣어 주세요.';
  if (v.body.length > 5000) e.body = '5000자 이하로 줄여 주세요.';
  const show = (k) => tried && e[k];
  const fid = (k) => `${kind}-${initial?.id || 'new'}-${k}`;
  const set = (k) => (ev) => setV((x) => ({ ...x, [k]: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value }));

  async function submit(ev) {
    ev.preventDefault();
    setTried(true);
    if (Object.keys(e).length) return;
    const row = { title: v.title.trim(), body: v.body.trim() || null, ...(kind === 'link' ? { url: v.url.trim() } : {}), ...(kind === 'notice' ? { pinned: v.pinned } : {}) };
    const ok = await run(() => api.save('ws_posts', initial?.id ? { id: initial.id, ...row } : { ...row, kind, project_id: p.id, created_by: user.id, created_by_name: user.name }));
    if (ok) { if (!initial) { setV({ title: '', body: '', url: '', pinned: false }); setTried(false); } onDone?.(); }
  }

  return (
    <form className="ws-form" noValidate onSubmit={submit}>
      <F id={fid('title')} label={kind === 'link' ? '링크 이름' : '제목'} error={show('title')}>
        <input id={fid('title')} value={v.title} onChange={set('title')} placeholder={kind === 'link' ? '예: GitHub 저장소' : '예: 이번 주 회의 장소 변경'} />
      </F>
      {kind === 'link' && <F id={fid('url')} label="주소" error={show('url')}><input id={fid('url')} type="url" value={v.url} onChange={set('url')} placeholder="https://github.com/…" /></F>}
      <F id={fid('body')} label={kind === 'link' ? '설명' : '내용'} opt={kind === 'link'} error={show('body')}>
        <textarea id={fid('body')} className={kind === 'link' ? 'short' : ''} value={v.body} onChange={set('body')} />
      </F>
      {kind === 'notice' && (
        <label className="check-line" htmlFor={fid('pin')}>
          <input id={fid('pin')} type="checkbox" checked={v.pinned} onChange={set('pinned')} />
          <span>홈에 고정<small>팀 공간 홈 맨 위에 보입니다.</small></span>
        </label>
      )}
      <ErrLine err={err} />
      <div className="actions">
        <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장 중…' : initial ? '고친 내용 저장' : kind === 'link' ? '링크 추가' : '공지 올리기'}</button>
        {onDone && initial && <button type="button" className="btn" onClick={onDone}>취소</button>}
      </div>
    </form>
  );
}

function FileUpload({ ctx }) {
  const { p, user } = ctx;
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(0);
  const { busy, err, setErr, run } = useRun();
  if (!api.filesEnabled()) return <p className="notice-box">파일 올리기는 Supabase에 연결했을 때 쓸 수 있습니다. 지금은 예시 데이터 모드라 링크로 공유해 주세요.</p>;
  return (
    <form className="ws-form" onSubmit={async (ev) => {
      ev.preventDefault();
      if (!file) { setErr('올릴 파일을 골라 주세요.'); return; }
      if (file.size > api.WS_MAX_FILE) { setErr('10MB 이하 파일만 올릴 수 있습니다.'); return; }
      const ok = await run(async () => {
        const path = await api.uploadWorkspaceFile(p.id, file);
        try {
          await api.save('ws_posts', { kind: 'file', title: file.name, file_path: path, file_name: file.name, file_size: file.size, project_id: p.id, created_by: user.id, created_by_name: user.name });
        } catch (x) {
          await api.removeWorkspaceFile(path).catch(() => {});
          throw x;
        }
      });
      if (ok) { setFile(null); setKey((k) => k + 1); }
    }}>
      <F id="ws-file" label="파일 (10MB 이하)" hint="팀원만 내려받을 수 있습니다.">
        <input key={key} id="ws-file" type="file" onChange={(ev) => { setErr(''); setFile(ev.target.files?.[0] || null); }} />
      </F>
      <ErrLine err={err} />
      <div className="actions"><button type="submit" className="btn primary" disabled={busy || !file}>{busy ? '올리는 중…' : '파일 올리기'}</button></div>
    </form>
  );
}

const sizeText = (n) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)}MB` : `${Math.max(1, Math.round((n || 0) / 1024))}KB`);

function Files({ ctx }) {
  const { p, user, data, readOnly } = ctx;
  const [open, setOpen] = useState('');
  const [editing, setEditing] = useState(null);
  const { err, run } = useRun();
  const posts = data.posts.rows || [];
  const by = (k) => posts.filter((x) => x.kind === k);

  const actions = (x) => !readOnly && (
    <span className="actions">
      {x.kind !== 'file' && <button type="button" className="btn ghost small" onClick={() => setEditing(x.id)}>고치기</button>}
      {x.kind === 'notice' && <button type="button" className="btn ghost small" onClick={() => run(() => api.save('ws_posts', { id: x.id, pinned: !x.pinned }))}>{x.pinned ? '고정 풀기' : '고정'}</button>}
      {canDelete(x, p, user) && <DelBtn what={`「${x.title}」`} onDelete={() => run(async () => { if (x.kind === 'file') await api.removeWorkspaceFile(x.file_path); await api.remove('ws_posts', x.id); })} />}
    </span>
  );
  const head = (k, title, label) => (
    <div className="section-head">
      <h2 id={`f-${k}`}>{title} <span className="muted small">{by(k).length}</span></h2>
      {!readOnly && <button type="button" className="btn small primary" aria-expanded={open === k} onClick={() => setOpen((o) => (o === k ? '' : k))}>{open === k ? '닫기' : label}</button>}
    </div>
  );
  const download = (x) => run(async () => {
    const url = await api.workspaceFileUrl(x.file_path, x.file_name);
    if (url) window.open(url, '_blank', 'noopener');
  });

  return (
    <div className="ws-files">
      <ErrLine err={err} />
      <section className="section" aria-labelledby="f-notice">
        {head('notice', '공지', '공지 쓰기')}
        {open === 'notice' && <div className="ws-card"><PostForm ctx={ctx} kind="notice" onDone={() => setOpen('')} /></div>}
        {by('notice').length === 0 && <Empty>아직 공지가 없습니다. 모임 장소 변경이나 규칙처럼 모두가 알아야 할 것을 올려 주세요.</Empty>}
        <div className="stack">
          {by('notice').map((n) => editing === n.id
            ? <div key={n.id} className="ws-card"><PostForm ctx={ctx} kind="notice" initial={n} onDone={() => setEditing(null)} /></div>
            : <div key={n.id} className="ws-item"><NoticeBody n={n} />{actions(n)}</div>)}
        </div>
      </section>

      <section className="section" aria-labelledby="f-link">
        {head('link', '링크 모음', '링크 추가')}
        {open === 'link' && <div className="ws-card"><PostForm ctx={ctx} kind="link" onDone={() => setOpen('')} /></div>}
        {by('link').length === 0 && <Empty>GitHub·Figma·Notion·Drive처럼 자주 여는 주소를 모아 두세요.</Empty>}
        <div className="rows">
          {by('link').map((x) => editing === x.id
            ? <div key={x.id} className="ws-card"><PostForm ctx={ctx} kind="link" initial={x} onDone={() => setEditing(null)} /></div>
            : (
              <div key={x.id} className="rrow">
                <span className="line"><a href={x.url} target="_blank" rel="noreferrer"><b>{x.title}</b></a>{actions(x)}</span>
                <span className="small muted ws-url">{x.url}</span>
                {x.body && <span className="small">{x.body}</span>}
                <Meta row={x} />
              </div>
            ))}
        </div>
      </section>

      <section className="section" aria-labelledby="f-file">
        {head('file', '파일', '파일 올리기')}
        {open === 'file' && <div className="ws-card"><FileUpload ctx={ctx} /></div>}
        {by('file').length === 0 && <Empty>올린 파일이 없습니다.</Empty>}
        <div className="rows">
          {by('file').map((x) => (
            <div key={x.id} className="rrow">
              <span className="line">
                <button type="button" className="linkish" onClick={() => download(x)} disabled={!api.filesEnabled()}><b>{x.file_name || x.title}</b></button>
                {actions(x)}
              </span>
              <span className="small muted">{sizeText(x.file_size)} · {fullDate(x.created_at)} · {x.created_by_name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

