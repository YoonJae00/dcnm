// 팀 공간 > 회의 > 시간 맞추기: 날짜 여러 개 × 하루 시간 범위 격자에 팀원이 가능한 칸을 칠하고(드래그),
// 모두의 격자(히트맵)에서 겹치는 시간을 찾아 바로 회의로 확정합니다.
import { useEffect, useMemo, useRef, useState } from 'react';
import * as api from '../lib/api';
import { WEEKDAYS, addDays, dayKey, parseDay } from '../lib/format';
import { canDelete, whenText } from '../lib/workspace';
import {
  MAX_DATES, availability, dateText, heatLevel, minText, recommend, rectSlots, rowsPerDay, slotAt, slotCount, slotIndex, slotPeople, slotText,
} from '../lib/availability';
import { DelBtn, Empty, ErrLine, F, Meta, useRun } from '../components/SpaceUI';

const SAVE_DELAY = 600;
const REFRESH_MS = 15000;
const HALF_HOURS = Array.from({ length: 49 }, (_, i) => i * 30);
const DURATIONS = [30, 60, 90, 120, 180];
const durText = (n) => (n < 60 ? `${n}분` : `${Math.floor(n / 60)}시간${n % 60 ? ` ${n % 60}분` : ''}`);

/* ---------------- 날짜 고르기 (작은 달력, 여러 날 토글) ---------------- */
function DatePicker({ value, onChange, id }) {
  const today = dayKey(new Date());
  const [month, setMonth] = useState(() => {
    const d = parseDay(value[0] || today);
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const first = month.getDay();
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => dayKey(new Date(month.getFullYear(), month.getMonth(), i + 1)))];
  const full = value.length >= MAX_DATES;
  const toggle = (k) => onChange(value.includes(k) ? value.filter((x) => x !== k) : [...value, k].sort());
  const shift = (n) => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));
  const isThisMonth = month.getFullYear() === new Date().getFullYear() && month.getMonth() === new Date().getMonth();

  return (
    <div className="av-cal" id={id}>
      <div className="av-cal-head">
        <button type="button" className="btn ghost small" onClick={() => shift(-1)} disabled={isThisMonth} aria-label="이전 달">‹</button>
        <b aria-live="polite">{month.getFullYear()}년 {month.getMonth() + 1}월</b>
        <button type="button" className="btn ghost small" onClick={() => shift(1)} aria-label="다음 달">›</button>
      </div>
      <div className="av-cal-grid" role="group" aria-label="후보 날짜">
        {WEEKDAYS.map((w) => <span key={w} className="av-cal-wd" aria-hidden="true">{w}</span>)}
        {cells.map((k, i) => {
          if (!k) return <span key={`b${i}`} />;
          const on = value.includes(k);
          const past = k < today;
          return (
            <button key={k} type="button" className={`av-cal-day${on ? ' on' : ''}${k === today ? ' today' : ''}`} aria-pressed={on}
              disabled={past || (!on && full)} onClick={() => toggle(k)} aria-label={`${dateText(k)}${on ? ' 선택됨' : ''}`}>
              {parseDay(k).getDate()}
            </button>
          );
        })}
      </div>
      <p className="small muted">{value.length}/{MAX_DATES}일 골랐습니다{value.length ? `: ${value.map(dateText).join(', ')}` : ''}</p>
    </div>
  );
}

