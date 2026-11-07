export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

// 'YYYY-MM-DD'를 현지 시각 자정으로 읽습니다 (UTC로 읽으면 하루 밀릴 수 있음).
export function parseDay(s) {
  const [y, m, d] = String(s).slice(0, 10).split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function dayKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

// 월요일 시작 주
export function weekStart(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const offset = (d.getDay() + 6) % 7;
  return addDays(d, -offset);
}

export function md(date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

export function fullDate(value) {
  if (!value) return '';
  const d = String(value).length <= 10 ? parseDay(value) : new Date(value);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export function shortDate(value) {
  if (!value) return '';
  const d = String(value).length <= 10 ? parseDay(value) : new Date(value);
  return `${d.getMonth() + 1}.${String(d.getDate()).padStart(2, '0')}`;
}

export function timeRange(e) {
  if (!e.start_time) return '종일';
  return e.end_time ? `${e.start_time}–${e.end_time}` : e.start_time;
}

export function daysLeft(deadline, today = new Date()) {
  if (!deadline) return null;
  const end = parseDay(deadline);
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((end - start) / 86400000);
}

export function initials(name) {
  return String(name || '?').trim().slice(0, 1);
}

export function paragraphs(text) {
  return String(text || '').split(/\n{2,}/).map((p) => p.split('\n'));
}

// 오늘 날짜를 한국 시간 기준으로: "11월 7일 토요일"
export function todayKst(now = new Date()) {
  return new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', month: 'long', day: 'numeric', weekday: 'long' }).format(now);
}

// "방금 전 / 3시간 전 / 2일 전 / 11.02"
export function ago(value, now = new Date()) {
  if (!value) return '';
  const t = new Date(value).getTime();
  if (Number.isNaN(t)) return '';
  const min = Math.floor((now.getTime() - t) / 60000);
  if (min < 1) return '방금 전';
  if (min < 60) return `${min}분 전`;
  if (min < 60 * 24) return `${Math.floor(min / 60)}시간 전`;
  if (min < 60 * 24 * 7) return `${Math.floor(min / 1440)}일 전`;
  return shortDate(value);
}
