import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTable, useUser } from '../lib/hooks';
import { addDays, dayKey, parseDay } from '../lib/format';
import { isMember, occurrences } from '../lib/projects';
import { MonthCalendar } from '../components/UI';

// 동아리 일정 + 동아리가 연 프로젝트의 정기 모임. 로그인하면 내가 참여한 프로젝트 모임도 함께 보입니다.
export default function Calendar() {
  const { rows, error } = useTable('events');
  const projects = useTable('projects').rows || [];
  const user = useUser();
  const [params, setParams] = useSearchParams();
  const selected = params.get('d') || dayKey(new Date());

  const all = useMemo(() => {
    const today = new Date();
    const from = addDays(today, -90);
    const to = addDays(today, 180);
    const slots = projects
      .filter((p) => p.status !== 'done' && (p.origin === 'club' || isMember(p, user?.id)))
      .flatMap((p) => occurrences(p, from, to).map((e) => ({ ...e, kind: p.origin === 'club' ? `${p.kind} 정기 모임` : '내 프로젝트', mine: isMember(p, user?.id) && p.origin !== 'club' })));
    return [...(rows || []), ...slots];
  }, [rows, projects, user]);

  return (
    <>
      <div className="page-head">
        <h1>일정</h1>
        <p>동아리 행사와 정기 모임 일정입니다. 날짜를 누르면 그날 일정이 아래에 나옵니다.{!user && <> <Link to="/login?next=%2Fcalendar">로그인</Link>하면 내가 참여한 프로젝트 모임도 함께 보입니다.</>}</p>
      </div>
      {error && <p className="error-box">일정을 불러오지 못했습니다: {error}</p>}
      {user && (
        <p className="legend" style={{ marginBottom: 12 }}>
          <span><i style={{ background: 'var(--stone-soft)', boxShadow: 'inset 0 0 0 1px var(--stone)' }} />동아리 일정</span>
          <span><i style={{ background: 'var(--accent-soft)', boxShadow: 'inset 0 0 0 1px var(--accent)' }} />내 프로젝트</span>
        </p>
      )}
      <MonthCalendar events={all} selected={selected} initial={parseDay(selected)} onSelect={(d) => setParams({ d }, { replace: true })} />
    </>
  );
}