/* ---------------- 만들기 ---------------- */
function PollForm({ ctx, onDone }) {
  const { p, user } = ctx;
  const [v, setV] = useState(() => ({
    title: '회의 시간 맞추기', start: 540, end: 1320, slot: 30, duration: 60,
    dates: [1, 2, 3, 4, 5].map((n) => dayKey(addDays(new Date(), n))),
  }));
  const [tried, setTried] = useState(false);
  const { busy, err, run } = useRun();
  const set = (k, num) => (ev) => setV((x) => ({ ...x, [k]: num ? Number(ev.target.value) : ev.target.value }));

  const e = {};
  if (!v.title.trim()) e.title = '제목을 적어 주세요.';
  else if (v.title.trim().length > 120) e.title = '120자 이하로 적어 주세요.';
  if (v.dates.length === 0) e.dates = '날짜를 하루 이상 골라 주세요.';
  else if (v.dates.length > MAX_DATES) e.dates = `${MAX_DATES}일까지 고를 수 있습니다.`;
  if (v.start >= v.end) e.end = '끝 시각이 시작보다 늦어야 합니다.';
  else if (v.duration && v.duration > v.end - v.start) e.duration = '하루 시간 범위보다 깁니다.';
  const show = (k) => tried && e[k];

  async function submit(ev) {
    ev.preventDefault();
    setTried(true);
    if (Object.keys(e).length) return;
    const ok = await run(() => api.save('ws_avail_polls', {
      title: v.title.trim(), dates: v.dates, start_min: v.start, end_min: v.end, slot_min: v.slot, duration_min: v.duration || null,
      closed: false, meeting_id: null, project_id: p.id, created_by: user.id, created_by_name: user.name,
    }));
    if (ok) onDone?.();
  }

  return (
    <form className="ws-form" noValidate onSubmit={submit}>
      <F id="av-title" label="제목" error={show('title')}><input id="av-title" value={v.title} onChange={set('title')} placeholder="예: 중간 점검 회의 시간" /></F>
      <fieldset className={show('dates') ? 'invalid' : ''}>
        <legend>날짜 <span className="opt">눌러서 여러 날 고르기 · 최대 {MAX_DATES}일</span></legend>
        <DatePicker id="av-dates" value={v.dates} onChange={(dates) => setV((x) => ({ ...x, dates }))} />
        {show('dates') && <span className="err" role="alert">{e.dates}</span>}
      </fieldset>
      <div className="three">
        <F id="av-start" label="하루 시작">
          <select id="av-start" value={v.start} onChange={set('start', true)}>{HALF_HOURS.slice(0, -1).map((m) => <option key={m} value={m}>{minText(m)}</option>)}</select>
        </F>
        <F id="av-end" label="하루 끝" error={show('end')}>
          <select id="av-end" value={v.end} onChange={set('end', true)}>{HALF_HOURS.slice(1).map((m) => <option key={m} value={m}>{minText(m)}</option>)}</select>
        </F>
        <F id="av-dur" label="회의 길이" opt error={show('duration')} hint="추천 시간을 이 길이로 찾습니다">
          <select id="av-dur" value={v.duration} onChange={set('duration', true)}>
            <option value={0}>정하지 않음</option>
            {DURATIONS.map((n) => <option key={n} value={n}>{durText(n)}</option>)}
          </select>
        </F>
      </div>
      <div className="chip-group" role="group" aria-label="칸 크기">
        <span className="small muted av-chip-label">칸 크기</span>
        {[15, 30].map((n) => <button key={n} type="button" className="chip" aria-pressed={v.slot === n} onClick={() => setV((x) => ({ ...x, slot: n }))}>{n}분</button>)}
      </div>
      <ErrLine err={err} />
      <div className="actions">
        <button type="submit" className="btn primary" disabled={busy}>{busy ? '만드는 중…' : '격자 만들기'}</button>
        {onDone && <button type="button" className="btn" onClick={onDone}>취소</button>}
      </div>
    </form>
  );
}

/* ---------------- 격자 틀 (위: 날짜, 왼쪽: 시각) ---------------- */
function GridFrame({ poll, label, className = '', bodyProps, cell }) {
  const n = rowsPerDay(poll);
  return (
    <div className="av-scroll">
      <div className={`av-grid ${className}`} style={{ '--cols': poll.dates.length, '--cell-h': poll.slot_min === 15 ? '12px' : '20px' }} role="grid" aria-label={label} {...bodyProps}>
        <div className="av-corner" role="presentation" />
        {poll.dates.map((d) => <div key={d} className="av-dh" role="columnheader">{dateText(d).replace('(', '\n(')}</div>)}
        {Array.from({ length: n }, (_, row) => {
          const min = poll.start_min + row * poll.slot_min;
          return [
            <div key={`t${row}`} className={`av-time${min % 60 === 0 ? ' hour' : ''}`} role="rowheader">{min % 60 === 0 ? minText(min) : ''}</div>,
            ...poll.dates.map((_, day) => cell(slotIndex(poll, day, row), min)),
          ];
        })}
      </div>
    </div>
  );
}

