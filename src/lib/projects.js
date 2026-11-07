import { addDays, dayKey, parseDay } from './format';

export const KINDS = ['공모전', '스터디', '프로젝트', '해커톤', '독서', '기타'];
export const ORIGIN_LABEL = { club: '동아리 개설', personal: '개인 신청' };
export const STATUS_LABEL = { ongoing: '진행 중', recruiting: '모집 중', done: '완료' };
export const POST_CATEGORIES = ['프로젝트 후기', '결과물', '자유', '질문', '건의'];

export const isMember = (p, userId) => !!userId && (p.member_ids || []).includes(userId);
export const memberCount = (p) => (p.member_ids || []).length;

export function deadlineLeft(p, today = new Date()) {
  if (!p.deadline) return null;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((parseDay(p.deadline) - start) / 86400000);
}

export function deadlineText(p) {
  const left = deadlineLeft(p);
  if (left === null) return '';
  if (left < 0) return '마감됨';
  if (left === 0) return '오늘 마감';
  return `마감 D-${left}`;
}

const WD = ['일', '월', '화', '수', '목', '금', '토'];
export function meetingText(p) {
  if (!p.meet_days?.length || !p.meet_time) return p.place || '';
  return `매주 ${p.meet_days.map((d) => WD[d]).join('·')} ${p.meet_time}${p.place ? ` · ${p.place}` : ''}`;
}

// 프로젝트 정기 모임을 [from, to] 사이 날짜로 펼칩니다.
export function occurrences(p, from, to) {
  if (!p.meet_days?.length || !p.meet_time || !p.start_date) return [];
  const start = parseDay(p.start_date);
  const end = p.end_date ? parseDay(p.end_date) : to;
  const out = [];
  for (let d = new Date(Math.max(from, start)); d <= to && d <= end; d = addDays(d, 1)) {
    if (p.meet_days.includes(d.getDay())) {
      out.push({
        id: `${p.id}-${dayKey(d)}`,
        date: dayKey(d),
        title: p.title,
        start_time: p.meet_time,
        end_time: '',
        place: p.place,
        kind: '내 프로젝트',
        project_id: p.id,
      });
    }
  }
  return out;
}

export function nextMeeting(p, today = new Date()) {
  const from = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return occurrences(p, from, addDays(from, 14))[0] || null;
}
