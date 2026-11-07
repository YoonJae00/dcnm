
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { club, stats, tracks } from "@/data/site";
import { useRecruit } from "@/lib/RecruitContext";
import { formatRange, getPhase, type Recruit } from "@/lib/recruit";
import { cn } from "@/lib/cn";
import { useIntroRevealed } from "@intro/introState";

type Kind = "cmd" | "out" | "ok" | "err" | "muted" | "accent" | "dir";
/** text에 "\t"가 있으면 두 칸으로 나눠 그려요. col = 첫 칸 너비(em) */
type Line = { id: number; kind: Kind; text: string; col?: number };
type Item = [Kind, string] | [Kind, string, number];
type Output = Item[] | "clear";

const INTRO = ["whoami", "ls activities/", "dcm recruit --status"];
const CHIPS = ["help", "whoami", "schedule", "tracks", "apply"];
const COMMANDS = ["help", "whoami", "ls", "schedule", "tracks", "recruit", "apply", "date", "clear", "echo"];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function ddayLabel(recruit: Recruit, now: number) {
  const days = Math.floor((Date.parse(recruit.applyEnd) - now) / 86_400_000);
  return days <= 0 ? "D-Day" : `D-${days}`;
}

function run(input: string, recruit: Recruit, onApply: () => void): Output {
  const [cmd, ...args] = input.trim().split(/\s+/);
  const now = Date.now();

  switch (cmd) {
    case "":
      return [];
    case "help":
      return [
        ["muted", "사용할 수 있는 명령어"],
        ["out", "  whoami      DC&M 한 줄 소개"],
        ["out", "  ls          활동 분야 보기"],
        ["out", "  schedule    8기 모집 일정"],
        ["out", "  tracks      모집 트랙"],
        ["out", "  recruit     모집 현황"],
        ["out", "  apply       모집 안내로 이동"],
        ["out", "  clear       화면 지우기"],
      ];
    case "whoami":
      return [
        ["accent", `${club.name} · ${club.tagline}`],
        [
          "muted",
          `since ${club.founded} · ${stats[1].value} members · ${stats[2].value} projects`,
        ],
      ];
    case "ls":
      return [["dir", "study/   project/   hackathon/   seminar/   network/"]];
    case "schedule":
      return recruit.steps.map((s): Item => ["out", `${formatRange(s.start, s.end)}\t${s.title}`, 13]);
    case "tracks":
      return tracks.map((t): Item => ["out", `${t.name}\t${t.stack.join(", ")}`, 7]);
    case "dcm":
    case "dcnm":
    case "recruit": {
      const phase = getPhase(recruit, now);
      if (phase === "open")
        return [
          ["ok", `● ${recruit.generation}기 신입 부원 모집 중`],
          ["muted", `  서류 접수 ${formatRange(recruit.applyStart, recruit.applyEnd)}`],
          ["muted", `  마감까지 ${ddayLabel(recruit, now)}`],
        ];
      if (phase === "upcoming")
        return [["accent", `○ ${recruit.generation}기 모집 예정 · ${formatRange(recruit.applyStart)} 오픈`]];
      return [["muted", `${recruit.generation}기 모집이 마감되었어요. 다음 기수에서 만나요!`]];
    }
    case "apply":
      onApply();
      return [["ok", "✓ 모집 안내로 이동할게요 ↓"]];
    case "date":
      return [
        [
          "out",
          new Intl.DateTimeFormat("ko-KR", {
            timeZone: "Asia/Seoul",
            dateStyle: "full",
            timeStyle: "medium",
          }).format(now),
        ],
      ];
    case "echo":
      return [["out", args.join(" ")]];
    case "clear":
      return "clear";
    case "sudo":
      return [
        ["err", "권한이 없어요 🙅"],
        ["muted", "대신 8기에 지원해서 정식 멤버 권한을 받아보는 건 어때요? → apply"],
      ];
    case "exit":
      return [["muted", "아직 보여드릴 게 많아요. 스크롤을 내려보세요 ↓"]];
    default:
      return [
        ["err", `command not found: ${cmd}`],
        ["muted", "help 를 입력하면 쓸 수 있는 명령어를 볼 수 있어요"],
      ];
  }
}

const kindClass: Record<Kind, string> = {
  cmd: "text-white",
  out: "text-gray-2",
  ok: "text-[#5ee0a0]",
  err: "text-[#ff8a8f]",
  muted: "text-gray-3",
  accent: "text-light font-semibold",
  dir: "text-secondary",
};

function Prompt() {
  return (
    <span className="mr-2 shrink-0 select-none">
      <span className="text-secondary">~/dcnm</span>
      <span className="text-light"> $</span>
    </span>
  );
}

