import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { WEEKDAYS, addDays, dayKey, md, timeRange, weekStart } from '../lib/format';

export default function WeekBoard({ events, viewMode = 'two_weeks' }) {
  const [offset, setOffset] = useState(0);
  const today = new Date();
  const todayKey = dayKey(today);

  // 1. 모드 및 offset에 따른 날짜 계산
  const { days, rangeTitle, sectionTitle, targetYear, targetMonth } = useMemo(() => {
    if (viewMode === 'full_month') {
      const targetDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth();

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const gridStart = weekStart(firstDay);
      const gridEnd = addDays(weekStart(lastDay), 6);

      const diffDays = Math.round((gridEnd.getTime() - gridStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      const dayList = Array.from({ length: diffDays }, (_, i) => addDays(gridStart, i));

      const titleStr = `${year}년 ${month + 1}월`;
      const sTitle = offset === 0 ? '이번 달 DC&M' : `${month + 1}월 DC&M 일정`;

      return { days: dayList, rangeTitle: titleStr, sectionTitle: sTitle, targetYear: year, targetMonth: month };
    }

    if (viewMode === 'two_weeks') {
      const start = addDays(weekStart(today), offset * 14);
      const dayList = Array.from({ length: 14 }, (_, i) => addDays(start, i));
      const end = dayList[13];

      const rangeStr = start.getMonth() === end.getMonth()
        ? `${md(start)} – ${end.getDate()}일`
        : `${md(start)} – ${md(end)}`;

      return { days: dayList, rangeTitle: rangeStr, sectionTitle: offset === 0 ? '향후 2주간 DC&M' : 'DC&M 일정' };
    }

    const start = addDays(weekStart(today), offset * 7);
    const dayList = Array.from({ length: 7 }, (_, i) => addDays(start, i));
    const end = dayList[6];

    const rangeStr = start.getMonth() === end.getMonth()
      ? `${md(start)} – ${end.getDate()}일`
      : `${md(start)} – ${md(end)}`;

    return { days: dayList, rangeTitle: rangeStr, sectionTitle: offset === 0 ? '이번 주 DC&M' : 'DC&M 일정' };
  }, [viewMode, offset, today.getFullYear(), today.getMonth()]);

  // 2. 일자별 이벤트 매핑
  const byDay = useMemo(() => {
    const map = {};
    for (const e of events || []) (map[e.date] ||= []).push(e);
    for (const k in map) map[k].sort((a, b) => String(a.start_time || '').localeCompare(String(b.start_time || '')));
    return map;
  }, [events]);

  const total = days.reduce((n, d) => n + (byDay[dayKey(d)]?.length || 0), 0);

  return (
    <section className={`week view-${viewMode}`} aria-labelledby="week-title">
      <div className="week-top">
        <h2 id="week-title">
          {sectionTitle}
          <span className="range">{rangeTitle}</span>
        </h2>
        <div className="week-nav">
          <button type="button" className="btn small" onClick={() => setOffset((o) => o - 1)} aria-label="이전">
            이전
          </button>
          {offset !== 0 && (
            <button type="button" className="btn small" onClick={() => setOffset(0)}>
              {viewMode === 'full_month' ? '이번 달' : '오늘'}
            </button>
          )}
          <button type="button" className="btn small" onClick={() => setOffset((o) => o + 1)} aria-label="다음">
            다음
          </button>
        </div>
      </div>

      {events && total === 0 && <p className="week-empty">이 기간에는 잡힌 일정이 없습니다.</p>}

      {/* 모드별 클래스 분기 */}
      <div className={`week-grid grid-${viewMode}`}>
        {days.map((d) => {
          const key = dayKey(d);
          const list = byDay[key] || [];
          const isToday = key === todayKey;
          const weekend = d.getDay() === 0 || d.getDay() === 6;

          // 월간 모드일 때 이전달/다음달 판별
          let monthStatusClass = '';
          if (viewMode === 'full_month') {
            const dMonth = d.getMonth();
            const dYear = d.getFullYear();
            if (dYear < targetYear || (dYear === targetYear && dMonth < targetMonth)) {
              monthStatusClass = ' other-month prev-month';
            } else if (dYear > targetYear || (dYear === targetYear && dMonth > targetMonth)) {
              monthStatusClass = ' other-month next-month';
            }
          }

          return (
            <div
              key={key}
              className={`day${isToday ? ' today' : ''}${weekend ? ' weekend' : ''}${list.length ? '' : ' no-events'}${monthStatusClass}`}
              aria-current={isToday ? 'date' : undefined}
            >
              <div className="day-head">
                <span className="wd">{WEEKDAYS[d.getDay()]}</span>
                <span className="dn">
                  {/* 월간 모드일 때 지난달/다음달은 월까지 함께 출력하여 명확한 구분 제공 */}
                  {viewMode === 'full_month' && monthStatusClass ? `${d.getMonth() + 1}/${d.getDate()}` : d.getDate()}
                </span>
                {isToday && <span className="today-label">오늘</span>}
              </div>
              <div className="day-body">
                {list.map((e) => (
                  <Link
                    key={e.id}
                    to={e.project_id ? `/projects/${e.project_id}` : `/calendar?d=${e.date}`}
                    className={`slot k-${e.kind}`}
                    title={`${e.title} (${timeRange(e)})`}
                  >
                    <span className="time">{timeRange(e)}</span>
                    <span className="title">{e.title}</span>
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