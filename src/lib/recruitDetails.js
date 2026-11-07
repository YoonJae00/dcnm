// settings.recruit_details(jsonb)와 기본값(data/recruitDefaults.js)을 합치고,
// 운영진 화면의 편집 폼 ↔ 저장 형식 변환·입력 검사를 맡습니다. 모집 랜딩과 운영진 화면이 같이 씁니다.
//
// 저장 형식 (settings.recruit_details), 비어 있는 항목은 기본값을 씁니다:
// {
//   "generation": 8,
//   "applyEndTime": "23:59",                      // 서류 접수 마감 시각 (날짜는 recruit_deadline)
//   "steps": [                                    // 모집 일정. 첫 단계의 날짜는 recruit_start·recruit_deadline이 정합니다
//     { "title": "서류 접수", "description": "...", "start": "2026-11-03T00:00:00+09:00", "end": "2026-11-23T23:59:59+09:00" },
//     { "title": "서류 발표", "description": "...", "start": "2026-11-26T18:00:00+09:00" }
//   ],
//   "qualifications": ["개발에 관심 있는 재학생이라면 ..."],
//   "tracks": [{ "id": "frontend", "name": "프론트엔드", "summary": "...", "learn": ["..."], "stack": ["React"] }],
//   "faqs": [{ "q": "...", "a": "..." }]
// }
import { defaultRecruit, defaultTracks, defaultFaqs } from '../data/recruitDefaults.js';

const isStr = (v) => typeof v === 'string';
const strList = (v) => (Array.isArray(v) ? v.filter(isStr) : []);
const SNIPPETS = Object.fromEntries(defaultTracks.map((t) => [t.id, t.snippet]));

// 날짜 'YYYY-MM-DD' + 시각 'HH:MM' → 'YYYY-MM-DDTHH:MM:SS+09:00' (23:59는 59초까지, 기존 형식과 같게)
export function toIso(date, time) {
  if (!date) return '';
  const t = time || '00:00';
  return `${date}T${t}:${t === '23:59' ? '59' : '00'}+09:00`;
}
const isoDate = (iso) => (iso ? String(iso).slice(0, 10) : '');
const isoTime = (iso) => (iso && String(iso).length >= 16 ? String(iso).slice(11, 16) : '');

/** 랜딩·메인이 쓰는 모집 내용. settings가 없거나 비어 있으면 기본값. */
export function resolveRecruitContent(settings) {
  const s = settings || {};
  const d = s.recruit_details && typeof s.recruit_details === 'object' ? s.recruit_details : {};
  const generation = Number.isInteger(d.generation) && d.generation > 0 ? d.generation : defaultRecruit.generation;
  const endTime = isStr(d.applyEndTime) && /^\d{2}:\d{2}$/.test(d.applyEndTime) ? d.applyEndTime : defaultRecruit.applyEndTime;
  const rawSteps = Array.isArray(d.steps) && d.steps.length > 0 && d.steps.every((x) => x && isStr(x.title) && isStr(x.start)) ? d.steps : defaultRecruit.steps;
  const steps = rawSteps.map((x, i) => {
    const step = { title: x.title, description: isStr(x.description) ? x.description : '', start: x.start };
    if (isStr(x.end) && x.end) step.end = x.end;
    if (i === 0) {
      // 서류 접수는 시작일·마감일 칸이 곧 이 단계의 날짜
      if (s.recruit_start) step.start = toIso(isoDate(s.recruit_start), '00:00');
      if (s.recruit_deadline) step.end = toIso(isoDate(s.recruit_deadline), endTime);
    }
    return step;
  });
  // 코드 스니펫의 {gen} 자리에 기수를 넣어요 (예: '{gen}기 지원하기' → '9기 지원하기')
  const fill = (t) => ({ ...t, snippet: (t.snippet || []).map((line) => line.replaceAll('{gen}', String(generation))) });
  const tracks = Array.isArray(d.tracks) && d.tracks.every((t) => t && isStr(t.name))
    ? d.tracks.map((t, i) => ({ id: isStr(t.id) && t.id ? t.id : `track-${i}`, name: t.name, summary: isStr(t.summary) ? t.summary : '', learn: strList(t.learn), stack: strList(t.stack), snippet: SNIPPETS[t.id] || [] })).map(fill)
    : defaultTracks.map(fill);
  const faqs = Array.isArray(d.faqs) && d.faqs.every((f) => f && isStr(f.q) && isStr(f.a)) ? d.faqs.map((f) => ({ q: f.q, a: f.a })) : defaultFaqs;
  const qualifications = Array.isArray(d.qualifications) ? strList(d.qualifications) : defaultRecruit.qualifications;
  return {
    recruit: { generation, applyEndTime: endTime, applyStart: steps[0].start, applyEnd: steps[0].end || steps[0].start, steps, qualifications },
    tracks,
    faqs,
  };
}

