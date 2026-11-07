import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ORIGIN_LABEL, deadlineLeft, deadlineText, isMember, meetingText, memberCount, nextMeeting } from '../lib/projects';
import { WEEKDAYS, addDays, dayKey, md, parseDay, timeRange, weekStart } from '../lib/format';

export const Avatar = ({ name }) => <span className="avatar-sm" aria-hidden="true">{String(name || '?').slice(0, 1)}</span>;

export function ProjectBadges({ p, withStatus }) {
  return (
    <span className="badges">
      <span className="badge kind">{p.kind}</span>
      <span className={`badge ${p.origin === 'club' ? 'club' : 'personal'}`}>{ORIGIN_LABEL[p.origin] || '개인 신청'}</span>
      {withStatus && p.status === 'recruiting' && <span className="badge open">모집 중</span>}
      {withStatus && p.status === 'ongoing' && <span className="badge neutral">진행 중</span>}
      {withStatus && p.status === 'done' && <span className="badge neutral">완료</span>}
    </span>
  );
}

export function Progress({ p }) {
  const n = memberCount(p);
  const cap = p.capacity || n || 1;
  return (
    <span className="progress">
      <b>{n} / {cap}명</b>
      <span className="bar" role="img" aria-label={`정원 ${cap}명 중 ${n}명 참여`}><i style={{ width: `${Math.min(100, (n / cap) * 100)}%` }} /></span>
    </span>
  );
}


export function ProjectCard({ p, members, userId }) {
  const nm = nextMeeting(p);
  return (
    <Link to={`/projects/${p.id}`} className="pcard">
      <div className="top"><ProjectBadges p={p} />{isMember(p, userId) && <span className="mine-flag">참여 중</span>}</div>
      <h3>{p.title}</h3>
      <p className="summary">{p.summary}</p>
      <dl className="kv">
        <dt>기간</dt><dd>{p.period}</dd>
        <dt>인원</dt><dd>{memberCount(p)}명</dd>
        <dt>다음 모임</dt><dd>{nm ? `${md(parseDay(nm.date))} ${nm.start_time} · ${p.place}` : (p.place || '일정 공지 예정')}</dd>
      </dl>
      <span className="avatars">{(p.member_ids || []).slice(0, 5).map((id, i) => <Avatar key={id} name={members?.find((m) => m.id === id)?.name || p.member_names?.[i]} />)}</span>
    </Link>
  );
}

export function RecruitCard({ p, userId, applied }) {
  const left = deadlineLeft(p);
  return (
    <Link to={`/projects/${p.id}`} className="pcard">
      <div className="top">
        <ProjectBadges p={p} />
        {left !== null && <span className={`badge ${left >= 0 && left <= 7 ? 'due' : 'neutral'}`}>{deadlineText(p)}</span>}
      </div>
      <h3>{p.title}</h3>
      <p className="summary">{p.summary}</p>
      <div className="cond">
        <dl className="kv">
          <dt>모집 인원</dt><dd><Progress p={p} /></dd>
          <dt>조건</dt><dd>{p.condition || '없음'}</dd>
          <dt>기간</dt><dd>{p.period}</dd>
          <dt>진행 방식</dt><dd>{meetingText(p) || p.mode}</dd>
        </dl>
      </div>
      <div className="foot">
        <span className="author"><Avatar name={p.author_name} />{p.author_name}</span>
        {p.author_id === userId ? <span className="mine-flag">내가 올린 모집</span>
          : isMember(p, userId) ? <span className="mine-flag">참여 확정</span>
          : applied ? <span className="badge neutral">신청함 · {applied === 'pending' ? '수락 대기' : applied === 'rejected' ? '거절됨' : '수락됨'}</span>
          : <span className="btn primary small">자세히 보고 신청</span>}
      </div>
    </Link>
  );
}

export function ArchiveCard({ p, reviews }) {
  return (
    <Link to={`/projects/${p.id}`} className="pcard archive">
      <div className="thumb">{p.kind}</div>
      <div className="body">
        <ProjectBadges p={p} />
        <h3>{p.title}</h3>
        <span className="muted small">{p.period} · {memberCount(p)}명</span>
        <div className="links"><span style={{ color: 'var(--accent-text)' }}>결과 보기</span><span className="muted">후기 {reviews}개</span></div>
      </div>
    </Link>
  );
}

