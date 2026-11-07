// 이스터에그: 해커톤 타이머의 커피를 다 마시면 DC&M 마스코트가 화면을 떠다녀요. 누르면 "메롱".
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import mascot from "@/assets/mascot.png";

const SIZE = 84;

export function CoffeeMascot() {
  const ref = useRef<HTMLButtonElement>(null);
  const [tease, setTease] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = false;
    let x = Math.max(16, window.innerWidth - SIZE - 32);
    let y = window.innerHeight * 0.3;
    let vx = -1.6;
    let vy = 1.2;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(48, now - last) / 16;
      last = now;
      const maxX = window.innerWidth - SIZE;
      const maxY = window.innerHeight - SIZE;
      if (!reduce) {
        x += vx * dt;
        y += vy * dt;
        if (x <= 0 || x >= maxX) { vx = -vx; x = Math.min(Math.max(x, 0), maxX); }
        if (y <= 0 || y >= maxY) { vy = -vy; y = Math.min(Math.max(y, 0), maxY); }
      } else {
        x = Math.min(x, maxX);
        y = Math.min(y, maxY);
      }
      const tilt = Math.sin(now / 400) * 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!tease) return;
    const id = window.setTimeout(() => setTease(0), 1600);
    return () => window.clearTimeout(id);
  }, [tease]);

  return createPortal(
    <button
      ref={ref}
      type="button"
      onClick={() => setTease((n) => n + 1)}
      aria-label="DC&M 마스코트 누르기"
      title="?"
      style={{
        position: "fixed", left: 0, top: 0, zIndex: 9990, width: SIZE, height: SIZE,
        padding: 0, border: 0, background: "none", cursor: "pointer", willChange: "transform",
        filter: "drop-shadow(0 6px 12px rgba(0,0,0,.25))",
      }}
    >
      <img src={mascot} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }} />
      {tease > 0 && (
        <span
          key={tease}
          role="status"
          className="dcm-mascot-tease"
          style={{
            position: "absolute", bottom: "100%", left: "50%", marginBottom: 6, whiteSpace: "nowrap",
            padding: "6px 12px", borderRadius: 999, background: "#fff", color: "#1d2a5b",
            fontWeight: 800, fontSize: 18, boxShadow: "0 4px 14px rgba(0,0,0,.2)",
          }}
        >
          메롱~ 😝
        </span>
      )}
    </button>,
    document.body,
  );
}
