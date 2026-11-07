// 팀 공간 > 할 일 보드: 할 일 · 진행 중 · 완료. 칸 이동은 버튼으로.
import { useState } from 'react';
import * as api from '../lib/api';
import { shortDate } from '../lib/format';
import { TASK_COLUMNS, canDelete, dueState } from '../lib/workspace';
import { DelBtn, Empty, ErrLine, F, useRun } from '../components/SpaceUI';

function TaskForm({ ctx, initial, onDone }) {
  const { p, user, team } = ctx;
  const [v, setV] = useState(() => ({ title: initial?.title || '', assignee_id: initial?.assignee_id || '', due: initial?.due || '', note: initial?.note || '' }));
  const [tried, setTried] = useState(false);
  const { busy, err, run } = useRun();
  const e = {};
  if (!v.title.trim()) e.title = '할 일을 적어 주세요.';
  else if (v.title.trim().length > 200) e.title = '200자 이하로 적어 주세요.';
  const show = (k) => tried && e[k];
  const fid = (k) => `tk-${initial?.id || 'new'}-${k}`;
  const set = (k) => (ev) => setV((x) => ({ ...x, [k]: ev.target.value }));

  async function submit(ev) {
    ev.preventDefault();
    setTried(true);
    if (Object.keys(e).length) return;
    const who = team.find((t) => t.id === v.assignee_id);
    const row = { title: v.title.trim(), assignee_id: who?.id || null, assignee_name: who?.name || null, due: v.due || null, note: v.note.trim() || null };
    const ok = await run(() => api.save('ws_tasks', initial?.id ? { id: initial.id, ...row } : { ...row, status: 'todo', sort: 0, project_id: p.id, created_by: user.id, created_by_name: user.name }));
    if (ok) { if (!initial) { setV({ title: '', assignee_id: v.assignee_id, due: '', note: '' }); setTried(false); } onDone?.(); }
  }

  return (
    <form className="ws-form" noValidate onSubmit={submit}>
      <F id={fid('title')} label="할 일" error={show('title')}><input id={fid('title')} value={v.title} onChange={set('title')} placeholder="예: 로그인 화면 모바일 점검" /></F>
      <div className="two">
        <F id={fid('who')} label="담당자" opt>
          <select id={fid('who')} value={v.assignee_id} onChange={set('assignee_id')}>
            <option value="">정하지 않음</option>
            {team.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </F>
        <F id={fid('due')} label="마감일" opt><input id={fid('due')} type="date" value={v.due} onChange={set('due')} /></F>
      </div>
      <F id={fid('note')} label="메모" opt><textarea id={fid('note')} className="short" value={v.note} onChange={set('note')} /></F>
      <ErrLine err={err} />
      <div className="actions">
        <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장 중…' : initial ? '고친 내용 저장' : '할 일 추가'}</button>
        {onDone && <button type="button" className="btn" onClick={onDone}>{initial ? '취소' : '닫기'}</button>}
      </div>
    </form>
  );
}

function TaskCard({ ctx, t }) {
  const { p, user, readOnly } = ctx;
  const [editing, setEditing] = useState(false);
  const { busy, err, run } = useRun();
  const due = dueState(t);
  const i = TASK_COLUMNS.findIndex(([k]) => k === t.status);
  const prev = TASK_COLUMNS[i - 1];
  const next = TASK_COLUMNS[i + 1];
  const move = (to) => run(() => api.save('ws_tasks', { id: t.id, status: to }));

  if (editing) return <li className="task-card"><TaskForm ctx={ctx} initial={t} onDone={() => setEditing(false)} /></li>;
  return (
    <li className={`task-card${t.assignee_id === user.id ? ' mine' : ''}`}>
      <b>{t.title}</b>
      <span className="task-meta">
        <span>{t.assignee_name || '담당 미정'}</span>
        {t.due && <span>{shortDate(t.due)} 마감</span>}
        {due && <span className={`badge ${due.cls}`}>{due.text}</span>}
      </span>
      {t.note && <p className="small muted ws-pre">{t.note}</p>}
      {!readOnly && (
        <span className="task-actions">
          {prev && <button type="button" className="btn small" disabled={busy} onClick={() => move(prev[0])} aria-label={`「${t.title}」 ${prev[1]}(으)로 옮기기`}>← {prev[1]}</button>}
          {next && <button type="button" className="btn small" disabled={busy} onClick={() => move(next[0])} aria-label={`「${t.title}」 ${next[1]}(으)로 옮기기`}>{next[1]} →</button>}
          <button type="button" className="btn ghost small" onClick={() => setEditing(true)}>고치기</button>
          {canDelete(t, p, user) && <DelBtn what={`할 일 「${t.title}」`} disabled={busy} onDelete={() => run(() => api.remove('ws_tasks', t.id))} />}
        </span>
      )}
      <ErrLine err={err} />
    </li>
  );
}

export function Tasks({ ctx }) {
  const { user, data, readOnly } = ctx;
  const [adding, setAdding] = useState(false);
  const [mineOnly, setMineOnly] = useState(false);
  const all = (data.tasks.rows || []).filter((t) => !mineOnly || t.assignee_id === user.id);
  const overdue = all.filter((t) => dueState(t)?.cls === 'due').length;

  return (
    <div className="ws-tasks">
      <div className="section-head">
        <div className="actions">
          <button type="button" className="chip" aria-pressed={mineOnly} onClick={() => setMineOnly((x) => !x)}>내 할 일만</button>
          {overdue > 0 && <span className="badge due">마감 지남·임박 {overdue}</span>}
        </div>
        {!readOnly && <button type="button" className="btn small primary" aria-expanded={adding} onClick={() => setAdding((x) => !x)}>{adding ? '닫기' : '할 일 추가'}</button>}
      </div>
      {adding && <div className="ws-card"><TaskForm ctx={ctx} onDone={() => setAdding(false)} /></div>}
      <div className="board3">
        {TASK_COLUMNS.map(([k, label]) => {
          const list = all.filter((t) => t.status === k);
          return (
            <section key={k} className={`col col-${k}`} aria-labelledby={`col-${k}`}>
              <h2 id={`col-${k}`}>{label} <span className="muted small">{list.length}</span></h2>
              {list.length === 0 && <Empty>{mineOnly ? '내 카드가 없습니다.' : k === 'todo' ? '할 일을 추가하거나 회의록에서 보내 보세요.' : '비어 있습니다.'}</Empty>}
              <ul>{list.map((t) => <TaskCard key={t.id} ctx={ctx} t={t} />)}</ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
