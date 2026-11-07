import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { mode, resetDemo } from '../lib/api';
import { useSettings, useUser } from '../lib/hooks';
import { Avatar } from './UI';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useReveal } from '../lib/motion';
import { SetPassword } from './Password';

const PROJECT_MENU = [
  ['/projects', '프로젝트 목록', '진행 중·모집 중인 프로젝트'],
  ['/projects/done', '완료 프로젝트', '끝난 프로젝트와 결과물'],
  ['/projects/new', '프로젝트 신청', '같이 할 사람 모으기'],
];

function ProjectDrop() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const active = pathname.startsWith('/projects');
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div className={`nav-drop${active ? ' active' : ''}`} ref={ref}>
      <button type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((v) => !v)}>
        프로젝트
        <svg className="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {open && (
        <div className="drop-menu">
          {PROJECT_MENU.map(([to, t, d]) => (
            <NavLink key={to} to={to} end><b>{t}</b><span>{d}</span></NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const settings = useSettings();
  const user = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  const mainRef = useRef(null);
  useReveal(mainRef, location.pathname);

  // 이메일 링크로 처음 들어와 아직 비밀번호가 없으면, 어느 주소로 왔든 비밀번호 설정을 먼저 보여 줍니다.
  // 로그인 화면은 막지 않습니다(모집 랜딩은 Layout 밖이라 원래 막히지 않습니다).
  const gate = user?.needsPassword && location.pathname !== '/login';

  return (
    <>
      <a className="skip" href="#content">본문으로 건너뛰기</a>
      <div className="ambient" aria-hidden="true"><i /><i /><i /></div>
      {settings?.links?.length > 0 && (
        <div className="topbar">
          <div className="wrap topbar-row">
            <nav aria-label="바로가기">
              {settings.links.map((l) => (
                <a key={l.url + l.label} href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="skip">(새 창)</span>
                </a>
              ))}
            </nav>
            {settings.room && <span className="spot">동아리방 {settings.room}</span>}
          </div>
        </div>
      )}
      <header className={`site-header${open ? ' open' : ''}`}>
        <div className="wrap header-row">
          <Link
            to="/" className="logo" aria-label="DC&M 홈, 맨 위로"
            onClick={() => { if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          ><Logo /></Link>
          <nav className="nav" aria-label="주요 메뉴">
            <NavLink to="/members">멤버</NavLink>
            <ProjectDrop />
            <NavLink to="/notices">공지사항</NavLink>
            <NavLink to="/calendar">일정</NavLink>
            <NavLink to="/community">커뮤니티</NavLink>
          </nav>
          <form className="search-mini" role="search" onSubmit={(e) => { e.preventDefault(); if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`); }}>
            <label htmlFor="site-search" className="skip">사이트 검색</label>
            <input id="site-search" type="search" placeholder="검색" value={q} onChange={(e) => setQ(e.target.value)} />
          </form>
          <div className="header-tools">
            <ThemeToggle />
            {user ? (
              <NavLink to="/me" className="me-link"><Avatar name={user.name} /><span className="me-name">내 활동</span></NavLink>
            ) : (
              <Link to={`/login?next=${encodeURIComponent(location.pathname + location.search)}`} className="btn ghost small">로그인</Link>
            )}
            {!user && <Link to="/apply" className="btn small recruit-btn">{settings?.recruit_open ? '지원하기' : '문의하기'}</Link>}
            <button type="button" className="btn small menu-btn" aria-expanded={open} aria-label="메뉴 열기" onClick={() => setOpen((v) => !v)}>메뉴</button>
          </div>
        </div>
      </header>

      <main id="content" className={`wrap page-in${location.pathname === '/' && !gate ? ' home' : ''}`} key={location.pathname} ref={mainRef}>{gate ? <SetPassword user={user} /> : children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-row">
            <span>DC&amp;M · 한성대학교 동아리{settings?.room ? ` · 동아리방 ${settings.room}` : ''}</span>
            <span>
              <Link to="/apply?tab=inquiry">문의하기</Link>{'  '}·{'  '}<Link to="/admin">운영진 화면</Link>
            </span>
          </div>
          {mode === 'local' && (
            <p className="demo-note">
              지금은 예시 데이터로 동작합니다. 바꾼 내용은 이 브라우저에만 저장됩니다.{' '}
              <button type="button" className="btn ghost small" onClick={resetDemo}>예시 데이터로 되돌리기</button>
            </p>
          )}
        </div>
      </footer>
    </>
  );
}