// 키보드: 방향키로 칸 이동
function moveCursor(poll, i, key) {
  const n = rowsPerDay(poll);
  const { day, row } = slotAt(poll, i);
  if (key === 'ArrowUp') return row > 0 ? i - 1 : i;
  if (key === 'ArrowDown') return row < n - 1 ? i + 1 : i;
  if (key === 'ArrowLeft') return day > 0 ? i - n : i;
  if (key === 'ArrowRight') return day < poll.dates.length - 1 ? i + n : i;
  return null;
}
const cellOf = (el) => {
  const c = el?.closest?.('[data-slot]');
  return c ? Number(c.dataset.slot) : null;
};

/* ---------------- 내 격자: 드래그로 칠하기 ---------------- */
function PaintGrid({ poll, value, onChange, disabled }) {
  const [preview, setPreviewState] = useState(null);
  const previewRef = useRef(null);
  const setPreview = (x) => { previewRef.current = x; setPreviewState(x); };
  const [cursor, setCursor] = useState(0);
  const drag = useRef(null);
  const ref = useRef(null);
  const shown = preview || value;

  const paint = (to) => {
    const d = drag.current;
    const next = new Set(d.base);
    for (const s of rectSlots(poll, d.anchor, to)) (d.mode ? next.add(s) : next.delete(s));
    setPreview(next);
  };
  const end = () => {
    if (!drag.current) return;
    drag.current = null;
    const p = previewRef.current;
    setPreview(null);
    if (p) onChange(p);
  };
  useEffect(() => () => { drag.current = null; }, []);

  const bodyProps = disabled ? {} : {
    ref,
    onPointerDown: (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const i = cellOf(e.target);
      if (i === null) return;
      e.preventDefault();
      ref.current?.setPointerCapture?.(e.pointerId);
      // 누른 칸이 비어 있으면 칠하기, 칠해져 있으면 지우기 — 드래그가 끝날 때까지 유지
      drag.current = { anchor: i, last: i, mode: !value.has(i), base: value };
      setCursor(i);
      paint(i);
    },
    onPointerMove: (e) => {
      if (!drag.current) return;
      const i = cellOf(document.elementFromPoint(e.clientX, e.clientY));
      if (i === null || i === drag.current.last) return;
      drag.current.last = i;
      paint(i);
    },
    onPointerUp: end,
    onPointerCancel: end,
    onLostPointerCapture: end,
    onKeyDown: (e) => {
      const next = moveCursor(poll, cursor, e.key);
      if (next !== null) {
        e.preventDefault();
        setCursor(next);
        ref.current?.querySelector(`[data-slot="${next}"]`)?.focus();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const s = new Set(value);
        (s.has(cursor) ? s.delete(cursor) : s.add(cursor));
        onChange(s);
      }
    },
  };

  return (
    <GridFrame poll={poll} label="내 가능 시간 (드래그해서 칠하기)" className={`paint${disabled ? ' off' : ''}`} bodyProps={bodyProps}
      cell={(i, min) => (
        <div key={i} data-slot={i} role="gridcell" aria-selected={shown.has(i)} tabIndex={disabled ? undefined : i === cursor ? 0 : -1}
          aria-label={slotText(poll, i)} className={`av-cell${shown.has(i) ? ' on' : ''}${min % 60 === 0 ? ' hour' : ''}`}
          onFocus={() => setCursor(i)} />
      )} />
  );
}

/* ---------------- 모두의 격자: 히트맵 ---------------- */
function HeatGrid({ poll, people, total, focus, onFocus, mark }) {
  const ref = useRef(null);
  return (
    <GridFrame poll={poll} label="모두의 가능 시간 (진할수록 가능한 사람이 많음)" className="heat"
      bodyProps={{
        ref,
        onPointerLeave: (e) => { if (e.pointerType === 'mouse') onFocus(null); },
        onKeyDown: (e) => {
          const next = moveCursor(poll, focus ?? 0, e.key);
          if (next === null) return;
          e.preventDefault();
          onFocus(next);
          ref.current?.querySelector(`[data-slot="${next}"]`)?.focus();
        },
      }}
      cell={(i, min) => {
        const n = people[i]?.length || 0;
        return (
          <div key={i} data-slot={i} role="gridcell" tabIndex={i === (focus ?? 0) ? 0 : -1} aria-label={`${slotText(poll, i)} 가능 ${n}/${total}`}
            className={`av-cell h${heatLevel(n, total)}${min % 60 === 0 ? ' hour' : ''}${focus === i ? ' focus' : ''}${mark?.has(i) ? ' mark' : ''}`}
            onPointerEnter={(e) => { if (e.pointerType === 'mouse') onFocus(i); }} onClick={() => onFocus(i)} onFocus={() => onFocus(i)} />
        );
      }} />
  );
}

