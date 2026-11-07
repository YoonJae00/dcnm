import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import { ProjectDetail, ProjectList, ProjectNew, ProjectsDone } from './pages/Projects';
import { NoticeDetail, Notices } from './pages/Notices';
import Calendar from './pages/Calendar';
import Apply from './pages/Apply';
import Search from './pages/Search';
import Admin from './pages/Admin';
import Me, { Login } from './pages/Me';
import { Community, PostDetail, PostNew } from './pages/Community';

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
