import { useState } from 'react';
import { Link } from 'react-router-dom';
import WeekBoard from '../components/WeekBoard';
import { useSettings, useTable, useUser } from '../lib/hooks';
import { addDays, daysLeft, parseDay, shortDate, weekStart } from '../lib/format';
import { deadlineLeft, isMember, occurrences } from '../lib/projects';
import { RecruitCard } from '../components/UI';
import { usePostStats } from './Community';
import { CountUp } from '../lib/motion';

export function RecruitStatus({ settings }) {
  if (!settings) return null;
  if (!settings.recruit_open) return <span className="status closed">지금은 모집 기간이 아닙니다</span>;
  const left = daysLeft(settings.recruit_deadline);
  const d = settings.recruit_deadline ? parseDay(settings.recruit_deadline) : null;
  let text = '모집 중';
  if (d && left !== null) {
    const date = `${d.getMonth() + 1}월 ${d.getDate()}일`;
    text = left > 0 ? `모집 중, ${date} 마감 (D-${left})` : left === 0 ? '모집 중, 오늘 마감' : `모집 중, ${date} 마감`;
  }
  return <span className="status open">{text}</span>;
}

// 동아리가 실제로 하는 활동. 각 카드는 해당 프로젝트로 이어집니다.
const ACTIVITIES = [
  { tag: 'Study', title: '코딩테스트 스터디', text: '매주 일요일 오후 3시에 프로그래머스와 백준 문제를 풀고, 한 사람씩 풀이를 설명합니다.', to: '/projects/p2' },
  { tag: 'Reading', title: '독서클럽', text: '학술정보관 독서클럽과 연계해 AI 관련 책을 읽습니다. 교수님이 참여하는 회차는 동아리방에서 만납니다.', to: '/projects/p3' },
  { tag: 'Hackathon', title: '미니 해커톤', text: '하루 동안 팀을 나눠 서비스를 만들고 발표합니다. 이 사이트도 해커톤 결과물입니다.', to: '/projects/d1' },
  { tag: 'Project', title: '부원 프로젝트', text: '공모전이나 스터디를 들고 와서 직접 사람을 모읍니다. 참여가 확정되면 모임이 개인 캘린더에 들어갑니다.', to: '/projects?tab=recruiting' },
];

