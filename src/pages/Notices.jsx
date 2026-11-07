import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useItem, useTable } from '../lib/hooks';
import { fullDate, paragraphs, shortDate } from '../lib/format';

export function Notices() {
  const { rows, error } = useTable('notices');
  const [q, setQ] = useState('');
  const shown = (rows || []).filter((n) => !q.trim() || `${n.title} ${n.body}`.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <>
      <div className="page-head">
        <h1>공지사항</h1>
        <p>모임 일정, 모집, 행사 소식을 올립니다. 고정된 공지가 맨 위에 옵니다.</p>
      </div>
      <div className="filters">
        <div className="filter-line">
          <span className="label">검색</span>
          <input id="notice-search" className="filter-search" type="search" placeholder="제목이나 내용" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      {error && <p className="error-box">공지를 불러오지 못했습니다: {error}</p>}
      {!rows && !error && <p className="state">불러오는 중입니다.</p>}
      <div className="rows">
        {shown.map((n) => (
          <Link key={n.id} to={`/notices/${n.id}`} className="row">
            <span className="date">{shortDate(n.created_at)}</span>
            <span className="row-title">{n.pinned && <span className="pin">고정</span>}{n.title}</span>
          </Link>
        ))}
      </div>
      {rows && shown.length === 0 && <p className="state">{q ? '검색어와 맞는 공지가 없습니다.' : '아직 공지가 없습니다.'}</p>}
    </>
  );
}

export function NoticeDetail() {
  const { id } = useParams();
  const { item: n, error } = useItem('notices', id);
  if (error) return <p className="error-box">공지를 불러오지 못했습니다: {error}</p>;
  if (n === undefined) return <p className="state">불러오는 중입니다.</p>;
  if (!n) return (
    <div className="article">
      <h1>찾는 공지가 없습니다</h1>
      <p className="muted">삭제되었거나 주소가 바뀌었을 수 있습니다.</p>
      <Link to="/notices">공지 목록으로 가기</Link>
    </div>
  );
  return (
    <>
      <Link className="back" to="/notices">공지 목록</Link>
      <article className="article">
        <h1>{n.title}</h1>
        <div className="meta-line">
          <span>{fullDate(n.created_at)}</span>
          {n.pinned && <span className="pin">고정</span>}
        </div>
        <div className="prose">
          {paragraphs(n.body).map((lines, i) => (
            <p key={i}>{lines.map((l, j) => <span key={j}>{l}{j < lines.length - 1 && <br />}</span>)}</p>
          ))}
        </div>
      </article>
    </>
  );
}
