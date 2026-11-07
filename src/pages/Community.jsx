import { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as api from '../lib/api';
import { useItem, useTable, useUser } from '../lib/hooks';
import { fullDate, paragraphs } from '../lib/format';
import { POST_CATEGORIES } from '../lib/projects';
import { Avatar, ProjectBadges } from '../components/UI';

const loginLink = (path) => `/login?next=${encodeURIComponent(path)}`;

export function timeAgo(v) {
  const diff = (Date.now() - new Date(v).getTime()) / 60000;
  if (diff < 1) return '방금';
  if (diff < 60) return `${Math.floor(diff)}분 전`;
  if (diff < 60 * 24) return `${Math.floor(diff / 60)}시간 전`;
  if (diff < 60 * 24 * 7) return `${Math.floor(diff / 1440)}일 전`;
  return fullDate(v);
}

export function usePostStats() {
  const likes = useTable('post_likes').rows || [];
  const comments = useTable('comments').rows || [];
  return {
    likes: (id) => likes.filter((l) => l.post_id === id).length,
    liked: (id, uid) => !!uid && likes.some((l) => l.post_id === id && l.user_id === uid),
    comments: (id) => comments.filter((c) => c.post_id === id).length,
  };
}

/* ---------------- 목록 ---------------- */
export function Community() {
  const { rows, error } = useTable('posts');
  const user = useUser();
  const stats = usePostStats();
  const [params, setParams] = useSearchParams();
  const cat = params.get('c') || 'all';
  const [sort, setSort] = useState('new');
  const [q, setQ] = useState('');
  let shown = (rows || []).filter((p) => (cat === 'all' || p.category === cat) && (!q.trim() || `${p.title} ${p.body}`.toLowerCase().includes(q.trim().toLowerCase())));
  if (sort === 'hot') shown = [...shown].sort((a, b) => (stats.likes(b.id) + stats.comments(b.id)) - (stats.likes(a.id) + stats.comments(a.id)));
  const hot = [...(rows || [])].sort((a, b) => (stats.likes(b.id) + stats.comments(b.id)) - (stats.likes(a.id) + stats.comments(a.id))).slice(0, 5);

  return (
    <>
      <div className="page-head">
        <h1>커뮤니티</h1>
        <p>프로젝트 후기와 결과물 자랑부터 질문, 잡담, 동아리 건의까지 자유롭게 남기는 곳입니다.</p>
      </div>
      <div className="board">
        <div>
          <div className="filters">
            <div className="filter-line" role="group" aria-label="분류">
              <button type="button" className="chip" aria-pressed={cat === 'all'} onClick={() => setParams({}, { replace: true })}>전체</button>
              {POST_CATEGORIES.map((c) => <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setParams({ c }, { replace: true })}>{c}</button>)}
            </div>
            <div className="filter-line">
              <label htmlFor="post-search" className="skip">글 검색</label>
              <input id="post-search" className="filter-search" type="search" placeholder="제목이나 내용 검색" value={q} onChange={(e) => setQ(e.target.value)} />
              <div className="tabs" role="tablist" style={{ margin: 0 }}>
                <button type="button" role="tab" aria-selected={sort === 'new'} onClick={() => setSort('new')}>최신순</button>
                <button type="button" role="tab" aria-selected={sort === 'hot'} onClick={() => setSort('hot')}>인기순</button>
              </div>
            </div>
          </div>
          {error && <p className="error-box">{error}</p>}
          <div className="rows">
            {shown.map((p) => (
              <Link key={p.id} to={`/community/${p.id}`} className="post-row">
                <span className="badges"><span className="badge neutral">{p.category}</span></span>
                <b>{p.title}</b>
                <span className="excerpt">{p.body}</span>
                <span className="meta"><strong>{p.author_name}</strong><span>{timeAgo(p.created_at)}</span><span>공감 {stats.likes(p.id)}</span><span>댓글 {stats.comments(p.id)}</span></span>
              </Link>
            ))}
          </div>
          {rows && shown.length === 0 && <p className="state">{q ? '검색어와 맞는 글이 없습니다.' : '이 분류에는 아직 글이 없습니다. 첫 글을 남겨 보세요.'}</p>}
        </div>
        <aside className="stack">
          <Link className="btn primary wide" to={user ? '/community/new' : loginLink('/community/new')}>글쓰기</Link>
          <div className="side-box">
            <h2>많이 본 글</h2>
            <ol>{hot.map((p) => <li key={p.id}><Link to={`/community/${p.id}`}>{p.title}</Link></li>)}</ol>
          </div>
          <div className="side-box">
            <h2>이용 안내</h2>
            <p className="small muted">후기를 쓸 때 끝난 프로젝트를 연결하면 완료 프로젝트 화면에도 함께 보입니다. 다른 사람의 개인정보는 올리지 마세요.</p>
          </div>
        </aside>
      </div>
    </>
  );
}