export function Fab({ to = '/projects/new', label = '프로젝트 신청하기' }) {
  return (
    <Link to={to} className="fab">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
      {label}
    </Link>
  );
}

export function Chips({ label, options, value, onChange, format = (v) => v }) {
  return (
    <div className="filter-line" role="group" aria-label={label}>
      <span className="label">{label}</span>
      <button type="button" className="chip" aria-pressed={value === 'all'} onClick={() => onChange('all')}>전체</button>
      {options.map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={value === o} onClick={() => onChange(o)}>{format(o)}</button>
      ))}
    </div>
  );
}

// 월간 캘린더: events는 {id,date,title,start_time,end_time,place,kind,mine?}
export function MonthCalendar({ events, selected, onSelect, initial, compact }) {
  const today = new Date();
  const [month, setMonth] = useState(() => { const d = initial || today; return new Date(d.getFullYear(), d.getMonth(), 1); });
  const byDay = useMemo(() => {
    const map = {};
    for (const e of events || []) (map[e.date] ||= []).push(e);
    for (const k in map) map[k].sort((a, b) => String(a.start_time).localeCompare(String(b.start_time)));
    return map;
  }, [events]);
  const first = weekStart(month);
  const last = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const weeks = Math.ceil(((last - first) / 86400000 + 1) / 7);
  const cells = Array.from({ length: weeks * 7 }, (_, i) => addDays(first, i));
  const todayKey = dayKey(today);
  const shift = (n) => setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1));
  const sel = selected || todayKey;
  const list = byDay[sel] || [];
  const sd = parseDay(sel);

  return (
    <div>
      <div className="cal-head">
        <h2>{month.getFullYear()}년 {month.getMonth() + 1}월</h2>
        <div className="actions">
          <button type="button" className="btn small" onClick={() => shift(-1)}>이전 달</button>
          <button type="button" className="btn small" onClick={() => { setMonth(new Date(today.getFullYear(), today.getMonth(), 1)); onSelect(todayKey); }}>오늘</button>
          <button type="button" className="btn small" onClick={() => shift(1)}>다음 달</button>
        </div>
      </div>
      <div className={`cal${compact ? ' compact' : ''}`} role="grid" aria-label={`${month.getFullYear()}년 ${month.getMonth() + 1}월`}>
        {[1, 2, 3, 4, 5, 6, 0].map((w) => <div key={w} className="wh" role="columnheader">{WEEKDAYS[w]}</div>)}
        {cells.map((d) => {
          const key = dayKey(d);
          const evs = byDay[key] || [];
          const cls = ['cell'];
          if (d.getMonth() !== month.getMonth()) cls.push('other');
          if (key === todayKey) cls.push('today');
          if (key === sel) cls.push('selected');
          return (
            <button key={key} type="button" role="gridcell" className={cls.join(' ')} aria-selected={key === sel}
              aria-label={`${d.getMonth() + 1}월 ${d.getDate()}일, 일정 ${evs.length}개`} onClick={() => onSelect(key)}>
              <span className="num">{d.getDate()}</span>
              {evs.slice(0, compact ? 2 : 3).map((e) => <span key={e.id} className={`ev${e.mine ? ' mine' : ''}`}>{e.title}</span>)}
              {evs.length > (compact ? 2 : 3) && <span className="ev">외 {evs.length - (compact ? 2 : 3)}개</span>}
              {evs.length > 0 && <span className="dots" aria-hidden="true">{evs.slice(0, 3).map((e) => <i key={e.id} className={e.mine ? 'mine' : ''} />)}</span>}
            </button>
          );
        })}
      </div>
      <section className="day-detail" aria-live="polite">
        <h3>{sd.getMonth() + 1}월 {sd.getDate()}일 ({WEEKDAYS[sd.getDay()]})</h3>
        {list.length === 0 && <p className="muted small">이날은 일정이 없습니다.</p>}
        {list.map((e) => (
          <div key={e.id} className="ev-item">
            <span className="t">{timeRange(e)}</span>
            <strong>{e.to || e.project_id ? <Link to={e.to || `/projects/${e.project_id}`}>{e.title}</Link> : e.title} <span className="kind">{e.kind}</span></strong>
            {(e.place || e.note) && <span className="p">{[e.place, e.note].filter(Boolean).join(' · ')}</span>}
          </div>
        ))}
      </section>
    </div>
  );
}
