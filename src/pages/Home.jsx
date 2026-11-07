import { useState } from 'react';
import { Link } from 'react-router-dom';
import WeekBoard from '../components/WeekBoard';
import { useSettings, useTable, useUser } from '../lib/hooks';
import { addDays, ago, daysLeft, parseDay, shortDate, todayKst, weekStart } from '../lib/format';
import { deadlineLeft, isMember, meetingText, occurrences } from '../lib/projects';
import { dueState, isTeamMember, meetingEnd, myTeamItems, spacePath, teamOf, whenText, hm } from '../lib/workspace';
import { Avatar, RecruitCard } from '../components/UI';
import { JoinButton } from './SpaceMeetings';
import { usePostStats } from './Community';

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

// 팀 카드: 진행 중인 프로젝트의 공개 정보만 (팀 공간 내용은 팀만 볼 수 있어 여기에 쓰지 않습니다)
function TeamCard({ p, members }) {
  const team = teamOf(p, members);
  const left = p.end_date ? daysLeft(p.end_date) : null;
  const pct = p.progress;
  return (
    <Link to={`/projects/${p.id}`} className="pcard team-card">
      <div className="top">
        <span className="badges"><span className="badge kind">{p.kind}</span></span>
        {left !== null && <span className={`badge ${left >= 0 && left <= 14 ? 'due' : 'neutral'}`}>{left < 0 ? '기간 지남' : left === 0 ? '오늘 종료' : `종료 D-${left}`}</span>}
      </div>
      <h3>{p.title}</h3>
      <div className="team-prog">
        <span className="progress">
          <b>{pct == null ? '–' : `${pct}%`}</b>
          <span className="bar grow" role="img" aria-label={pct == null ? '진행률 아직 없음' : `진행률 ${pct}%`}><i style={{ width: `${pct ?? 0}%` }} /></span>
        </span>
        <p className="small team-note">{p.status_note || '아직 올라온 진행 상황이 없어요.'}</p>
      </div>
      <dl className="kv">
        <dt>모임</dt><dd>{meetingText(p) || '일정 공지 예정'}</dd>
        <dt>업데이트</dt><dd>{p.progress_updated_at ? ago(p.progress_updated_at) : '–'}</dd>
      </dl>
      <div className="team-people">
        <span className="avatars">{team.slice(0, 5).map((t) => <Avatar key={t.id} name={t.name} />)}</span>
        <span className="small muted">{team.slice(0, 3).map((t) => t.name).join(', ')}{team.length > 3 ? ` 외 ${team.length - 3}명` : ''}</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const settings = useSettings();
  const user = useUser();
  const quickLinks = (settings?.links || []).filter((link) => /^https?:\/\//i.test(link.url));
  const events = useTable('events');
  const notices = useTable('notices');
  const projects = useTable('projects').rows || [];
  const members = useTable('members').rows || [];
  const posts = useTable('posts').rows || [];
  const apps = useTable('applications').rows || [];
  const wsEvents = useTable('ws_events').rows;
  const wsMeetings = useTable('ws_meetings').rows;
  const wsTasks = useTable('ws_tasks').rows;
  const stats = usePostStats();

  // 캘린더 보기 상태 ('two_weeks' | 'full_month')
  const [calendarView, setCalendarView] = useState('two_weeks');

  const now = new Date();
  const ws = weekStart(now);

  // 달력 모드에 따른 시작/끝 날짜 계산
  let rangeStart = addDays(ws, -35);
  let rangeEnd = addDays(ws, 14); // 기본 2주(14일)

  if (calendarView === 'full_month') {
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    rangeStart = weekStart(firstDayOfMonth);
    rangeEnd = addDays(weekStart(lastDayOfMonth), 7);
  }

  // 프로젝트 모임 일정 추출
  const projectSlots = projects
    .filter((p) => p.status !== 'done' && (p.origin === 'club' || isMember(p, user?.id)))
    .flatMap((p) => occurrences(p, rangeStart, rangeEnd).map((e) => ({ ...e, kind: p.kind === '스터디' ? '스터디' : '프로젝트' })));
  // 로그인했으면 내 팀들의 팀 일정·확정 회의도 함께 (누르면 팀 공간)
  const teamSlots = myTeamItems(projects, wsEvents, wsMeetings, user);
  const weekEvents = events.rows ? [...events.rows, ...projectSlots, ...teamSlots] : null;

  const recruiting = projects.filter((p) => p.status === 'recruiting' && (deadlineLeft(p) ?? 0) >= 0)
    .sort((a, b) => (deadlineLeft(a) ?? 999) - (deadlineLeft(b) ?? 999));
  const ongoing = projects.filter((p) => p.status === 'ongoing')
    .sort((a, b) => String(b.progress_updated_at || '').localeCompare(String(a.progress_updated_at || '')));
  const hot = [...posts].sort((a, b) => (stats.likes(b.id) + stats.comments(b.id)) - (stats.likes(a.id) + stats.comments(a.id))).slice(0, 3);
  const myApp = (pid) => user && apps.find((a) => a.project_id === pid && a.user_id === user.id)?.status;

  // 내 팀(작성자·참여 확정, 진행 중·모집 중) / 내 할 일 / 다음 확정 회의
  const myTeams = user ? projects.filter((p) => p.status !== 'done' && isTeamMember(p, user)) : [];
  const myIds = new Set(myTeams.map((p) => p.id));
  const projectOf = (id) => projects.find((p) => p.id === id);
  const myTasks = (wsTasks || [])
    .filter((t) => user && t.assignee_id === user.id && t.status !== 'done' && myIds.has(t.project_id))
    .sort((a, b) => (a.due ? 0 : 1) - (b.due ? 0 : 1) || String(a.due || '').localeCompare(String(b.due || '')));
  const myMeetings = (wsMeetings || [])
    .filter((m) => myIds.has(m.project_id) && m.status === 'scheduled' && m.starts_at && meetingEnd(m) >= now)
    .sort((a, b) => String(a.starts_at).localeCompare(String(b.starts_at)))
    .slice(0, 2);

  // 최근 활동 피드: 공개 데이터만, 시간순 8개
  const feed = [
    ...projects.map((p) => ({ id: `np-${p.id}`, at: p.created_at, tag: '새 프로젝트', text: p.title, sub: p.status === 'recruiting' ? '모집을 시작했어요' : '등록됐어요', to: `/projects/${p.id}` })),
    ...projects.filter((p) => p.status === 'done').map((p) => ({ id: `dp-${p.id}`, at: p.progress_updated_at || `${String(p.end_date || p.created_at).slice(0, 10)}T12:00:00+09:00`, tag: '완료', text: p.title, sub: '프로젝트를 끝냈어요', to: `/projects/${p.id}` })),
    ...projects.filter((p) => p.progress_updated_at && p.status !== 'done').map((p) => ({ id: `pg-${p.id}`, at: p.progress_updated_at, tag: '진행 상황', text: p.title, sub: `${p.progress ?? 0}%${p.status_note ? ` · ${p.status_note}` : ''}`, to: `/projects/${p.id}` })),
    ...members.filter((m) => m.created_at).map((m) => ({ id: `nm-${m.id}`, at: m.created_at, tag: '새 멤버', text: `${m.name}님이 합류했어요`, sub: m.role || '', to: '/members' })),
    ...posts.map((p) => ({ id: `po-${p.id}`, at: p.created_at, tag: '커뮤니티', text: p.title, sub: p.author_name, to: `/community/${p.id}` })),
    ...(notices.rows || []).map((n) => ({ id: `nn-${n.id}`, at: n.created_at, tag: '공지', text: n.title, sub: '', to: `/notices/${n.id}` })),
  ]
    .filter((f) => f.at && !Number.isNaN(new Date(f.at).getTime()) && new Date(f.at) <= addDays(now, 1))
    .sort((a, b) => new Date(b.at) - new Date(a.at))
    .slice(0, 8);

  const summary = `진행 중 ${ongoing.length}팀 · 모집 중 ${recruiting.length} · 멤버 ${members.length}명`;

  return (
    <>
      <section className="greet" aria-label="인사">
        <div className="greet-text">
          <span className="eyebrow">{todayKst(now)}</span>
          <h1>{user ? `${user.name}님, 안녕하세요` : 'DC&M 부원 공간'}</h1>
          <p className="muted" aria-label="동아리 현황 요약">{summary}</p>
        </div>
        <div className="actions">
          {user ? (
            <>
              <Link className="btn primary" to="/projects/new">프로젝트 신청</Link>
              <Link className="btn outline" to="/community/new">글쓰기</Link>
              <Link className="btn outline" to="/me">내 활동</Link>
            </>
          ) : <Link className="btn primary" to="/login">로그인</Link>}
        </div>
      </section>

      {quickLinks.length > 0 && (
        <nav className="home-quick-links" aria-label="자주 쓰는 링크">
          <span className="home-quick-links-label">자주 쓰는 링크</span>
          <ul>
            {quickLinks.map((link) => (
              <li key={`${link.label}-${link.url}`}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (새 탭)`}>{link.label}<span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {user && (
        <section className="hblock tight" aria-labelledby="mine-h">
          <div className="block-head">
            <span className="eyebrow">My Space</span>
            <h2 id="mine-h">내 할 일 · 다음 일정</h2>
          </div>
          {myTeams.length === 0 ? (
            <div className="mine-empty">
              <p>아직 참여 중인 팀이 없어요. 모집 중인 프로젝트에 참여해 보세요.</p>
              <Link className="btn outline" to="/projects?tab=recruiting">모집 중인 프로젝트 보기 ›</Link>
            </div>
          ) : (
            <div className="mine-grid">
              <div className="section">
                <div className="section-head"><h3>내 할 일</h3><span className="small muted">{myTasks.length}개</span></div>
                <div className="rows">
                  {myTasks.slice(0, 5).map((t) => {
                    const due = dueState(t, now);
                    return (
                      <Link key={t.id} to={spacePath(t.project_id, 'tasks')} className="rrow">
                        <span className="line"><b>{t.title}</b>{due && <span className={`badge ${due.cls}`}>{due.text}</span>}</span>
                        <span className="small muted">{projectOf(t.project_id)?.title}{t.status === 'doing' ? ' · 진행 중' : ''}</span>
                      </Link>
                    );
                  })}
                </div>
                {myTasks.length === 0 && <p className="state">배정된 할 일이 없어요. 👍</p>}
              </div>
              <div className="section">
                <div className="section-head"><h3>다음 회의</h3></div>
                <div className="rows">
                  {myMeetings.map((m) => (
                    <div key={m.id} className="rrow">
                      <span className="line">
                        <Link to={spacePath(m.project_id, 'meetings')}><b>{m.title}</b></Link>
                        <JoinButton m={m} />
                      </span>
                      <span className="small muted">{whenText(m.starts_at)}–{hm(meetingEnd(m))} · {projectOf(m.project_id)?.title}</span>
                    </div>
                  ))}
                </div>
                {myMeetings.length === 0 && <p className="state">확정된 회의가 없어요.</p>}
                <div className="space-links">
                  {myTeams.map((p) => <Link key={p.id} className="btn outline small" to={spacePath(p.id)}>{p.title} 팀 공간 ›</Link>)}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="hblock tight" aria-labelledby="teams-h">
        <div className="block-head">
          <span className="eyebrow">Now</span>
          <h2 id="teams-h">지금 다른 팀은</h2>
          <p>진행 중인 프로젝트의 진행률과 한 줄 상황입니다. 팀 안의 이야기는 팀원에게만 보입니다.</p>
        </div>
        <div className="card-grid">
          {ongoing.map((p) => <TeamCard key={p.id} p={p} members={members} />)}
        </div>
        {projects.length > 0 && ongoing.length === 0 && <p className="state" style={{ textAlign: 'center' }}>지금 진행 중인 팀이 없어요. 모집 중인 프로젝트에서 새 팀을 시작해 보세요.</p>}
      </section>

      {/* 이번 주 / 전체 달력 일정 섹션 */}
      <section className="hblock tight" aria-labelledby="week-h">
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

      <section className="hblock tight" aria-labelledby="recruit-h">
        <div className="block-head">
          <span className="eyebrow">Projects</span>
          <h2 id="recruit-h">같이 할 사람을 찾는 프로젝트</h2>
        </div>
        <div className="card-grid two compact">
          {recruiting.slice(0, 4).map((p) => <RecruitCard key={p.id} p={p} userId={user?.id} applied={myApp(p.id)} />)}
        </div>
        {recruiting.length === 0 && <p className="state" style={{ textAlign: 'center' }}>지금 모집 중인 프로젝트가 없습니다.</p>}
        <div className="block-foot"><Link className="btn outline" to="/projects?tab=recruiting">모집 중인 프로젝트 전체 보기 ›</Link></div>
      </section>

      <section className="hblock tight" aria-labelledby="feed-h">
        <div className="block-head">
          <span className="eyebrow">Activity</span>
          <h2 id="feed-h">최근 활동</h2>
        </div>
        <div className="rows feed">
          {feed.map((f) => (
            <Link key={f.id} to={f.to} className="row">
              <span className="date">{ago(f.at)}</span>
              <span className="row-title"><span className="badge neutral">{f.tag}</span>{f.text}</span>
              {f.sub && <span className="row-sub">{f.sub}</span>}
            </Link>
          ))}
        </div>
        {feed.length === 0 && <p className="state" style={{ textAlign: 'center' }}>아직 활동이 없어요.</p>}
      </section>

      <section className="hblock tight" aria-label="공지와 커뮤니티">
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
    </>
  );
}
