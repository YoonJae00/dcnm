// DC&M 로고. 마크(세로 막대 + > + _)와 글자 로고.

// 마크만: 배경 없는 선 모양. color로 색을 바꿀 수 있음
export function LogoMark({ size = 28, color = 'currentColor', cursor = '#a5a7ff', blink = false, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="6.5" height="36" rx="3.25" fill={color} />
      <path d="M19 9.5 33.5 24 19 38.5" stroke={color} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="34" y="38.5" width="10" height="4.5" rx="1.5" fill={cursor} className={blink ? 'cursor-blink' : undefined} />
    </svg>
  );
}

// 앱 아이콘 모양 (그라데이션 네모 안에 흰 마크)
export function LogoTile({ size = 40, className }) {
  const id = `dcm-g-${size}`;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6c69ff" />
          <stop offset="1" stopColor="#c3c1ff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
      <g transform="translate(9 9) scale(0.96)">
        <rect x="6" y="6" width="6.5" height="36" rx="3.25" fill="#fff" />
        <path d="M19 9.5 33.5 24 19 38.5" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="34" y="38.5" width="10" height="4.5" rx="1.5" fill="#fbd3f3" />
      </g>
    </svg>
  );
}

// 헤더용: 마크 + DC&M 글자
export default function Logo() {
  return (
    <span className="logo-lockup">
      <LogoMark size={26} color="#6367ff" />
      <span className="logo-word">DC<span>&amp;M</span></span>
    </span>
  );
}
