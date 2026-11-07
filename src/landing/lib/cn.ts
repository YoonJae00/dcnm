/** 조건부 className 결합 (외부 의존성 없이 최소 구현) */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
