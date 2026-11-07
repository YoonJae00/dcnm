// 팀 공간 > 회의: 회의 만들기(후보 일시), 가능한 시간 투표, 확정, 입장 링크, 회의록, 할 일로 보내기
import { useState } from 'react';
import * as api from '../lib/api';
import { addDays, dayKey } from '../lib/format';
import { MEETING_STATUS, bestSlots, canDelete, lines, meetingEnd, meetingLive, toIso, whenText, hm } from '../lib/workspace';
import { DelBtn, Empty, ErrLine, F, Meta, useRun } from '../components/SpaceUI';

// 확정된 회의의 입장 버튼. 시작 15분 전부터 끝날 때까지 강조합니다.
export function JoinButton({ m }) {
  if (!m.link || m.status !== 'scheduled') return null;
  const live = meetingLive(m);
  return (
    <a className={`btn small ${live ? 'primary live' : ''}`} href={m.link} target="_blank" rel="noreferrer">
      {live ? '지금 입장' : '회의 입장'}
    </a>
  );
}

/* ---------------- 회의 만들기·고치기 ---------------- */
function MeetingForm({ ctx, initial, onDone }) {
  const { p, user } = ctx;
  const tomorrow = dayKey(addDays(new Date(), 1));
  const [v, setV] = useState(() => ({
    title: initial?.title || '', agenda: initial?.agenda || '', link: initial?.link || '', duration_min: String(initial?.duration_min || 60),
  }));
  const [slots, setSlots] = useState([{ date: tomorrow, time: '19:00' }]);
  const [tried, setTried] = useState(false);
  const { busy, err, run } = useRun();
  const editing = !!initial;

  const e = {};
  if (!v.title.trim()) e.title = '회의 제목을 적어 주세요.';
  else if (v.title.trim().length > 120) e.title = '120자 이하로 적어 주세요.';
  if (v.link.trim() && !/^https?:\/\/\S+$/i.test(v.link.trim())) e.link = 'https://로 시작하는 회의 주소를 넣어 주세요.';
  if (!editing) {
    if (slots.length === 0 || slots.some((s) => !s.date || !s.time)) e.slots = '후보 일시의 날짜와 시각을 모두 채워 주세요.';
    else if (new Set(slots.map((s) => `${s.date} ${s.time}`)).size !== slots.length) e.slots = '같은 후보가 두 번 들어 있습니다.';
  }
  const show = (k) => tried && e[k];
  const fid = (k) => `mt-${initial?.id || 'new'}-${k}`;
  const set = (k) => (ev) => setV((x) => ({ ...x, [k]: ev.target.value }));
  const setSlot = (i, k) => (ev) => setSlots((list) => list.map((s, j) => (j === i ? { ...s, [k]: ev.target.value } : s)));

  async function submit(ev) {
    ev.preventDefault();
    setTried(true);
    if (Object.keys(e).length) return;
    const row = { title: v.title.trim(), agenda: v.agenda.trim() || null, link: v.link.trim() || null, duration_min: Number(v.duration_min) };
    const ok = await run(async () => {
      if (editing) { await api.save('ws_meetings', { id: initial.id, ...row }); return; }
      const owner = { project_id: p.id, created_by: user.id, created_by_name: user.name };
      const m = await api.save('ws_meetings', { ...row, ...owner, status: 'polling' });
      for (const s of slots) await api.save('ws_meeting_slots', { ...owner, meeting_id: m.id, starts_at: toIso(s.date, s.time) });
    });
    if (ok) onDone?.();
  }

  return (
    <form className="ws-form" noValidate onSubmit={submit}>
      <F id={fid('title')} label="회의 제목" error={show('title')}><input id={fid('title')} value={v.title} onChange={set('title')} placeholder="예: 중간 점검 회의" /></F>
      <F id={fid('agenda')} label="안건" opt><textarea id={fid('agenda')} className="short" value={v.agenda} onChange={set('agenda')} placeholder="한 줄에 하나씩" /></F>
      <div className="two">
        <F id={fid('link')} label="회의 링크" opt error={show('link')} hint="Zoom·Meet·Discord 등"><input id={fid('link')} type="url" value={v.link} onChange={set('link')} placeholder="https://meet.google.com/…" /></F>
        <F id={fid('dur')} label="길이">
          <select id={fid('dur')} value={v.duration_min} onChange={set('duration_min')}>
            {[30, 60, 90, 120, 180].map((n) => <option key={n} value={n}>{n < 60 ? `${n}분` : `${n / 60}시간${n % 60 ? ' 30분' : ''}`}</option>)}
          </select>
        </F>
      </div>
      {!editing && (
        <fieldset className={`ws-slots${show('slots') ? ' invalid' : ''}`}>
          <legend>후보 일시 <span className="opt">팀원이 가능한 칸을 체크합니다</span></legend>
          {slots.map((s, i) => (
            <div key={i} className="slot-row">
              <label className="skip" htmlFor={`${fid('sd')}-${i}`}>후보 {i + 1} 날짜</label>
              <input id={`${fid('sd')}-${i}`} type="date" value={s.date} onChange={setSlot(i, 'date')} />
              <label className="skip" htmlFor={`${fid('st')}-${i}`}>후보 {i + 1} 시각</label>
              <input id={`${fid('st')}-${i}`} type="time" value={s.time} onChange={setSlot(i, 'time')} />
              <button type="button" className="btn ghost small" disabled={slots.length === 1} onClick={() => setSlots((list) => list.filter((_, j) => j !== i))} aria-label={`후보 ${i + 1} 빼기`}>빼기</button>
            </div>
          ))}
          <button type="button" className="btn small" onClick={() => setSlots((list) => {
            const last = list[list.length - 1];
            return [...list, { date: last?.date ? dayKey(addDays(new Date(`${last.date}T00:00`), 1)) : tomorrow, time: last?.time || '19:00' }];
          })}>후보 더하기</button>
          {show('slots') && <span className="err" role="alert">{e.slots}</span>}
        </fieldset>
      )}
      <ErrLine err={err} />
      <div className="actions">
        <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장 중…' : editing ? '고친 내용 저장' : '회의 만들고 투표 열기'}</button>
        {onDone && <button type="button" className="btn" onClick={onDone}>취소</button>}
      </div>
    </form>
  );
}