/** 저장된 settings → 편집 폼 상태 */
export function detailsToForm(settings) {
  const { recruit, tracks, faqs } = resolveRecruitContent(settings);
  return {
    generation: String(recruit.generation),
    endTime: recruit.applyEndTime,
    steps: recruit.steps.map((x) => ({ title: x.title, description: x.description, sd: isoDate(x.start), st: isoTime(x.start), ed: isoDate(x.end), et: isoTime(x.end) })),
    qualifications: [...recruit.qualifications],
    tracks: tracks.map((t) => ({ id: t.id, name: t.name, summary: t.summary, learn: [...t.learn], stack: t.stack.join(', ') })),
    faqs: faqs.map((f) => ({ ...f })),
  };
}

const splitStack = (text) => String(text || '').split(',').map((x) => x.trim()).filter(Boolean);
const clean = (list) => list.map((x) => String(x).trim()).filter(Boolean);

/** 편집 폼 상태 → recruit_details. 첫 단계 날짜는 start·deadline(설정 칸)에서 가져옵니다. */
export function formToDetails(form, { start, deadline }) {
  const endTime = form.endTime || defaultRecruit.applyEndTime;
  return {
    generation: Number(form.generation),
    applyEndTime: endTime,
    steps: form.steps.map((x, i) => {
      const step = { title: x.title.trim(), description: x.description.trim() };
      const sd = i === 0 ? start : x.sd;
      const st = i === 0 ? '00:00' : x.st;
      const ed = i === 0 ? deadline : x.ed;
      const et = i === 0 ? endTime : x.et;
      step.start = toIso(sd, st);
      if (ed) step.end = toIso(ed, et);
      return step;
    }),
    qualifications: clean(form.qualifications),
    tracks: form.tracks.map((t) => ({ id: t.id, name: t.name.trim(), summary: t.summary.trim(), learn: clean(t.learn), stack: splitStack(t.stack) })),
    faqs: form.faqs.map((f) => ({ q: f.q.trim(), a: f.a.trim() })),
  };
}

/** 입력 검사. 오류는 { 'generation': '메시지', 'steps.2.start': '메시지', ... } 형태로, 해당 칸 옆에 보여 줍니다. */
export function validateRecruitForm(form, { start, deadline }) {
  const e = {};
  if (!/^[1-9]\d*$/.test(String(form.generation).trim())) e.generation = '기수는 1 이상의 정수로 적어 주세요.';
  if (start && deadline && deadline < start) e.recruit_deadline = '마감일은 시작일보다 뒤여야 합니다.';
  if (form.steps.length === 0) e.steps = '일정 단계를 하나 이상 두어 주세요.';
  let prev = ''; // 앞 단계 시작 (비교용 ISO 문자열, 같은 형식이라 문자열 비교가 곧 시각 비교)
  form.steps.forEach((x, i) => {
    const k = (f) => `steps.${i}.${f}`;
    if (!x.title.trim()) e[k('title')] = '단계 이름을 적어 주세요.';
    const first = i === 0;
    const s0 = first ? toIso(start, '00:00') : toIso(x.sd, x.st);
    const e0 = first ? toIso(deadline, form.endTime || '23:59') : toIso(x.ed, x.et);
    if (!first && !x.sd) e[k('start')] = '시작 날짜를 골라 주세요.';
    if (first && !start) e.recruit_start = '서류 접수 단계의 날짜는 모집 시작일·마감일로 정해져요. 시작일을 골라 주세요.';
    if (first && !deadline) e.recruit_deadline = e.recruit_deadline || '서류 접수 단계의 날짜는 모집 시작일·마감일로 정해져요. 마감일을 골라 주세요.';
    if (!first && x.sd && prev && s0 <= prev) e[k('start')] = '앞 단계보다 뒤의 날짜·시각이어야 합니다.';
    if (!first && !x.ed && x.et) e[k('end')] = '끝 날짜를 함께 골라 주세요.';
    if (!first && x.ed && s0 && e0 <= s0) e[k('end')] = '끝은 시작보다 뒤여야 합니다.';
    if (s0) prev = s0;
  });
  form.tracks.forEach((t, i) => { if (!t.name.trim()) e[`tracks.${i}.name`] = '트랙 이름을 적어 주세요.'; });
  form.faqs.forEach((f, i) => {
    if (!f.q.trim()) e[`faqs.${i}.q`] = '질문을 적어 주세요.';
    if (!f.a.trim()) e[`faqs.${i}.a`] = '답을 적어 주세요.';
  });
  return e;
}
