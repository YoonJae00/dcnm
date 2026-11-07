import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { daysLeft, parseDay, WEEKDAYS } from '../lib/format';
import { deadlineLeft } from '../lib/projects';

// 홈의 체험용 터미널. 명령어를 치거나 아래 버튼을 누르면 사이트의 실제 데이터로 답합니다.
const COMMANDS = ['help', 'whoami', 'schedule', 'projects', 'activities', 'members', 'apply', 'clear'];
const HELP = [
  ['whoami', 'DC&M이 어떤 곳인지'],
  ['schedule', '다가오는 동아리 일정'],
  ['projects', '지금 사람을 모으는 프로젝트'],
  ['activities', '정기 활동'],
  ['members', '함께하는 사람들'],
  ['apply', '지원 페이지로 이동'],
  ['clear', '화면 지우기'],
];

const dateLabel = (s) => { const d = parseDay(s); return `${d.getMonth() + 1}.${String(d.getDate()).padStart(2, '0')}(${WEEKDAYS[d.getDay()]})`; };

export default function Terminal({ settings, members = [], projects = [], events = [] }) {
  const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // 처음 한 줄은 타자 치듯
  useEffect(() => {
    const text = 'DC&M에 오신 걸 환영합니다. help 를 입력하거나 아래 명령어를 눌러 보세요.';
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setLines([{ t: 'out', v: text }]); return undefined; }
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setLines([{ t: 'out', v: text.slice(0, i) }]);
      if (i >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { const b = bodyRef.current; if (b) b.scrollTop = b.scrollHeight; }, [lines]);

  const answer = (cmd) => {
    const today = new Date();
    switch (cmd) {
      case 'help':
        return HELP.map(([c, d]) => ({ t: 'kv', k: c, v: d }));
      case 'whoami': {
        const leads = members.filter((m) => m.role === '회장' || m.role === '부회장').map((m) => `${m.role} ${m.name}`).join(', ');
        return [
          { t: 'out', v: 'DC&M — 한성대학교 동아리' },
          { t: 'kv', k: '부원', v: `${members.length}명${leads ? ` (${leads})` : ''}` },
          { t: 'kv', k: '동아리방', v: settings?.room || '-' },
          { t: 'kv', k: '하는 일', v: '코딩테스트 스터디 · 독서클럽 · 해커톤 · 부원 프로젝트' },
        ];
      }
      case 'schedule': {
        const up = events.filter((e) => e.date && parseDay(e.date) >= new Date(today.getFullYear(), today.getMonth(), today.getDate()))
          .sort((a, b) => a.date.localeCompare(b.date)).slice(0, 4);
        if (!up.length) return [{ t: 'muted', v: '예정된 일정이 없습니다.' }];
        return up.map((e) => ({ t: 'kv', k: dateLabel(e.date), v: `${e.title}${e.start_time ? ` ${e.start_time}` : ''}${e.place ? ` · ${e.place}` : ''}` }));
      }
      case 'projects': {
        const rec = projects.filter((p) => p.status === 'recruiting' && (deadlineLeft(p) ?? 0) >= 0)
          .sort((a, b) => (deadlineLeft(a) ?? 999) - (deadlineLeft(b) ?? 999)).slice(0, 4);
        if (!rec.length) return [{ t: 'muted', v: '지금 모집 중인 프로젝트가 없습니다.' }];
        return [
          ...rec.map((p) => ({ t: 'link', k: `D-${deadlineLeft(p)}`, v: `[${p.kind}] ${p.title}`, to: `/projects/${p.id}` })),
          { t: 'muted', v: '제목을 누르면 상세 페이지로 갑니다.' },
        ];
      }
      case 'activities':
        return [
          { t: 'kv', k: 'study', v: '코딩테스트 스터디 · 매주 일요일 15:00' },
          { t: 'kv', k: 'reading', v: '학술정보관 연계 독서클럽' },
          { t: 'kv', k: 'hackathon', v: '하루 동안 팀으로 서비스 만들기' },
          { t: 'kv', k: 'project', v: '부원이 직접 올리는 공모전·스터디 모집' },
        ];
      case 'members': {
        const count = (r) => members.filter((m) => m.role === r).length;
        return [
          { t: 'kv', k: 'total', v: `${members.length}명` },
          { t: 'kv', k: 'roles', v: `회장 ${count('회장')} · 부회장 ${count('부회장')} · 운영진 ${count('운영진')} · 부원 ${count('부원')}` },
          { t: 'link', k: '→', v: '멤버 페이지 열기', to: '/members' },
        ];
      }
      case 'apply': {
        if (!settings?.recruit_open) {
          setTimeout(() => navigate('/apply?tab=inquiry'), 900);
          return [{ t: 'muted', v: '지금은 모집 기간이 아닙니다. 문의 페이지로 이동합니다…' }];
        }
        const left = daysLeft(settings.recruit_deadline);
        setTimeout(() => navigate('/apply'), 900);
        return [{ t: 'ok', v: `${settings.recruit_title || '신입 부원 모집'} · 마감까지 D-${left ?? '?'}` }, { t: 'muted', v: '지원 페이지로 이동합니다…' }];
      }
      default:
        return [{ t: 'err', v: `command not found: ${cmd}` }, { t: 'muted', v: 'help 를 입력하면 쓸 수 있는 명령어가 나옵니다.' }];
    }
  };

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [cmd, ...h].slice(0, 30));
    setHIdx(-1);
    setInput('');
    if (cmd === 'clear') { setLines([]); return; }
    setLines((ls) => [...ls, { t: 'cmd', v: cmd }, ...answer(cmd)]);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowUp') { e.preventDefault(); const i = Math.min(hIdx + 1, history.length - 1); if (history[i]) { setHIdx(i); setInput(history[i]); } }
    if (e.key === 'ArrowDown') { e.preventDefault(); const i = hIdx - 1; setHIdx(Math.max(i, -1)); setInput(i >= 0 ? history[i] : ''); }
    if (e.key === 'Tab') { const m = COMMANDS.find((c) => input && c.startsWith(input.toLowerCase())); if (m) { e.preventDefault(); setInput(m); } }
  };

  return (
    <section className="term" aria-label="DC&M 터미널">
      <div className="term-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="term-title">dcm — zsh</span>
      </div>
      <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus({ preventScroll: true })} aria-live="polite">
        {lines.map((l, i) => {
          if (l.t === 'cmd') return <p key={i} className="tl"><span className="ps">~/dcm $</span> {l.v}</p>;
          if (l.t === 'kv') return <p key={i} className="tl kv"><span className="k">{l.k}</span><span>{l.v}</span></p>;
          if (l.t === 'link') return <p key={i} className="tl kv"><span className="k">{l.k}</span><button type="button" className="tlink" onClick={() => navigate(l.to)}>{l.v}</button></p>;
          return <p key={i} className={`tl ${l.t}`}>{l.v}</p>;
        })}
        <form className="tl prompt" onSubmit={(e) => { e.preventDefault(); run(input); }}>
          <label htmlFor="term-in" className="ps">~/dcm $</label>
          <input
            id="term-in" ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKey}
            autoComplete="off" autoCapitalize="off" spellCheck="false" aria-label="명령어 입력"
          />
        </form>
      </div>
      <div className="term-chips">
        <span>눌러보기</span>
        {COMMANDS.filter((c) => c !== 'clear').map((c) => (
          <button key={c} type="button" onClick={() => run(c)}>{c}</button>
        ))}
      </div>
    </section>
  );
}
