// 팀 공간(워크스페이스) 공통 규칙: 누가 팀인지, 누가 지울 수 있는지, 회의 시각 계산, 개인 캘린더용 변환.
import { dayKey, parseDay } from './format';
import { isMember } from './projects';

export const WS_TABS = [
  ['home', '홈'],
  ['schedule', '일정'],
  ['meetings', '회의'],
  ['tasks', '할 일'],
  ['files', '자료'],
];

export const TASK_COLUMNS = [
  ['todo', '할 일'],
  ['doing', '진행 중'],
  ['done', '완료'],
];

export const MEETING_STATUS = { polling: '투표 중', scheduled: '확정', done: '끝남' };
export const EVENT_KIND = { event: '일정', deadline: '마감' };

export const spacePath = (pid, tab) => `/projects/${pid}/space${tab && tab !== 'home' ? `?tab=${tab}` : ''}`;

// 팀원(작성자 또는 참여 확정). 운영진은 볼 수 있지만 팀원은 아닙니다.
export const isTeamMember = (p, user) => !!user && !!p && (p.author_id === user.id || isMember(p, user.id));
// 팀 공간을 볼 수 있는 사람
export const canEnter = (p, user) => isTeamMember(p, user) || !!user?.isAdmin;
// 지우기: 쓴 사람·프로젝트 작성자·운영진
export const canDelete = (row, p, user) => !!user && (row.created_by === user.id || p?.author_id === user.id || !!user.isAdmin);

// 팀원 목록 [{id, name}] (작성자 먼저). 이름은 멤버 표 → 프로젝트에 적힌 이름 순으로 찾습니다.
export function teamOf(p, members) {
  if (!p) return [];
  const ids = [...new Set([p.author_id, ...(p.member_ids || [])].filter(Boolean))];
  return ids.map((id) => {
    const i = (p.member_ids || []).indexOf(id);
    const name = members?.find((m) => m.id === id)?.name || (i >= 0 ? p.member_names?.[i] : '') || (id === p.author_id ? p.author_name : '') || '팀원';
    return { id, name };
  });
}

/* ---------- 시각 ---------- */
const pad = (n) => String(n).padStart(2, '0');
export const hm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const WD = ['일', '월', '화', '수', '목', '금', '토'];
export function whenText(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}(${WD[d.getDay()]}) ${hm(d)}`;
}
// 'YYYY-MM-DD' + 'HH:MM'(현지 시각) → ISO 문자열
export function toIso(date, time) {
  const [h, m] = String(time || '00:00').split(':').map(Number);
  const d = parseDay(date);
  d.setHours(h || 0, m || 0, 0, 0);
  return d.toISOString();
}
export function meetingEnd(m) {
  return new Date(new Date(m.starts_at).getTime() + (m.duration_min || 60) * 60000);
}
// 입장 버튼 강조: 시작 15분 전부터 끝날 때까지
export function meetingLive(m, now = new Date()) {
  if (m.status !== 'scheduled' || !m.starts_at) return false;
  const start = new Date(m.starts_at).getTime();
  return now.getTime() >= start - 15 * 60000 && now <= meetingEnd(m);
}

// 마감 표시: 지남 / 임박(2일 이내)
export function dueState(task, today = new Date()) {
  if (!task.due || task.status === 'done') return null;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const left = Math.round((parseDay(task.due) - start) / 86400000);
  if (left < 0) return { cls: 'due', text: `${-left}일 지남` };
  if (left === 0) return { cls: 'due', text: '오늘 마감' };
  if (left <= 2) return { cls: 'due', text: `D-${left}` };
  return { cls: 'neutral', text: `D-${left}` };
}

// 투표 수가 가장 많은 후보 id들 (0표면 없음)
export function bestSlots(slots, votes) {
  const count = (s) => votes.filter((v) => v.slot_id === s.id).length;
  const max = Math.max(0, ...slots.map(count));
  return max === 0 ? new Set() : new Set(slots.filter((s) => count(s) === max).map((s) => s.id));
}

// 회의록 텍스트를 줄 단위로 (할 일로 보내기 후보). '- ', '* ', '1. ' 같은 머리표는 뗍니다.
export function lines(text) {
  return String(text || '').split('\n').map((l) => l.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, '').trim()).filter(Boolean);
}

/* ---------- 캘린더 항목으로 바꾸기 ---------- */
// MonthCalendar·WeekBoard가 쓰는 {id, date, title, start_time, end_time, place, kind, note, to}
export function eventItem(e, p) {
  return {
    id: `wse-${e.id}`,
    date: String(e.date).slice(0, 10),
    title: p ? `${e.title} · ${p.title}` : e.title,
    start_time: e.start_time || '',
    end_time: e.end_time || '',
    place: e.place || '',
    note: e.note || '',
    kind: e.kind === 'deadline' ? '마감' : '팀일정',
    project_id: e.project_id,
    to: spacePath(e.project_id, 'schedule'),
  };
}
export function meetingItem(m, p) {
  const d = new Date(m.starts_at);
  return {
    id: `wsm-${m.id}`,
    date: dayKey(d),
    title: p ? `${m.title} · ${p.title}` : m.title,
    start_time: hm(d),
    end_time: hm(meetingEnd(m)),
    place: m.link ? '온라인 회의' : '',
    note: '',
    kind: '회의',
    project_id: m.project_id,
    to: spacePath(m.project_id, 'meetings'),
  };
}

// 내가 팀원인 프로젝트들의 팀 일정·확정 회의 (운영진이라도 남의 팀 일정은 개인 캘린더에 넣지 않습니다)
export function myTeamItems(projects, wsEvents, wsMeetings, user) {
  if (!user) return [];
  const mine = new Map(projects.filter((p) => p.status !== 'done' && isTeamMember(p, user)).map((p) => [p.id, p]));
  const evs = (wsEvents || []).filter((e) => mine.has(e.project_id)).map((e) => ({ ...eventItem(e, mine.get(e.project_id)), mine: true }));
  const mts = (wsMeetings || [])
    .filter((m) => mine.has(m.project_id) && m.status !== 'polling' && m.starts_at)
    .map((m) => ({ ...meetingItem(m, mine.get(m.project_id)), mine: true }));
  return [...evs, ...mts];
}

// 다가오는 항목 (오늘 이후, 시간순)
export function upcoming(items, n = 3, today = new Date()) {
  const key = dayKey(today);
  return items
    .filter((e) => e.date >= key)
    .sort((a, b) => a.date.localeCompare(b.date) || String(a.start_time).localeCompare(String(b.start_time)))
    .slice(0, n);
}
