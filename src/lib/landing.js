// 모집 랜딩 켜짐 판정. 랜딩 화면·라우트·운영진 화면이 이 함수 하나를 같이 씁니다.
// 날짜는 한국 시간(KST) 기준 'YYYY-MM-DD' 문자열로 비교합니다.

const KST_DAY = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' });

export function todayKST(now = new Date()) {
  return KST_DAY.format(now);
}

export function landingState(settings, now = new Date()) {
  const s = settings || {};
  const today = todayKST(now);
  const start = s.recruit_start ? String(s.recruit_start).slice(0, 10) : '';
  const end = s.recruit_deadline ? String(s.recruit_deadline).slice(0, 10) : '';
  // 모집 기간 안: 시작일 ~ 마감일 (둘 다 있어야 함, 마감일 당일 포함)
  const inPeriod = !!start && !!end && start <= today && today <= end;
  // 켤 수 있음: '지금 지원을 받습니다'가 켜져 있고 기간 안일 때만
  const canEnable = !!s.recruit_open && inPeriod;
  // 방문자에게 실제로 보임
  const live = canEnable && !!s.landing_enabled;
  return { inPeriod, canEnable, live };
}
