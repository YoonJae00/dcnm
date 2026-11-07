export type CoverMotif = "grid" | "orbit" | "wave" | "bars" | "dots" | "rings";
export type Cover = { from: string; to: string; motif: CoverMotif };

const MOTIFS: CoverMotif[] = ["dots", "bars", "rings", "orbit", "grid", "wave"];
const COLORS: [string, string][] = [
  ["#6367ff", "#c9beff"],
  ["#8494ff", "#ffdbfd"],
  ["#1b1b33", "#6367ff"],
  ["#c9beff", "#6367ff"],
  ["#34344d", "#8494ff"],
  ["#ffdbfd", "#8494ff"],
];

/** 같은 id는 항상 같은 모티프·색이 나와요. */
export function coverFor(id: string): Cover {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  h >>>= 0;
  const [from, to] = COLORS[(h >>> 3) % COLORS.length];
  return { from, to, motif: MOTIFS[h % MOTIFS.length] };
}
