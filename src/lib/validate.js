// 지원·문의 폼 입력값 검사. 빈 문자열이면 통과입니다.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^01[016789]-?\d{3,4}-?\d{4}$/;

export const PARTS = ['웹', '백엔드', 'AI', '알고리즘', 'IoT', '디자인', '아직 모르겠어요'];

export function validate(kind, v) {
  const e = {};
  const name = (v.name || '').trim();
  if (!name) e.name = '이름을 입력하세요.';
  else if (name.length < 2 || name.length > 20) e.name = '이름은 2~20자로 입력하세요.';

  const email = (v.email || '').trim();
  if (!email) e.email = '답장을 받을 이메일을 입력하세요.';
  else if (!EMAIL.test(email)) e.email = 'name@example.com 형식으로 입력하세요.';

  if (kind === 'apply') {
    const sid = (v.student_id || '').trim();
    if (!sid) e.student_id = '학번을 입력하세요.';
    else if (!/^\d{7,10}$/.test(sid)) e.student_id = '학번은 숫자 7~10자리로 입력하세요.';

    const phone = (v.phone || '').trim();
    if (phone && !PHONE.test(phone)) e.phone = '010-1234-5678 형식으로 입력하세요.';

    if (!v.part) e.part = '관심 분야를 하나 고르세요.';
  }

  const msg = (v.message || '').trim();
  const min = kind === 'apply' ? 30 : 10;
  if (!msg) e.message = kind === 'apply' ? '지원 동기를 적어 주세요.' : '문의 내용을 적어 주세요.';
  else if (msg.length < min) e.message = `${min}자 이상 적어 주세요. 지금 ${msg.length}자입니다.`;
  else if (msg.length > 1000) e.message = `1000자 이하로 줄여 주세요. 지금 ${msg.length}자입니다.`;

  if (!v.consent) e.consent = '개인정보 수집·이용에 동의해야 제출할 수 있습니다.';
  return e;
}
