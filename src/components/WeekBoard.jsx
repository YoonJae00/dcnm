import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { WEEKDAYS, addDays, dayKey, md, timeRange, weekStart } from '../lib/format';

// 메인의 '이번 주 DC&M' 시간표. 월요일부터 일요일까지 일정 표의 이벤트를 꽂아 보여 줍니다.
export default function WeekBoard({ events }) {
  const [offset, setOffset] = useState(0);
  const today = new Date();
  const todayKey = dayKey(today);
  const start = addDays(weekStart(today), offset * 7);
  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(start, i)), [start.getTime()]);
  const end = days[6];

  const byDay = useMemo(() => {
    const map = {};
    for (const e of events || []) (map[e.date] ||= []).push(e);
    for (const k in map) map[k].sort((a, b) => String(a.start_time || '').localeCompare(String(b.start_time || '')));
    return map;
  }, [events]);

  const total = days.reduce((n, d) => n + (byDay[dayKey(d)]?.length || 0), 0);
  const title = offset === 0 ? '이번 주 DC&M' : offset === 1 ? '다음 주 DC&M' : offset === -1 ? '지난주 DC&M' : 'DC&M 일정';
  const range = start.getMonth() === end.getMonth()
    ? `${md(start)} – ${end.getDate()}일`
    : `${md(start)} – ${md(end)}`;

  return (
    <section className="week" aria-labelledby="week-title">
      <div className="week-top">
        <h2 id="week-title">
          {title}
          <span className="range">{range}</span>
        </h2>
        <div className="week-nav">
          <button type="button" className="btn small" onClick={() => setOffset((o) => o - 1)} aria-label="이전 주">이전</button>
          {offset !== 0 && (
            <button type="button" className="btn small" onClick={() => setOffset(0)}>이번 주</button>
          )}
          <button type="button" className="btn small" onClick={() => setOffset((o) => o + 1)} aria-label="다음 주">다음</button>
        </div>
      </div>
      {events && total === 0 && <p className="week-empty">이 주에는 잡힌 일정이 없습니다. 운영진은 관리자 화면에서 일정을 추가할 수 있습니다.</p>}
      <div className="week-grid">
        {days.map((d) => {
          const key = dayKey(d);
          const list = byDay[key] || [];
          const isToday = key === todayKey;
          const weekend = d.getDay() === 0 || d.getDay() === 6;
          return (
            <div
              key={key}
              className={`day${isToday ? ' today' : ''}${weekend ? ' weekend' : ''}${list.length ? '' : ' no-events'}`}
              aria-current={isToday ? 'date' : undefined}
            >
              <div className="day-head">
                <span className="wd">{WEEKDAYS[d.getDay()]}</span>
                <span className="dn">{d.getMonth() + 1}/{d.getDate()}</span>
                {isToday && <span className="today-label">오늘</span>}
              </div>
              <div className="day-body">
                {list.map((e) => (
                  <Link key={e.id} to={e.project_id ? `/projects/${e.project_id}` : `/calendar?d=${e.date}`} className={`slot k-${e.kind}`}>
                    <span className="time">{timeRange(e)}</span>
                    <span className="title">{e.title}</span>
                    {e.place && <span className="place">{e.place}</span>}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