/* ---------------- 글 상세 ---------------- */
export function PostDetail() {
  const { id } = useParams();
  const { item: post, error } = useItem('posts', id);
  const user = useUser();
  const stats = usePostStats();
  const { rows: comments } = useTable('comments');
  const projects = useTable('projects').rows || [];
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [err, setErr] = useState('');
  const [confirm, setConfirm] = useState(false);
  if (error) return <p className="error-box">{error}</p>;
  if (post === undefined) return <p className="state">불러오는 중입니다.</p>;
  if (!post) return <div className="article"><h1>찾는 글이 없습니다</h1><Link to="/community">커뮤니티로 가기</Link></div>;
  const list = (comments || []).filter((c) => c.post_id === post.id);
  const linked = projects.find((p) => p.id === post.project_id);
  const liked = stats.liked(post.id, user?.id);
  const canEdit = user && (user.id === post.author_id || user.isAdmin);

  return (
    <>
      <Link className="back" to="/community">← 커뮤니티</Link>
      <article className="article">
        <span className="badges"><span className="badge neutral">{post.category}</span></span>
        <h1>{post.title}</h1>
        <div className="meta-line"><span className="author"><Avatar name={post.author_name} />{post.author_name}</span><span>{fullDate(post.created_at)}</span></div>
        <div className="prose" style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
          {paragraphs(post.body).map((lines, i) => <p key={i}>{lines.map((l, j) => <span key={j}>{l}{j < lines.length - 1 && <br />}</span>)}</p>)}
        </div>
        {linked && (
          <Link className="linked" to={`/projects/${linked.id}`}>
            <span><span className="muted">연결된 프로젝트</span><br /><b>{linked.title}</b></span>
            <ProjectBadges p={linked} />
          </Link>
        )}
        <div className="actions">
          <button type="button" className="btn like-btn" aria-pressed={liked} onClick={() => (user ? api.toggleLike(post.id, user.id) : navigate(loginLink(`/community/${post.id}`)))}>
            공감 {stats.likes(post.id)}
          </button>
          {canEdit && (confirm
            ? <><button type="button" className="btn danger solid" onClick={async () => { await api.remove('posts', post.id); navigate('/community'); }}>삭제 확인</button><button type="button" className="btn" onClick={() => setConfirm(false)}>취소</button></>
            : <button type="button" className="btn ghost" onClick={() => setConfirm(true)}>삭제</button>)}
        </div>
        <section className="thread" aria-labelledby="cm-h" style={{ marginTop: 12 }}>
          <h2 id="cm-h">댓글 <span className="muted" style={{ fontWeight: 500 }}>{list.length}</span></h2>
          {list.map((c) => (
            <div key={c.id} className="comment">
              <Avatar name={c.user_name} />
              <span className="who">{c.user_name}{c.user_id === post.author_id && <span className="badge neutral">작성자</span>}<span>{timeAgo(c.created_at)}</span></span>
              <p>{c.body}</p>
            </div>
          ))}
          {user ? (
            <form className="comment-form" onSubmit={async (e) => {
              e.preventDefault();
              if (text.trim().length < 2) { setErr('두 글자 이상 적어 주세요.'); return; }
              if (text.trim().length > 500) { setErr('500자 이하로 줄여 주세요.'); return; }
              setErr('');
              await api.save('comments', { post_id: post.id, user_id: user.id, user_name: user.name, body: text.trim() });
              setText('');
            }}>
              <label htmlFor="comment-input" className="skip">댓글</label>
              <textarea id="comment-input" placeholder="댓글을 남겨 보세요" value={text} onChange={(e) => setText(e.target.value)} />
              <button type="submit" className="btn dark">등록</button>
            </form>
          ) : <p className="small"><Link to={loginLink(`/community/${post.id}`)}>로그인</Link>하면 댓글을 남길 수 있습니다.</p>}
          {err && <p className="small" style={{ color: 'var(--hot)' }}>{err}</p>}
        </section>
      </article>
    </>
  );
}