/* ---------------- 투표 표 (행 = 후보, 열 = 팀원) ---------------- */
function VoteTable({ ctx, m }) {
  const { p, user, team, data, readOnly } = ctx;
  const { busy, err, run } = useRun();
  const slots = (data.slots.rows || []).filter((s) => s.meeting_id === m.id);
  const ids = new Set(slots.map((s) => s.id));
  const votes = (data.votes.rows || []).filter((v) => ids.has(v.slot_id));
  const best = bestSlots(slots, votes);
  const amMember = team.some((t) => t.id === user.id);
  const has = (slotId, uid) => votes.find((v) => v.slot_id === slotId && v.user_id === uid);
  const voters = new Set(votes.map((v) => v.user_id));
  // 좁은 화면에서도 바로 누를 수 있게 내 열을 후보 바로 옆에 둡니다
  const cols = [...team].sort((x, y) => Number(y.id === user.id) - Number(x.id === user.id));

  const toggle = (s) => run(async () => {
    const mine = has(s.id, user.id);
    if (mine) await api.remove('ws_meeting_votes', mine.id);
    else await api.save('ws_meeting_votes', { project_id: p.id, slot_id: s.id, user_id: user.id, user_name: user.name });
  });
  const confirm = (s) => {
    if (!window.confirm(`${whenText(s.starts_at)}으로 회의를 확정할까요? 팀원 모두의 캘린더에 들어갑니다.`)) return;
    run(() => api.save('ws_meetings', { id: m.id, status: 'scheduled', starts_at: s.starts_at }));
  };

  if (slots.length === 0) return <Empty>후보 일시가 없습니다.</Empty>;
  return (
    <div className="vote">
      <p className="small muted">
        {voters.size}/{team.length}명 응답{amMember && !readOnly ? ' · 내 열에서 가능한 칸을 누르세요.' : ''}
        {best.size > 0 && ' · 가장 많이 가능한 후보를 강조했습니다.'}
      </p>
      <div className="vote-scroll">
        <table className="vote-table">
          <caption className="skip">「{m.title}」 후보 일시별 가능한 팀원</caption>
          <thead>
            <tr>
              <th scope="col">후보</th>
              {cols.map((t) => <th key={t.id} scope="col" className={t.id === user.id ? 'me' : ''}>{t.id === user.id ? '나' : t.name}</th>)}
              <th scope="col">가능</th>
              {!readOnly && <th scope="col"><span className="skip">확정</span></th>}
            </tr>
          </thead>
          <tbody>
            {slots.map((s) => {
              const n = votes.filter((v) => v.slot_id === s.id).length;
              return (
                <tr key={s.id} className={best.has(s.id) ? 'best' : ''}>
                  <th scope="row">{whenText(s.starts_at)}{best.has(s.id) && <span className="badge ok">최다</span>}</th>
                  {cols.map((t) => {
                    const on = !!has(s.id, t.id);
                    if (t.id === user.id && !readOnly) {
                      return (
                        <td key={t.id} className="me">
                          <button type="button" className={`vote-cell${on ? ' on' : ''}`} aria-pressed={on} disabled={busy}
                            aria-label={`${whenText(s.starts_at)} ${on ? '가능 취소' : '가능'}`} onClick={() => toggle(s)}>
                            {on ? '✓' : ''}
                          </button>
                        </td>
                      );
                    }
                    return <td key={t.id} className={t.id === user.id ? 'me' : ''}><span className={`vote-dot${on ? ' on' : ''}`} aria-label={on ? '가능' : '응답 없음'}>{on ? '✓' : '·'}</span></td>;
                  })}
                  <td className="num">{n}</td>
                  {!readOnly && <td><button type="button" className={`btn small ${best.has(s.id) ? 'dark' : ''}`} disabled={busy} onClick={() => confirm(s)}>이 시간으로 확정</button></td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ErrLine err={err} />
    </div>
  );
}

/* ---------------- 회의록 + 할 일로 보내기 ---------------- */
function MinutesEditor({ ctx, m, onClose }) {
  const { p, user, team, data, readOnly } = ctx;
  const saved = (data.minutes.rows || []).find((x) => x.meeting_id === m.id);
  const [v, setV] = useState(() => ({
    agenda: saved?.agenda ?? m.agenda ?? '', decisions: saved?.decisions || '', notes: saved?.notes || '', attendee_ids: saved?.attendee_ids || [],
  }));
  const [msg, setMsg] = useState('');
  const { busy, err, run } = useRun();
  const set = (k) => (ev) => { setMsg(''); setV((x) => ({ ...x, [k]: ev.target.value })); };
  const toggleAtt = (id) => { setMsg(''); setV((x) => ({ ...x, attendee_ids: x.attendee_ids.includes(id) ? x.attendee_ids.filter((y) => y !== id) : [...x.attendee_ids, id] })); };
  const fid = (k) => `mn-${m.id}-${k}`;

  async function persist() {
    const row = { agenda: v.agenda.trim() || null, decisions: v.decisions.trim() || null, notes: v.notes.trim() || null, attendee_ids: v.attendee_ids };
    if (saved) return api.save('ws_minutes', { id: saved.id, ...row, updated_at: new Date().toISOString() });
    return api.save('ws_minutes', { ...row, meeting_id: m.id, project_id: p.id, created_by: user.id, created_by_name: user.name, updated_at: new Date().toISOString() });
  }

  if (readOnly) {
    return (
      <div className="minutes">
        {saved ? (
          <>
            {[['안건', saved.agenda], ['결정 사항', saved.decisions], ['메모', saved.notes]].map(([k, t]) => t && <div key={k}><h4>{k}</h4><p className="ws-pre">{t}</p></div>)}
            <p className="small muted">참석 {team.filter((t) => saved.attendee_ids?.includes(t.id)).map((t) => t.name).join(', ') || '기록 없음'}</p>
          </>
        ) : <Empty>회의록이 없습니다.</Empty>}
        <button type="button" className="btn small" onClick={onClose}>닫기</button>
      </div>
    );
  }

  return (
    <div className="minutes">
      <form className="ws-form" onSubmit={async (ev) => { ev.preventDefault(); if (await run(persist)) setMsg('회의록을 저장했습니다.'); }}>
        <fieldset className="ws-att">
          <legend>참석자</legend>
          <div className="chip-group">
            {team.map((t) => (
              <label key={t.id} className="check-line" htmlFor={`${fid('att')}-${t.id}`}>
                <input id={`${fid('att')}-${t.id}`} type="checkbox" checked={v.attendee_ids.includes(t.id)} onChange={() => toggleAtt(t.id)} />
                <span>{t.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <F id={fid('agenda')} label="안건"><textarea id={fid('agenda')} className="short" value={v.agenda} onChange={set('agenda')} /></F>
        <F id={fid('dec')} label="결정 사항" hint="한 줄에 하나씩 적으면 아래에서 골라 할 일로 보낼 수 있습니다."><textarea id={fid('dec')} className="short" value={v.decisions} onChange={set('decisions')} /></F>
        <F id={fid('notes')} label="메모"><textarea id={fid('notes')} value={v.notes} onChange={set('notes')} /></F>
        <ErrLine err={err} />
        {msg && <p className="notice-box" role="status">{msg}</p>}
        <div className="actions">
          <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장 중…' : '회의록 저장'}</button>
          <button type="button" className="btn" onClick={onClose}>닫기</button>
          {saved && <span className="small muted">마지막 저장 {whenText(saved.updated_at || saved.created_at)}</span>}
        </div>
      </form>
      <SendToTasks ctx={ctx} m={m} v={v} saved={saved} persist={persist} />
    </div>
  );
}

function SendToTasks({ ctx, m, v, saved, persist }) {
  const { p, user, team, data } = ctx;
  const [picked, setPicked] = useState([]);
  const [assignee, setAssignee] = useState('');
  const [due, setDue] = useState('');
  const [msg, setMsg] = useState('');
  const { busy, err, run } = useRun();
  const candidates = [...new Set([...lines(v.decisions), ...lines(v.notes)])].map((t) => t.slice(0, 200));
  const sent = new Set((data.tasks.rows || []).filter((t) => saved && t.minutes_id === saved.id).map((t) => t.title));
  if (candidates.length === 0) return null;

  const send = () => run(async () => {
    const mins = saved || await persist();
    const who = team.find((t) => t.id === assignee);
    for (const title of picked) {
      await api.save('ws_tasks', {
        title, status: 'todo', assignee_id: who?.id || null, assignee_name: who?.name || null, due: due || null,
        note: `「${m.title}」 회의록에서`, sort: 0, minutes_id: mins.id, project_id: p.id, created_by: user.id, created_by_name: user.name,
      });
    }
    setMsg(`할 일 ${picked.length}개를 보드의 '할 일' 칸에 넣었습니다.`);
    setPicked([]);
  });

  return (
    <fieldset className="send-tasks">
      <legend>할 일 보드로 보내기</legend>
      <div className="stack" style={{ gap: 6 }}>
        {candidates.map((t, i) => {
          const done = sent.has(t);
          return (
            <label key={t} className="check-line" htmlFor={`send-${m.id}-${i}`}>
              <input id={`send-${m.id}-${i}`} type="checkbox" disabled={done} checked={done || picked.includes(t)}
                onChange={() => { setMsg(''); setPicked((x) => (x.includes(t) ? x.filter((y) => y !== t) : [...x, t])); }} />
              <span>{t}{done && <small>이미 보냄</small>}</span>
            </label>
          );
        })}
      </div>
      <div className="two">
        <F id={`send-${m.id}-who`} label="담당자" opt>
          <select id={`send-${m.id}-who`} value={assignee} onChange={(e) => setAssignee(e.target.value)}>
            <option value="">정하지 않음</option>
            {team.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </F>
        <F id={`send-${m.id}-due`} label="마감일" opt><input id={`send-${m.id}-due`} type="date" value={due} onChange={(e) => setDue(e.target.value)} /></F>
      </div>
      <ErrLine err={err} />
      {msg && <p className="notice-box" role="status">{msg}</p>}
      <div className="actions"><button type="button" className="btn dark" disabled={busy || picked.length === 0} onClick={send}>{busy ? '보내는 중…' : `고른 ${picked.length}줄 할 일로 보내기`}</button></div>
    </fieldset>
  );
}

/* ---------------- 회의 카드 ---------------- */
function MeetingCard({ ctx, m }) {
  const { p, user, data, readOnly } = ctx;
  const [mode, setMode] = useState(''); // '' | 'edit' | 'minutes'
  const { busy, err, run } = useRun();
  const hasMinutes = (data.minutes.rows || []).some((x) => x.meeting_id === m.id);

  if (mode === 'edit') return <article className="ws-card meeting"><MeetingForm ctx={ctx} initial={m} onDone={() => setMode('')} /></article>;
  return (
    <article className={`ws-card meeting${meetingLive(m) ? ' live' : ''}`} aria-labelledby={`m-${m.id}`}>
      <div className="line">
        <h3 id={`m-${m.id}`}>{m.title}</h3>
        <span className={`badge ${m.status === 'polling' ? 'open' : m.status === 'scheduled' ? 'ok' : 'neutral'}`}>{MEETING_STATUS[m.status]}</span>
      </div>
      {m.starts_at && m.status !== 'polling' && <p className="when">{whenText(m.starts_at)}–{hm(meetingEnd(m))} <span className="muted">({m.duration_min}분)</span></p>}
      {m.agenda && <p className="ws-pre small">{m.agenda}</p>}
      {m.status === 'polling' && <VoteTable ctx={ctx} m={m} />}
      <div className="line">
        <Meta row={m} />
        <span className="actions">
          <JoinButton m={m} />
          {m.link && m.status !== 'scheduled' && <a className="btn ghost small" href={m.link} target="_blank" rel="noreferrer">회의 링크</a>}
          {m.status !== 'polling' && (!readOnly || hasMinutes) && (
            <button type="button" className="btn small" aria-expanded={mode === 'minutes'} onClick={() => setMode(mode === 'minutes' ? '' : 'minutes')}>{hasMinutes ? '회의록' : '회의록 쓰기'}</button>
          )}
          {!readOnly && m.status === 'scheduled' && <button type="button" className="btn ghost small" disabled={busy} onClick={() => run(() => api.save('ws_meetings', { id: m.id, status: 'done' }))}>끝남으로 표시</button>}
          {!readOnly && m.status !== 'polling' && <button type="button" className="btn ghost small" disabled={busy} onClick={() => { if (window.confirm('확정을 풀고 다시 투표로 돌릴까요?')) run(() => api.save('ws_meetings', { id: m.id, status: 'polling', starts_at: null })); }}>다시 투표</button>}
          {!readOnly && <button type="button" className="btn ghost small" onClick={() => setMode('edit')}>고치기</button>}
          {!readOnly && canDelete(m, p, user) && <DelBtn what={`회의 「${m.title}」(투표·회의록 포함)`} onDelete={() => run(() => api.remove('ws_meetings', m.id))} />}
        </span>
      </div>
      <ErrLine err={err} />
      {mode === 'minutes' && <MinutesEditor ctx={ctx} m={m} onClose={() => setMode('')} />}
    </article>
  );
}

export function Meetings({ ctx }) {
  const { data, readOnly } = ctx;
  const [adding, setAdding] = useState(false);
  const all = data.meetings.rows || [];
  const polling = all.filter((m) => m.status === 'polling');
  const scheduled = all.filter((m) => m.status === 'scheduled').sort((a, b) => String(a.starts_at).localeCompare(String(b.starts_at)));
  const done = all.filter((m) => m.status === 'done').sort((a, b) => String(b.starts_at).localeCompare(String(a.starts_at)));
  const group = (title, list, empty) => (
    <section className="section" aria-label={title}>
      <h2 className="ws-h2">{title} <span className="muted small">{list.length}</span></h2>
      {list.length === 0 && <Empty>{empty}</Empty>}
      <div className="stack">{list.map((m) => <MeetingCard key={m.id} ctx={ctx} m={m} />)}</div>
    </section>
  );
  return (
    <div className="ws-meetings">
      <div className="section-head">
        <p className="muted small">후보 일시를 여러 개 올리면 팀원이 가능한 칸을 체크합니다. 누구나 가장 많은 시간으로 확정할 수 있어요.</p>
        {!readOnly && <button type="button" className="btn small primary" aria-expanded={adding} onClick={() => setAdding((x) => !x)}>{adding ? '닫기' : '새 회의'}</button>}
      </div>
      {adding && <div className="ws-card"><MeetingForm ctx={ctx} onDone={() => setAdding(false)} /></div>}
      {group('투표 중', polling, '날짜를 정하는 중인 회의가 없습니다.')}
      {group('확정', scheduled, '확정된 회의가 없습니다.')}
      {group('끝남', done, '끝난 회의가 없습니다.')}
    </div>
  );
}
