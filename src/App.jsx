import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import { ProjectDetail, ProjectList, ProjectNew, ProjectsDone } from './pages/Projects';
import { NoticeDetail, Notices } from './pages/Notices';
import Calendar from './pages/Calendar';
import Apply from './pages/Apply';
import Privacy from './pages/Privacy';
import Search from './pages/Search';
import Admin from './pages/Admin';
import Me, { Login } from './pages/Me';
import { Community, PostDetail, PostNew } from './pages/Community';
import { Intro } from './intro/Intro';
import { setIntroPhase } from './intro/introState';
import { useSettings, useUser } from './lib/hooks';
import { landingState } from './lib/landing';

// 모집 랜딩(motion·lenis·Tailwind CSS 포함)은 따로 불러와서, 꺼져 있을 때는 메인 번들에 실리지 않습니다.
const LandingApp = lazy(() => import('./landing/LandingApp'));

function Landing({ settings }) {
  return (
    <Suspense fallback={null}>
      <LandingApp settings={settings} />
    </Suspense>
  );
}

// '/': 랜딩이 켜져 있고 모집 기간이면 로그인하지 않은 방문자에게 랜딩, 그 외에는 평소 메인.
// 설정·로그인 확인이 끝나기 전에는 아무것도 그리지 않아서 메인이 잠깐 보였다 바뀌는 깜빡임이 없습니다.
// 설정을 불러오지 못하면(null) 메인을 보여서 빈 화면에 갇히지 않게 합니다.
function HomeRoute() {
  const settings = useSettings();
  const user = useUser();
  const ready = settings !== undefined && user !== undefined;
  const showLanding = ready && !user && landingState(settings).live;
  return (
    <>
      <Intro />
      {ready && (showLanding ? <Landing settings={settings} /> : <Layout><Home /></Layout>)}
    </>
  );
}

// '/recruit': 랜딩이 켜져 있으면 누구나, 꺼져 있으면 운영진만 미리 보기. 그 외에는 '/'로 보냅니다.
function RecruitRoute() {
  const settings = useSettings();
  const user = useUser();
  // 인트로는 '/'에서만 재생해요. 랜딩의 첫 화면 연출이 기다리지 않게 걷힌 상태로 둡니다.
  useEffect(() => { setIntroPhase('revealed'); }, []);
  if (settings === undefined || user === undefined) return null;
  if (settings && (landingState(settings).live || user?.isAdmin)) return <Landing settings={settings} />;
  return <Navigate to="/" replace />;
}

function NotFound() {
  return (
    <div className="article">
      <h1>없는 페이지입니다</h1>
      <p className="muted">주소가 바뀌었거나 삭제된 페이지입니다.</p>
      <Link to="/">메인으로 가기</Link>
    </div>
  );
}

// HashRouter: GitHub Pages·Vercel 어디에 올려도 새로고침 시 404가 나지 않습니다.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/recruit" element={<RecruitRoute />} />
        <Route path="*" element={<Layout><OtherRoutes /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/members" element={<Members />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/done" element={<ProjectsDone />} />
      <Route path="/projects/new" element={<ProjectNew />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/notices/:id" element={<NoticeDetail />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/new" element={<PostNew />} />
      <Route path="/community/:id" element={<PostDetail />} />
      <Route path="/me" element={<Me />} />
      <Route path="/login" element={<Login />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/search" element={<Search />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