function Legend({ total }) {
  return (
    <span className="av-legend" aria-hidden="true">
      <span>0명</span>
      {[0, 1, 2, 3, 4, 5].map((l) => <i key={l} className={`av-cell h${l}`} />)}
      <span>{total}명</span>
    </span>
  );
}

/* ---------------- 상세 ---------------- */
function PollDetail({ ctx, poll }) {
  const { p, user, team, data, readOnly } = ctx;
  const responses = (data.responses.rows || []).filter((r) => r.poll_id === poll.id);
  const by = useMemo(() => availability(poll, responses, team), [poll, responses, team]);
  const amMember = team.some((t) => t.id === user.id);
  const canPaint = amMember && !readOnly && !poll.closed;
  const [draft, setDraft] = useState(null);
  const [state, setState] = useState(''); // '' | 'pending' | 'saving' | 'saved' | 에러 문구
  const [focus, setFocus] = useState(null);
  const [mark, setMark] = useState(null);
  const [view, setView] = useState(canPaint ? 'mine' : 'all');
  const { busy, err, run } = useRun();
  const timer = useRef(null);
  const pending = useRef(null);

  const mine = draft || by.get(user.id) || new Set();
  // 칠한 내용 미리보기를 히트맵에도 바로 반영
  const live = useMemo(() => {
    const m = new Map(by);
    if (draft && amMember) m.set(user.id, draft);
    return m;
  }, [by, draft, amMember, user.id]);
  const people = useMemo(() => slotPeople(poll, live), [poll, live]);
  const total = team.length;
  const recs = useMemo(() => recommend(poll, live), [poll, live]);
  const waiting = team.filter((t) => !(live.get(t.id)?.size));
  const nameOf = (id) => team.find((t) => t.id === id)?.name || '팀원';

  const flush = async () => {
    clearTimeout(timer.current);
    const slots = pending.current;
    if (!slots) return;
    pending.current = null;
    setState('saving');
    try {
      await api.upsert('ws_avail_responses', {
        project_id: p.id, poll_id: poll.id, user_id: user.id, user_name: user.name, slots: [...slots].sort((a, b) => a - b),
      }, ['poll_id', 'user_id']);
      setState(pending.current ? 'pending' : 'saved');
    } catch (x) {
      setState(`저장하지 못했습니다: ${x?.message || x}`);
    }
  };
  const flushRef = useRef(flush);
  flushRef.current = flush;
  useEffect(() => () => { flushRef.current(); }, []);

  const change = (set) => {
    setDraft(set);
    pending.current = set;
    setState('pending');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => flushRef.current(), SAVE_DELAY);
  };

  const confirm = (r) => {
    const minutes = poll.duration_min || r.len * poll.slot_min;
    if (!window.confirm(`${slotText(poll, r.start, r.len)}으로 회의를 확정할까요? 회의 카드가 생기고 팀원 모두의 캘린더에 들어갑니다.`)) return;
    run(async () => {
      await flushRef.current();
      const m = await api.save('ws_meetings', {
        title: poll.title, agenda: null, link: null, status: 'scheduled', starts_at: r.startsAt, duration_min: minutes,
        project_id: p.id, created_by: user.id, created_by_name: user.name,
      });
      await api.save('ws_avail_polls', { id: poll.id, closed: true, meeting_id: m.id });
    });
  };

  const f = focus !== null && focus < slotCount(poll) ? focus : null;
  const yes = f === null ? [] : people[f];
  const meeting = poll.meeting_id && (data.meetings.rows || []).find((m) => m.id === poll.meeting_id);

  return (
    <div className="av-detail">
      {poll.closed && (
        <p className="notice-box">
          {meeting ? <>「{meeting.title}」 회의로 확정했습니다 · {meeting.starts_at ? whenText(meeting.starts_at) : '일시 미정'}</> : '마감한 시간 맞추기입니다.'}
          {meeting && <> <button type="button" className="linkish" onClick={() => document.getElementById(`m-${meeting.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>회의 카드 보기</button></>}
        </p>
      )}
      <div className="av-switch tabbar" role="tablist" aria-label="격자 보기">
        <button type="button" role="tab" aria-selected={view === 'mine'} onClick={() => setView('mine')}>내 시간</button>
        <button type="button" role="tab" aria-selected={view === 'all'} onClick={() => setView('all')}>모두의 시간 <span className="count">{total - waiting.length}/{total}</span></button>
      </div>
      <div className="av-panels" data-view={view}>
        <section className="av-panel mine" aria-label="내 가능 시간">
          <div className="av-panel-head">
            <h4>내 시간</h4>
            <span className="small muted" role="status" aria-live="polite">
              {!canPaint ? (amMember ? '칠할 수 없는 상태입니다' : '팀원만 칠할 수 있어요')
                : state === 'pending' || state === 'saving' ? '저장 중…'
                  : state === 'saved' ? '저장됨'
                    : state || '가능한 칸을 드래그해서 칠하세요'}
            </span>
          </div>
          {state.startsWith('저장하지') && <p className="error-box small" role="alert">{state}</p>}
          <PaintGrid poll={poll} value={mine} onChange={change} disabled={!canPaint} />
          {canPaint && <p className="small muted">빈 칸에서 시작하면 칠하고, 칠한 칸에서 시작하면 지웁니다. 키보드는 방향키로 옮기고 스페이스로 바꿉니다.</p>}
        </section>
        <section className="av-panel all" aria-label="모두의 가능 시간">
          <div className="av-panel-head">
            <h4>모두의 시간</h4>
            <Legend total={total} />
          </div>
          <HeatGrid poll={poll} people={people} total={total} focus={f} onFocus={setFocus} mark={mark} />
          <div className="av-info" aria-live="polite">
            {f === null ? <span className="muted">칸에 마우스를 올리거나 눌러 보면 누가 되는지 보여요.</span> : (
              <>
                <b>{slotText(poll, f)}</b>
                <span>가능 {yes.length}/{total}{yes.length ? `: ${yes.map(nameOf).join(', ')}` : ''}</span>
                <span className="muted">불가: {team.filter((t) => !yes.includes(t.id)).map((t) => t.name).join(', ') || '없음'}</span>
              </>
            )}
          </div>
        </section>
      </div>

      <div className="av-bottom">
        <section className="av-recs" aria-label="추천 시간">
          <h4>추천 시간 <span className="small muted">{poll.duration_min ? `${durText(poll.duration_min)} 연속` : `${poll.slot_min}분 칸 기준`}</span></h4>
          {recs.length === 0 ? <Empty>아직 겹치는 시간이 없습니다. 팀원들이 칠하면 여기에 보여요.</Empty> : (
            <ol className="av-rec-list">
              {recs.map((r) => {
                const range = new Set(Array.from({ length: r.len }, (_, k) => r.start + k));
                return (
                  <li key={r.start} onPointerEnter={() => setMark(range)} onPointerLeave={() => setMark(null)}>
                    <span className="av-rec-text">
                      <b>{slotText(poll, r.start, r.len)}</b>
                      <span className="small"> · {total}명 중 {r.ids.length}명</span>
                      {r.ids.length < total && <span className="small muted"> (빠짐: {team.filter((t) => !r.ids.includes(t.id)).map((t) => t.name).join(', ')})</span>}
                    </span>
                    {!readOnly && !poll.closed && (
                      <button type="button" className="btn small dark" disabled={busy} onFocus={() => setMark(range)} onBlur={() => setMark(null)} onClick={() => confirm(r)}>이 시간으로 회의 확정</button>
                    )}
                  </li>
                );
              })}
            </ol>
          )}
          <ErrLine err={err} />
        </section>
        <p className="small av-waiting">
          {waiting.length === 0 ? <span className="badge ok">모두 칠했어요</span> : <><b>아직 안 칠함</b> {waiting.map((t) => t.name).join(', ')}</>}
        </p>
      </div>
    </div>
  );
}

/* ---------------- 카드 ---------------- */
function PollCard({ ctx, poll, initiallyOpen }) {
  const { p, user, data, readOnly } = ctx;
  const [open, setOpen] = useState(!!initiallyOpen);
  const { busy, err, run } = useRun();
  const n = new Set((data.responses.rows || []).filter((r) => r.poll_id === poll.id && r.slots?.length).map((r) => r.user_id)).size;
  const days = poll.dates.length;
  return (
    <article className="ws-card av-card" aria-labelledby={`av-${poll.id}`}>
      <div className="line">
        <h3 id={`av-${poll.id}`}>{poll.title}</h3>
        <span className={`badge ${poll.closed ? 'neutral' : 'open'}`}>{poll.closed ? '마감' : '칠하는 중'}</span>
      </div>
      <p className="when">
        {dateText(poll.dates[0])}{days > 1 ? ` ~ ${dateText(poll.dates[days - 1])} 중 ${days}일` : ''} · {minText(poll.start_min)}~{minText(poll.end_min)} · {poll.slot_min}분 칸
        {poll.duration_min ? ` · 회의 ${durText(poll.duration_min)}` : ''} · {n}/{ctx.team.length}명 응답
      </p>
      <div className="line">
        <Meta row={poll} />
        <span className="actions">
          <button type="button" className={`btn small${open ? '' : ' primary'}`} aria-expanded={open} onClick={() => setOpen((x) => !x)}>{open ? '접기' : poll.closed ? '결과 보기' : '열어서 칠하기'}</button>
          {!readOnly && poll.closed && <button type="button" className="btn ghost small" disabled={busy} onClick={() => run(() => api.save('ws_avail_polls', { id: poll.id, closed: false }))}>다시 열기</button>}
          {!readOnly && canDelete(poll, p, user) && <DelBtn what={`시간 맞추기 「${poll.title}」(모든 응답 포함)`} onDelete={() => run(() => api.remove('ws_avail_polls', poll.id))} />}
        </span>
      </div>
      <ErrLine err={err} />
      {open && <PollDetail key={`${poll.id}-${user.id}`} ctx={ctx} poll={poll} />}
    </article>
  );
}

export function Availability({ ctx }) {
  const { data, readOnly } = ctx;
  const [adding, setAdding] = useState(false);
  const polls = data.polls.rows || [];
  const open = polls.filter((x) => !x.closed);
  const closed = polls.filter((x) => x.closed);
  const { reload: reloadPolls } = data.polls;
  const { reload: reloadResponses } = data.responses;

  // 실시간 구독이 없으므로 Supabase 모드에서는 보고 있는 동안 주기적으로 다시 불러와 다른 팀원이 칠한 칸을 반영합니다.
  useEffect(() => {
    if (api.mode !== 'supabase' || open.length === 0) return undefined;
    const tick = () => { if (document.visibilityState === 'visible') { reloadPolls(); reloadResponses(); } };
    const t = setInterval(tick, REFRESH_MS);
    window.addEventListener('focus', tick);
    return () => { clearInterval(t); window.removeEventListener('focus', tick); };
  }, [open.length, reloadPolls, reloadResponses]);

  return (
    <section className="section av" aria-labelledby="av-h">
      <div className="section-head">
        <h2 id="av-h" className="ws-h2">시간 맞추기 <span className="muted small">{open.length}</span></h2>
        {!readOnly && <button type="button" className="btn small primary" aria-expanded={adding} onClick={() => setAdding((x) => !x)}>{adding ? '닫기' : '새 시간 맞추기'}</button>}
      </div>
      <p className="muted small">날짜 여러 개와 하루 시간 범위를 정하면 격자가 생깁니다. 팀원이 되는 칸을 칠하면 겹치는 시간을 찾아 바로 회의로 확정할 수 있어요.</p>
      {adding && <div className="ws-card"><PollForm ctx={ctx} onDone={() => setAdding(false)} /></div>}
      {open.length === 0 && !adding && <Empty>진행 중인 시간 맞추기가 없습니다.</Empty>}
      <div className="stack">{open.map((x, i) => <PollCard key={x.id} ctx={ctx} poll={x} initiallyOpen={i === 0} />)}</div>
      {closed.length > 0 && (
        <details className="ws-past">
          <summary>마감한 시간 맞추기 {closed.length}개</summary>
          <div className="stack">{closed.map((x) => <PollCard key={x.id} ctx={ctx} poll={x} />)}</div>
        </details>
      )}
    </section>
  );
}