/* ---------------- 글쓰기 ---------------- */
export function PostNew() {
  const user = useUser();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const projects = useTable('projects').rows || [];
  const [v, setV] = useState({ category: params.get('project') ? '프로젝트 후기' : '자유', title: '', body: '', project_id: params.get('project') || '' });
  const [tried, setTried] = useState(false);
  const [busy, setBusy] = useState(false);
  if (user === undefined) return <p className="state">확인하는 중입니다.</p>;
  if (!user) return (
    <div className="login"><h1 style={{ fontSize: 'var(--t-xl)' }}>글쓰기</h1><p className="muted">커뮤니티 글은 로그인한 부원만 쓸 수 있습니다.</p><Link className="btn primary" to={loginLink('/community/new')}>로그인하기</Link></div>
  );
  if (!user.approved) return (
    <div className="login"><h1 style={{ fontSize: 'var(--t-xl)' }}>운영진 승인을 기다리고 있습니다</h1><p className="muted">처음 로그인한 계정은 운영진이 동아리 부원인지 확인한 뒤에 글을 쓸 수 있습니다. 승인이 늦어지면 운영진에게 이야기해 주세요.</p><Link className="btn" to="/">메인으로</Link></div>
  );
  const e = {};
  if (v.title.trim().length < 2) e.title = '제목을 2자 이상 적어 주세요.';
  if (v.body.trim().length < 10) e.body = '내용을 10자 이상 적어 주세요.';
  if (v.body.length > 5000) e.body = '5000자 이하로 줄여 주세요.';
  const show = (k) => tried && e[k];
  const mine = projects.filter((p) => (p.member_ids || []).includes(user.id));
  return (
    <>
      <div className="page-head"><h1>글쓰기</h1><p>후기, 결과물, 질문, 잡담 무엇이든 괜찮습니다.</p></div>
      <form className="card-form boxed" style={{ maxWidth: 760 }} noValidate onSubmit={async (ev) => {
        ev.preventDefault(); setTried(true);
        if (Object.keys(e).length) return;
        setBusy(true);
        const saved = await api.save('posts', { category: v.category, title: v.title.trim(), body: v.body.trim(), project_id: v.project_id || null, author_id: user.id, author_name: user.name });
        navigate(`/community/${saved.id}`);
      }}>
        <div className="field">
          <span className="label">분류</span>
          <div className="chip-group" role="group" aria-label="분류">
            {POST_CATEGORIES.map((c) => <button key={c} type="button" className="chip" aria-pressed={v.category === c} onClick={() => setV({ ...v, category: c })}>{c}</button>)}
          </div>
        </div>
        <div className={`field${show('title') ? ' invalid' : ''}`}>
          <label htmlFor="pn-title">제목</label>
          <input id="pn-title" value={v.title} onChange={(x) => setV({ ...v, title: x.target.value })} />
          {show('title') && <span className="err">{e.title}</span>}
        </div>
        <div className={`field${show('body') ? ' invalid' : ''}`}>
          <label htmlFor="pn-body">내용</label>
          <textarea id="pn-body" style={{ minHeight: 240 }} value={v.body} onChange={(x) => setV({ ...v, body: x.target.value })} />
          {show('body') && <span className="err">{e.body}</span>}
        </div>
        <div className="field">
          <label htmlFor="pn-project">연결할 프로젝트 <span className="opt">(선택)</span></label>
          <select id="pn-project" value={v.project_id} onChange={(x) => setV({ ...v, project_id: x.target.value })}>
            <option value="">연결 안 함</option>
            {mine.map((p) => <option key={p.id} value={p.id}>{p.title} ({p.status === 'done' ? '완료' : '진행 중'})</option>)}
          </select>
          <span className="hint">내가 참여한 프로젝트만 보입니다. 연결하면 프로젝트 화면에 후기로 나옵니다.</span>
        </div>
        <div className="actions"><button type="submit" className="btn primary" disabled={busy}>올리기</button><Link className="btn" to="/community">취소</Link></div>
      </form>
    </>
  );
}