export default function Home() {
  const settings = useSettings();
  const user = useUser();
  const events = useTable('events');
  const notices = useTable('notices');
  const projects = useTable('projects').rows || [];
  const members = useTable('members').rows || [];
  const posts = useTable('posts').rows || [];
  const apps = useTable('applications').rows || [];
  const stats = usePostStats();

  // 캘린더 보기 상태 ('two_weeks' | 'full_month')
  const [calendarView, setCalendarView] = useState('two_weeks');

  const now = new Date();
  const ws = weekStart(now);

  // 1. 달력 모드에 따른 시작/끝 날짜 계산
  let rangeStart = addDays(ws, -35);
  let rangeEnd = addDays(ws, 14); // 기본 2주(14일)

  if (calendarView === 'full_month') {
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    rangeStart = weekStart(firstDayOfMonth);
    rangeEnd = addDays(weekStart(lastDayOfMonth), 7);
  }

  // 2. 프로젝트 모임 일정 추출
  const projectSlots = projects
    .filter((p) => p.status !== 'done' && (p.origin === 'club' || isMember(p, user?.id)))
    .flatMap((p) => occurrences(p, rangeStart, rangeEnd).map((e) => ({ ...e, kind: p.kind === '스터디' ? '스터디' : '프로젝트' })));

  const weekEvents = events.rows ? [...events.rows, ...projectSlots] : null;

  const recruiting = projects.filter((p) => p.status === 'recruiting' && (deadlineLeft(p) ?? 0) >= 0)
    .sort((a, b) => (deadlineLeft(a) ?? 999) - (deadlineLeft(b) ?? 999));
  const hot = [...posts].sort((a, b) => (stats.likes(b.id) + stats.comments(b.id)) - (stats.likes(a.id) + stats.comments(a.id))).slice(0, 3);
  const ongoing = projects.filter((p) => p.status === 'ongoing').length;
  const done = projects.filter((p) => p.status === 'done').length;
  const myApp = (pid) => user && apps.find((a) => a.project_id === pid && a.user_id === user.id)?.status;

  return (
    <>
      <section className="hero2" aria-labelledby="hero-title">
        <RecruitStatus settings={settings} />
        <h1 id="hero-title" className="hero-h">아이디어가<br /><span className="hero-code">코드</span>가 되는 곳</h1>
        <p className="hero-description">기획부터 배포까지, 함께 만들고 함께 성장하는<br />개발 동아리 DC&amp;M이에요.</p>
        <div className="actions">
          {settings?.recruit_open
            ? <Link className="btn primary big" to="/apply">지원서 쓰기 ›</Link>
            : <Link className="btn primary big" to="/apply?tab=inquiry">모집 알림 문의하기 ›</Link>}
          <Link className="btn outline big" to="/projects">프로젝트 둘러보기</Link>
        </div>
      </section>

      <section className="statement">
        <p>한성대학교 학생들이 함께 공부하고 만드는 동아리, DC&amp;M을 소개합니다</p>
      </section>

      <section className="hblock" aria-labelledby="records-h">
        <div className="block-head">
          <span className="eyebrow">Records</span>
          <h2 id="records-h">지금 DC&amp;M은</h2>
        </div>
        <div className="stats4">
          <div className="stat"><CountUp value={members.length} /><span>함께하는 멤버</span></div>
          <div className="stat"><CountUp value={ongoing} /><span>진행 중인 프로젝트</span></div>
          <div className="stat"><CountUp value={recruiting.length} /><span>사람을 모으는 프로젝트</span></div>
          <div className="stat"><CountUp value={done} /><span>끝까지 해낸 프로젝트</span></div>
        </div>
        <div className="block-foot"><Link className="btn outline" to="/members">멤버가 궁금하다면 ›</Link></div>
      </section>

      {/* 이번 주 / 전체 달력 일정 섹션 */}
      <section className="hblock" aria-labelledby="week-h">
        <div className="block-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span className="eyebrow">{calendarView === 'two_weeks' ? 'Upcoming 2 Weeks' : 'This Month'}</span>
            <h2 id="week-h">{calendarView === 'two_weeks' ? '향후 2주간 일정' : `${now.getMonth() + 1}월 전체 일정`}</h2>
          </div>
          <button
            type="button"
            className="btn outline small"
            onClick={() => setCalendarView((prev) => (prev === 'two_weeks' ? 'full_month' : 'two_weeks'))}
          >
            {calendarView === 'two_weeks' ? '전체보기 (이번 달)' : '접기 (2주 보기)'}
          </button>
        </div>
        
        {/* WeekBoard 컴포넌트에 모드 전달 (필요 시) */}
        <WeekBoard events={weekEvents} viewMode={calendarView} />
        {events.error && <p className="error-box">일정을 불러오지 못했습니다: {events.error}</p>}
      </section>

      <section className="hblock" aria-labelledby="recruit-h">
        <div className="block-head">
          <span className="eyebrow">Projects</span>
          <h2 id="recruit-h">같이 할 사람을 찾는 프로젝트</h2>
          <p>부원이 직접 올린 공모전·스터디·프로젝트입니다. 마음에 드는 곳에 참여 신청을 보내 보세요.</p>
        </div>
        <div className="card-grid two">
          {recruiting.slice(0, 4).map((p) => <RecruitCard key={p.id} p={p} userId={user?.id} applied={myApp(p.id)} />)}
        </div>
        {recruiting.length === 0 && <p className="state" style={{ textAlign: 'center' }}>지금 모집 중인 프로젝트가 없습니다.</p>}
        <div className="block-foot"><Link className="btn outline" to="/projects?tab=recruiting">전체 프로젝트가 궁금하다면 ›</Link></div>
      </section>

      <section className="hblock" aria-labelledby="act-h">
        <div className="block-head">
          <span className="eyebrow">Activities</span>
          <h2 id="act-h">DC&amp;M은 이렇게 활동해요</h2>
        </div>
        <div className="parts">
          {ACTIVITIES.map((a) => (
            <Link key={a.title} to={a.to} className="part">
              <span className="tagm">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="hblock" aria-label="공지와 커뮤니티">
        <div className="home-cols dark-cols">
          <div className="section">
            <div className="section-head"><h2>공지사항</h2><Link to="/notices">전체 보기</Link></div>
            <div className="rows">
              {(notices.rows || []).slice(0, 5).map((n) => (
                <Link key={n.id} to={`/notices/${n.id}`} className="row">
                  <span className="date">{shortDate(n.created_at)}</span>
                  <span className="row-title">{n.pinned && <span className="pin">고정</span>}{n.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="section-head"><h2>커뮤니티 인기 글</h2><Link to="/community">커뮤니티 가기</Link></div>
            <div className="rows">
              {hot.map((p) => (
                <Link key={p.id} to={`/community/${p.id}`} className="rrow">
                  <span className="badges"><span className="badge neutral">{p.category}</span></span>
                  <b>{p.title}</b>
                  <span className="small muted">{p.author_name} · 공감 {stats.likes(p.id)} · 댓글 {stats.comments(p.id)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-h">
        <h2 id="cta-h">다음 기수를 기다리고 있어요</h2>
        <p className="muted">{settings?.recruit_title || '신입 부원 모집'}{settings?.room ? ` · 동아리방 ${settings.room}` : ''}</p>
        <Link className="btn primary big" to={settings?.recruit_open ? '/apply' : '/apply?tab=inquiry'}>{settings?.recruit_open ? '지원서 쓰기 ›' : '모집 알림 문의하기 ›'}</Link>
      </section>
    </>
  );
}