export function Terminal() {
  const recruit = useRecruit();
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);

  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [busy, setBusy] = useState(true);
  const [value, setValue] = useState("");

  const inView = useInView(rootRef, { once: true, amount: 0.35 });
  // 첫 방문 인트로 뒤에서 미리 재생되지 않게, 인트로가 걷힌 뒤에 시작해요.
  const revealed = useIntroRevealed();
  const reduce = useReducedMotion();
  const lenis = useLenis();

  const push = useCallback((items: Item[]) => {
    setLines((prev) => [
      ...prev,
      ...items.map(([kind, text, col]) => ({ id: idRef.current++, kind, text, col })),
    ]);
  }, []);

  const goToRecruit = useCallback(() => {
    window.setTimeout(() => {
      const el = document.getElementById("recruit");
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { duration: 1.6 });
      else el.scrollIntoView({ behavior: "smooth" });
    }, 650);
  }, [lenis]);

  const execute = useCallback(
    (cmd: string) => {
      push([["cmd", cmd]]);
      const result = run(cmd, recruit, goToRecruit);
      if (result === "clear") setLines([]);
      else push(result);
    },
    [push, goToRecruit, recruit],
  );

  /** 사람이 치는 것처럼 한 글자씩 입력한 뒤 실행 */
  const typeAndRun = useCallback(
    async (cmd: string, isCancelled: () => boolean = () => false) => {
      if (reduce) {
        execute(cmd);
        return;
      }
      for (let i = 1; i <= cmd.length; i++) {
        if (isCancelled()) return;
        setTyping(cmd.slice(0, i));
        await sleep(38 + Math.random() * 45);
      }
      await sleep(160);
      if (isCancelled()) return;
      setTyping(null);
      execute(cmd);
    },
    [execute, reduce],
  );

  // 화면에 들어오면 인트로 스크립트 재생
  useEffect(() => {
    if (!inView || !revealed) return;
    let cancelled = false;
    const isCancelled = () => cancelled;
    (async () => {
      await sleep(reduce ? 0 : 500);
      for (const cmd of INTRO) {
        if (cancelled) return;
        await typeAndRun(cmd, isCancelled);
        await sleep(reduce ? 0 : 420);
      }
      if (cancelled) return;
      push([["muted", "명령어를 직접 입력하거나 아래 버튼을 눌러보세요. (help)"]]);
      setBusy(false);
    })();
    return () => {
      cancelled = true;
      setTyping(null);
    };
    // 인트로는 한 번만 재생
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, revealed]);

  // 새 줄이 생기면 터미널 안에서만 맨 아래로 스크롤
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const onChip = async (cmd: string) => {
    if (busy) return;
    setBusy(true);
    setValue("");
    await typeAndRun(cmd);
    historyRef.current.unshift(cmd);
    setBusy(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = value.trim();
      execute(cmd);
      if (cmd) historyRef.current.unshift(cmd);
      historyIndexRef.current = -1;
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndexRef.current + 1, historyRef.current.length - 1);
      if (next >= 0) {
        historyIndexRef.current = next;
        setValue(historyRef.current[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIndexRef.current - 1;
      historyIndexRef.current = Math.max(next, -1);
      setValue(next >= 0 ? historyRef.current[next] : "");
    } else if (e.key === "Tab") {
      const matches = COMMANDS.filter((c) => value && c.startsWith(value));
      if (matches.length === 1) {
        e.preventDefault();
        setValue(matches[0] + " ");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-[20px] bg-ink text-left shadow-l ring-1 ring-ink/10"
    >
      {/* 윈도우 상단 바 */}
      <div className="flex h-11 items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center font-mono text-12 tracking-normal text-gray-4">
          dcnm — zsh
        </span>
        <span className="w-[52px]" />
      </div>

      {/* 본문 */}
      <div
        ref={bodyRef}
        data-lenis-prevent
        onClick={() => !busy && inputRef.current?.focus({ preventScroll: true })}
        className="no-scrollbar h-[280px] cursor-text overflow-y-auto px-4 py-4 font-mono text-[13px] leading-[1.75] tracking-normal sm:h-[340px] sm:px-6 sm:text-14"
      >
        {lines.map((line) =>
          line.kind === "cmd" ? (
            <div key={line.id} className="flex">
              <Prompt />
              <span className="text-white">{line.text}</span>
            </div>
          ) : line.text.includes("\t") ? (
            <div key={line.id} className={cn("flex pl-[1em]", kindClass[line.kind])}>
              <span className="shrink-0" style={{ width: `${line.col ?? 8}em` }}>
                {line.text.split("\t")[0]}
              </span>
              <span>{line.text.split("\t")[1]}</span>
            </div>
          ) : (
            <div key={line.id} className={cn("whitespace-pre-wrap", kindClass[line.kind])}>
              {line.text || " "}
            </div>
          ),
        )}

        <div className="flex items-center">
          <Prompt />
          {busy ? (
            <>
              <span className="text-white">{typing}</span>
              <span className="ml-px inline-block h-[1.15em] w-[0.6em] animate-blink bg-light/90" />
            </>
          ) : (
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="터미널 명령어 입력"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              placeholder="help"
              className="min-w-0 flex-1 bg-transparent text-white caret-light outline-none placeholder:text-gray-5 focus-visible:outline-none"
            />
          )}
        </div>
      </div>

      {/* 명령어 칩 */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto border-t border-white/[0.06] px-4 py-3 sm:px-6">
        <span className="shrink-0 text-12 text-gray-4">눌러보기</span>
        {CHIPS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            disabled={busy}
            onClick={() => onChip(cmd)}
            className="shrink-0 rounded-full bg-white/[0.06] px-3 py-1.5 font-mono text-12 tracking-normal text-gray-2 ring-1 ring-white/10 transition-[background-color,transform,opacity] hover:bg-primary hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
