export declare const INTRO_SEEN_KEY: string;
export declare const DEFAULT_WORDS: string[];
export declare const DEFAULT_COPY: string;
export declare const TIMING: Readonly<Record<
  'chipsStart' | 'chipGap' | 'chipIn' | 'gather' | 'gatherGap' | 'gatherOut' |
  'draw' | 'cursor' | 'type' | 'typeGap' | 'sub' | 'copy' | 'cta' | 'lift',
  number
>>;

export declare function shouldPlayIntro(options?: { force?: boolean }): boolean;
export declare function markIntroSeen(): void;
export declare function resetIntroSeen(): void;

export interface IntroOptions {
  words?: string[];
  copy?: string;
  /** 걷히기 시작할 때 한 번 불림 */
  onLift?: () => void;
  /** 걷히고 나서 한 번 불림 */
  onDone?: () => void;
  container?: HTMLElement;
}
export interface IntroHandle {
  skip: () => void;
  destroy: () => void;
}
export declare function mountIntro(options?: IntroOptions): IntroHandle;
