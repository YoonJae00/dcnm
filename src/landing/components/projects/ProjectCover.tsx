import { useId } from "react";
import type { CoverMotif, Cover } from "@/lib/cover";

const W = 400;
const H = 260;

function Motif({ motif }: { motif: CoverMotif }) {
  switch (motif) {
    case "grid":
      return (
        <g>
          {Array.from({ length: 10 }, (_, c) =>
            Array.from({ length: 6 }, (_, r) => {
              const on = (c * 7 + r * 3) % 5 === 0;
              return (
                <rect
                  key={`${c}-${r}`}
                  x={40 + c * 34}
                  y={30 + r * 34}
                  width={24}
                  height={24}
                  rx={6}
                  fill="#fff"
                  opacity={on ? 0.9 : 0.14}
                />
              );
            }),
          )}
        </g>
      );
    case "orbit":
      return (
        <g fill="none" stroke="#fff">
          <circle cx={300} cy={140} r={46} strokeOpacity={0.6} strokeWidth={2} />
          <circle cx={300} cy={140} r={88} strokeOpacity={0.35} strokeWidth={2} />
          <circle cx={300} cy={140} r={132} strokeOpacity={0.2} strokeWidth={2} />
          <circle cx={300} cy={140} r={18} fill="#fff" fillOpacity={0.95} stroke="none" />
          <circle cx={238} cy={78} r={9} fill="#fff" stroke="none" />
          <circle cx={388} cy={170} r={7} fill="#fff" fillOpacity={0.8} stroke="none" />
          <circle cx={192} cy={210} r={6} fill="#fff" fillOpacity={0.7} stroke="none" />
        </g>
      );
    case "wave":
      return (
        <g fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round">
          {Array.from({ length: 6 }, (_, i) => (
            <path
              key={i}
              d={`M -20 ${90 + i * 22} C 80 ${40 + i * 22}, 160 ${150 + i * 22}, 260 ${90 + i * 22} S 380 ${40 + i * 22}, 440 ${100 + i * 22}`}
              strokeOpacity={0.85 - i * 0.12}
            />
          ))}
        </g>
      );
    case "bars":
      return (
        <g>
          {[0.35, 0.55, 0.42, 0.78, 0.6, 0.92, 0.7].map((h, i) => (
            <rect
              key={i}
              x={60 + i * 44}
              y={H - 40 - h * 170}
              width={28}
              height={h * 170}
              rx={8}
              fill="#fff"
              opacity={i === 5 ? 0.95 : 0.35 + i * 0.05}
            />
          ))}
        </g>
      );
    case "dots":
      return (
        <g>
          {Array.from({ length: 13 }, (_, c) =>
            Array.from({ length: 8 }, (_, r) => {
              const dx = c - 9;
              const dy = r - 3;
              const d = Math.sqrt(dx * dx + dy * dy);
              const size = Math.max(1.5, 9 - d * 1.3);
              return (
                <circle
                  key={`${c}-${r}`}
                  cx={30 + c * 30}
                  cy={25 + r * 30}
                  r={size}
                  fill="#fff"
                  opacity={Math.max(0.15, 1 - d * 0.14)}
                />
              );
            }),
          )}
          <path
            d="M270 92c-14 0-25 11-25 25 0 19 25 43 25 43s25-24 25-43c0-14-11-25-25-25Z"
            fill="#fff"
          />
          <circle cx={270} cy={117} r={8} fill="#6367ff" />
        </g>
      );
    case "rings":
      return (
        <g fill="none" stroke="#fff" strokeWidth={2}>
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={i} cx={W / 2} cy={H / 2} r={38 + i * 24} strokeOpacity={0.9 - i * 0.12} />
          ))}
        </g>
      );
  }
}

export function ProjectCover({ cover, className }: { cover: Cover; className?: string }) {
  const id = useId();
  const { from, to, motif } = cover;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.85" cy="0.1" r="0.7">
          <stop offset="0" stopColor="#fff" stopOpacity={0.35} />
          <stop offset="1" stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      <rect width={W} height={H} fill={`url(#${id}-glow)`} />
      <Motif motif={motif} />
    </svg>
  );
}
