import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTable } from '../lib/hooks';
import { shortDate } from '../lib/format';

const has = (q, ...vals) => vals.flat().filter(Boolean).join(' ').toLowerCase().includes(q);

export default function Search() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const q = (params.get('q') || '').trim();
  const [input, setInput] = useState(q);
  useEffect(() => setInput(q), [q]);
  const lq = q.toLowerCase();

  const members = useTable('members').rows || [];
  const projects = useTable('projects').rows || [];
  const notices = useTable('notices').rows || [];
  const events = useTable('events').rows || [];

  const m = q ? members.filter((x) => has(lq, x.name, x.part, x.intro, x.role, x.tags)) : [];
  const p = q ? projects.filter((x) => has(lq, x.title, x.summary, x.body, x.kind, x.tags, x.author_name)) : [];
  const posts = useTable('posts').rows || [];
  const c = q ? posts.filter((x) => has(lq, x.title, x.body, x.category, x.author_name)) : [];
  const n = q ? notices.filter((x) => has(lq, x.title, x.body)) : [];
  const e = q ? events.filter((x) => has(lq, x.title, x.place, x.note, x.kind)) : [];
  const total = m.length + p.length + n.length + e.length + c.length;

  return (
    <>
      <div className="page-head">
        <h1>검색</h1>
        <form role="search" onSubmit={(ev) => { ev.preventDefault(); navigate(`/search?q=${encodeURIComponent(input.trim())}`); }} className="filter-line">
          <label htmlFor="search-page" className="skip">검색어</label>
          <input id="search-page" type="search" className="filter-search" placeholder="멤버, 프로젝트, 커뮤니티, 공지, 일정" value={input} onChange={(ev) => setInput(ev.target.value)} />
          <button type="submit" className="btn">검색</button>
        </form>
        {q && <p aria-live="polite">‘{q}’ 검색 결과 {total}건</p>}
      </div>

      {q && total === 0 && <p className="state">맞는 결과가 없습니다. 다른 단어로 찾아보거나 <Link to="/apply?tab=inquiry">문의</Link>로 물어보세요.</p>}

      {p.length > 0 && (
        <section className="section">
          <h2 className="small muted">프로젝트 {p.length}</h2>
          <div className="rows">{p.map((x) => (
            <Link key={x.id} to={`/projects/${x.id}`} className="row"><span className="kind">{x.kind}</span><span className="row-title">{x.title}</span><span className="row-sub">{x.summary}</span></Link>
          ))}</div>
        </section>
      )}
      {c.length > 0 && (
        <section className="section">
          <h2 className="small muted">커뮤니티 {c.length}</h2>
          <div className="rows">{c.map((x) => (
            <Link key={x.id} to={`/community/${x.id}`} className="row"><span className="date">{shortDate(x.created_at)}</span><span className="row-title">{x.title}</span><span className="meta">{x.category}</span></Link>
          ))}</div>
        </section>
      )}
      {n.length > 0 && (
        <section className="section">
          <h2 className="small muted">공지사항 {n.length}</h2>
          <div className="rows">{n.map((x) => (
            <Link key={x.id} to={`/notices/${x.id}`} className="row"><span className="date">{shortDate(x.created_at)}</span><span className="row-title">{x.title}</span></Link>
          ))}</div>
        </section>
      )}
      {e.length > 0 && (
        <section className="section">
          <h2 className="small muted">일정 {e.length}</h2>
          <div className="rows">{e.map((x) => (
            <Link key={x.id} to={`/calendar?d=${x.date}`} className="row"><span className="date">{shortDate(x.date)}</span><span className="row-title">{x.title}</span><span className="meta">{x.place}</span></Link>
          ))}</div>
        </section>
      )}
      {m.length > 0 && (
        <section className="section">
          <h2 className="small muted">멤버 {m.length}</h2>
          <div className="rows">{m.map((x) => (
            <Link key={x.id} to="/members" className="row"><span className="date">{x.generation ? `${x.generation}기` : '기수 미정'}</span><span className="row-title">{x.name} <span className="muted small">{x.role}</span></span><span className="meta">{x.part}</span></Link>
          ))}</div>
        </section>
      )}
    </>
  );
}
