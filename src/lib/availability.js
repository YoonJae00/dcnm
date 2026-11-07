// 시간 맞추기(When2meet식 가능 시간 격자) 계산. 화면과 떨어진 순수 함수만 둡니다.
// 칸 번호 = 날짜 순번 × 하루 칸 수 + 그날 안의 칸 순번. 날짜·분은 한국 시간 벽시계 기준(사이트의 toIso와 같은 방식).
import { parseDay } from './format';
import { toIso } from './workspace';

export const MAX_DATES = 14;
const WD = ['일', '월', '화', '수', '목', '금', '토'];
const pad = (n) => String(n).padStart(2, '0');

// 분 → 'HH:MM' (1440 → '24:00')
export const minText = (m) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
export const dateText = (d) => {
  const x = parseDay(d);
  return `${x.getMonth() + 1}/${x.getDate()}(${WD[x.getDay()]})`;
};

export const rowsPerDay = (poll) => Math.max(0, Math.floor((poll.end_min - poll.start_min) / poll.slot_min));
export const slotCount = (poll) => (poll.dates || []).length * rowsPerDay(poll);
export const slotIndex = (poll, day, row) => day * rowsPerDay(poll) + row;
export function slotAt(poll, i) {
  const n = rowsPerDay(poll);
  const day = Math.floor(i / n);
  const row = i % n;
  const min = poll.start_min + row * poll.slot_min;
  return { day, row, date: poll.dates[day], min };
}
// '11/12(수) 19:00~19:30'
export function slotText(poll, i, len = 1) {
  const s = slotAt(poll, i);
  return `${dateText(s.date)} ${minText(s.min)}~${minText(s.min + poll.slot_min * len)}`;
}
export const slotIso = (poll, i) => {
  const s = slotAt(poll, i);
  return toIso(s.date, minText(s.min));
};

// 팀원별 가능 칸 { userId: Set } — 격자 밖 칸과 팀원이 아닌 응답은 뺍니다.
export function availability(poll, responses, team) {
  const total = slotCount(poll);
  const ids = new Set(team.map((t) => t.id));
  const by = new Map();
  for (const r of responses) {
    if (r.poll_id !== poll.id || !ids.has(r.user_id)) continue;
    by.set(r.user_id, new Set((r.slots || []).filter((s) => Number.isInteger(s) && s >= 0 && s < total)));
  }
  return by;
}

// 칸마다 가능한 사람 id 목록
export function slotPeople(poll, by) {
  const out = Array.from({ length: slotCount(poll) }, () => []);
  for (const [uid, set] of by) for (const s of set) out[s]?.push(uid);
  return out;
}

// 히트맵 단계: 0명은 0, 1명~전원은 1~5
export function heatLevel(n, total) {
  if (!n || !total) return 0;
  return Math.min(5, Math.max(1, Math.ceil((n / total) * 5)));
}

// 추천 시간: 희망 길이를 연속으로 채우는 구간 중 '전 구간 가능한 사람' 수가 많은 순.
// 겹치는 구간은 하나만 남기고, 이미 지난 시각은 뺍니다. → [{start, len, ids, startsAt}]
export function recommend(poll, by, { limit = 3, now = new Date() } = {}) {
  const n = rowsPerDay(poll);
  const len = Math.max(1, Math.ceil((poll.duration_min || poll.slot_min) / poll.slot_min));
  if (len > n) return [];
  const people = [...by.entries()];
  const cands = [];
  for (let day = 0; day < poll.dates.length; day += 1) {
    for (let row = 0; row + len <= n; row += 1) {
      const start = slotIndex(poll, day, row);
      if (new Date(slotIso(poll, start)) < now) continue;
      const ids = people.filter(([, set]) => {
        for (let k = 0; k < len; k += 1) if (!set.has(start + k)) return false;
        return true;
      }).map(([uid]) => uid);
      if (ids.length) cands.push({ start, day, row, len, ids });
    }
  }
  cands.sort((a, b) => b.ids.length - a.ids.length || a.start - b.start);
  const picked = [];
  for (const c of cands) {
    if (picked.some((p) => p.day === c.day && c.row < p.row + p.len && p.row < c.row + c.len)) continue;
    picked.push({ ...c, startsAt: slotIso(poll, c.start) });
    if (picked.length >= limit) break;
  }
  return picked;
}

// 앵커 칸과 현재 칸이 만드는 사각형(날짜 × 시간) 안의 칸들
export function rectSlots(poll, a, b) {
  const A = slotAt(poll, a);
  const B = slotAt(poll, b);
  const out = [];
  for (let d = Math.min(A.day, B.day); d <= Math.max(A.day, B.day); d += 1) {
    for (let r = Math.min(A.row, B.row); r <= Math.max(A.row, B.row); r += 1) out.push(slotIndex(poll, d, r));
  }
  return out;
}
