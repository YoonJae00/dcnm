import { useEffect, useState } from 'react';
import * as api from '../lib/api';
import { Link } from 'react-router-dom';
import { useTable, useUser } from '../lib/hooks';
import { fullDate, shortDate } from '../lib/format';
import RecruitSettings from './RecruitSettings';

/* 표마다 편집할 칸 정의 */
const SCHEMAS = {
  notices: {
    label: '공지',
    fields: [
      { k: 'title', label: '제목', type: 'text', required: true },
      { k: 'body', label: '내용', type: 'textarea' },
      { k: 'pinned', label: '맨 위에 고정', type: 'checkbox' },
    ],
    title: (r) => r.title,
    sub: (r) => `${shortDate(r.created_at)}${r.pinned ? ' · 고정' : ''}`,
  },
  events: {
    label: '일정',
    fields: [
      { k: 'title', label: '일정 이름', type: 'text', required: true },
      { k: 'date', label: '날짜', type: 'date', required: true },
      { k: 'start_time', label: '시작', type: 'time', half: true },
      { k: 'end_time', label: '끝', type: 'time', half: true },
      { k: 'place', label: '장소', type: 'text' },
      { k: 'kind', label: '종류', type: 'select', options: ['정기', '스터디', '행사', '모집'] },
      { k: 'note', label: '메모', type: 'text' },
    ],
    title: (r) => r.title,
    sub: (r) => `${fullDate(r.date)} ${r.start_time || ''}`,
  },
  members: {
    label: '멤버',
    fields: [
      { k: 'name', label: '이름', type: 'text', required: true },
      { k: 'generation', label: '기수 (모르면 비워 두기)', type: 'number', half: true },
      { k: 'role', label: '역할', type: 'select', options: ['회장', '부회장', '운영진', '부원'], half: true },
      { k: 'part', label: '분야', type: 'text' },
      { k: 'intro', label: '한 줄 소개', type: 'textarea', rows: 3 },
      { k: 'tags', label: '기술·관심사 (쉼표로 구분)', type: 'list' },
      { k: 'github', label: 'GitHub 주소', type: 'url' },
      { k: 'sort', label: '같은 기수 안 순서', type: 'number' },
    ],
    title: (r) => r.name,
    sub: (r) => `${r.generation ? `${r.generation}기` : '기수 미정'} · ${r.role}`,
  },
  projects: {
    label: '프로젝트',
    fields: [
      { k: 'title', label: '프로젝트 이름', type: 'text', required: true },
      { k: 'status', label: '상태', type: 'select', options: ['ongoing', 'recruiting', 'done'], labels: { ongoing: '진행 중', recruiting: '모집 중', done: '완료' }, half: true, required: true },
      { k: 'origin', label: '개설', type: 'select', options: ['club', 'personal'], labels: { club: '동아리 개설', personal: '개인 신청' }, half: true, required: true },
      { k: 'kind', label: '유형', type: 'select', options: ['공모전', '스터디', '프로젝트', '해커톤', '독서', '기타'], half: true, required: true },
      { k: 'capacity', label: '정원', type: 'number', half: true },
      { k: 'summary', label: '한 줄 요약', type: 'text' },
      { k: 'body', label: '자세한 내용', type: 'textarea' },
      { k: 'period', label: '기간 (화면 표시)', type: 'text' },
      { k: 'start_date', label: '시작일', type: 'date', half: true },
      { k: 'end_date', label: '종료일', type: 'date', half: true },
      { k: 'deadline', label: '모집 마감일', type: 'date', half: true },
      { k: 'meet_time', label: '정기 모임 시각', type: 'time', half: true },
      { k: 'place', label: '장소', type: 'text' },
      { k: 'condition', label: '참여 조건', type: 'text' },
      { k: 'tags', label: '사용 기술 (쉼표로 구분)', type: 'list' },
      { k: 'link', label: '결과물 링크', type: 'url' },
    ],
    title: (r) => r.title,
    sub: (r) => `${{ ongoing: '진행 중', recruiting: '모집 중', done: '완료' }[r.status] || ''} · ${r.kind} · ${r.author_name || ''}`,
  },
  posts: {
    label: '게시글',
    fields: [
      { k: 'title', label: '제목', type: 'text', required: true },
      { k: 'category', label: '분류', type: 'select', options: ['프로젝트 후기', '결과물', '자유', '질문', '건의'], required: true },
      { k: 'body', label: '내용', type: 'textarea' },
    ],
    title: (r) => r.title,
    sub: (r) => `${r.category} · ${r.author_name || ''} · ${shortDate(r.created_at)}`,
  },
};

const blank = (schema) => Object.fromEntries(schema.fields.map((f) => [f.k, f.type === 'checkbox' ? false : f.type === 'list' ? [] : '']));

function Toast({ text, onDone }) {
  useEffect(() => { if (text) { const t = setTimeout(onDone, 2200); return () => clearTimeout(t); } }, [text, onDone]);
  return text ? <div className="toast" role="status">{text}</div> : null;
}

function Editor({ table, notify }) {
  const schema = SCHEMAS[table];
  const { rows, error } = useTable(table);
  const [draft, setDraft] = useState(blank(schema));
  const [confirmId, setConfirmId] = useState(null);
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => { setDraft(blank(schema)); setConfirmId(null); setFormError(''); }, [table]);

  const set = (f) => (e) => {
    let v = f.type === 'checkbox' ? e.target.checked : e.target.value;
    if (f.type === 'list') v = v.split(',').map((s) => s.trimStart());
    setDraft((d) => ({ ...d, [f.k]: v }));
  };

  async function onSave(e) {
    e.preventDefault();
    const missing = schema.fields.filter((f) => f.required && !String(draft[f.k] ?? '').trim());
    if (missing.length) { setFormError(`${missing.map((f) => f.label).join(', ')}을(를) 입력하세요.`); return; }
    const row = { ...draft };
    for (const f of schema.fields) {
      if (f.type === 'number') row[f.k] = row[f.k] === '' || row[f.k] === null ? null : Number(row[f.k]);
      if (f.type === 'list') row[f.k] = (row[f.k] || []).map((s) => s.trim()).filter(Boolean);
    }
    setBusy(true);
    try {
      await api.save(table, row);
      notify(draft.id ? '저장했습니다' : `${schema.label}을(를) 추가했습니다`);
      setDraft(blank(schema));
      setFormError('');
    } catch (err) {
      setFormError(`저장하지 못했습니다: ${err.message}`);
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id) {
    try {
      await api.remove(table, id);
      notify('삭제했습니다');
      if (draft.id === id) setDraft(blank(schema));
    } catch (err) {
      setFormError(`삭제하지 못했습니다: ${err.message}`);
    }
    setConfirmId(null);
  }

  return (
    <div className="editor">
      <div>
        <div className="section-head" style={{ marginBottom: 12 }}>
          <h2 style={{ fontSize: 'var(--t-md)' }}>{schema.label} {rows?.length ?? ''}개</h2>
          <button type="button" className="btn small" onClick={() => setDraft(blank(schema))}>새 {schema.label} 추가</button>
        </div>
        {error && <p className="error-box">{error}</p>}
        <div className="edit-list">
          {(rows || []).map((r) => (
            <div key={r.id} className={`edit-item${draft.id === r.id ? ' current' : ''}`}>
              <div className="txt"><b>{schema.title(r)}</b><span>{schema.sub(r)}</span></div>
              {confirmId === r.id ? (
                <>
                  <button type="button" className="btn small danger solid" onClick={() => onDelete(r.id)}>삭제 확인</button>
                  <button type="button" className="btn small" onClick={() => setConfirmId(null)}>취소</button>
                </>
              ) : (
                <>
                  <button type="button" className="btn small" onClick={() => { setDraft({ ...blank(schema), ...r }); setFormError(''); }}>수정</button>
                  <button type="button" className="btn small danger" onClick={() => setConfirmId(r.id)}>삭제</button>
                </>
              )}
            </div>
          ))}
          {rows?.length === 0 && <p className="state">아직 없습니다. 오른쪽에서 첫 {schema.label}을(를) 추가하세요.</p>}
        </div>
      </div>

      <form className="edit-form" onSubmit={onSave} noValidate>
        <h3>{draft.id ? `${schema.label} 수정` : `새 ${schema.label}`}</h3>
        <div className="two">
          {schema.fields.map((f) => {
            const id = `ed-${table}-${f.k}`;
            const style = f.half ? undefined : { gridColumn: '1 / -1' };
            if (f.type === 'checkbox') {
              return (
                <label key={f.k} className="check-line" htmlFor={id} style={style}>
                  <input id={id} type="checkbox" checked={!!draft[f.k]} onChange={set(f)} /> {f.label}
                </label>
              );
            }
            return (
              <div key={f.k} className="field" style={style}>
                <label htmlFor={id}>{f.label}{!f.required && <span className="opt"> (선택)</span>}</label>
                {f.type === 'textarea' ? (
                  <textarea id={id} rows={f.rows} style={f.rows ? { minHeight: 'auto' } : undefined} value={draft[f.k] ?? ''} onChange={set(f)} />
                ) : f.type === 'select' ? (
                  <select id={id} value={draft[f.k] ?? ''} onChange={set(f)}>
                    <option value="">고르세요</option>
                    {f.options.map((o) => <option key={o} value={o}>{f.labels?.[o] || o}</option>)}
                  </select>
                ) : (
                  <input
                    id={id}
                    type={f.type === 'list' ? 'text' : f.type}
                    value={f.type === 'list' ? (draft[f.k] || []).join(', ') : draft[f.k] ?? ''}
                    onChange={set(f)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {formError && <p className="error-box" role="alert">{formError}</p>}
        <div className="actions">
          <button type="submit" className="btn primary" disabled={busy}>{draft.id ? '저장' : '추가'}</button>
          {draft.id && <button type="button" className="btn" onClick={() => setDraft(blank(schema))}>새로 쓰기</button>}
        </div>
      </form>
    </div>
  );
}

function Submissions({ notify }) {
  const { rows, error } = useTable('submissions');
  const [kind, setKind] = useState('apply');
  const [confirm, setConfirm] = useState(null);
  const shown = (rows || []).filter((r) => r.kind === kind);

  async function del(id) {
    await (id === 'all' ? api.removeAll('submissions') : api.remove('submissions', id));
    notify(id === 'all' ? '지원·문의를 모두 파기했습니다' : '삭제했습니다');
    setConfirm(null);
  }

  return (
    <div className="section">
      <p className="notice-box">지원서에는 개인정보가 들어 있습니다. 모집이 끝나면 30일 안에 모두 파기하세요. 지원 폼에 그렇게 안내되어 있습니다.</p>
      <div className="admin-bar">
        <div className="tabs" role="tablist" style={{ marginBottom: 0 }}>
          <button type="button" role="tab" aria-selected={kind === 'apply'} onClick={() => setKind('apply')}>지원서 {(rows || []).filter((r) => r.kind === 'apply').length}</button>
          <button type="button" role="tab" aria-selected={kind === 'inquiry'} onClick={() => setKind('inquiry')}>문의 {(rows || []).filter((r) => r.kind === 'inquiry').length}</button>
        </div>
        {confirm === 'all' ? (
          <span className="actions">
            <button type="button" className="btn small danger solid" onClick={() => del('all')}>전부 파기 확인</button>
            <button type="button" className="btn small" onClick={() => setConfirm(null)}>취소</button>
          </span>
        ) : (
          <button type="button" className="btn small danger" disabled={!rows?.length} onClick={() => setConfirm('all')}>지원·문의 전부 파기</button>
        )}
      </div>
      {error && <p className="error-box">{error}</p>}
      {rows && shown.length === 0 && <p className="state">아직 들어온 {kind === 'apply' ? '지원서' : '문의'}가 없습니다. 지원하기 페이지에서 시험 삼아 하나 제출해 보세요.</p>}
      {shown.length > 0 && (
        <div className="table-scroll">
          <table className="subs">
            <thead>
              <tr>
                <th>접수</th><th>이름</th>
                {kind === 'apply' && <><th>학번</th><th>분야</th></>}
                <th>연락처</th><th>내용</th><th><span className="skip">삭제</span></th>
              </tr>
            </thead>
            <tbody>
              {shown.map((r) => (
                <tr key={r.id}>
                  <td>{shortDate(r.created_at)}</td>
                  <td>{r.name}</td>
                  {kind === 'apply' && <><td>{r.student_id}</td><td>{r.part}</td></>}
                  <td>{r.email}{r.phone ? <><br />{r.phone}</> : null}</td>
                  <td className="msg">{r.message}</td>
                  <td>
                    {confirm === r.id ? (
                      <button type="button" className="btn small danger solid" onClick={() => del(r.id)}>삭제 확인</button>
                    ) : (
                      <button type="button" className="btn small danger" onClick={() => setConfirm(r.id)}>삭제</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const TABS = [
  ['submissions', '지원·문의'],
  ['notices', '공지'],
  ['events', '일정'],
  ['members', '멤버'],
  ['projects', '프로젝트'],
  ['posts', '커뮤니티'],
  ['settings', '사이트 설정'],
];

export default function Admin() {
  const admin = useUser();
  const [tab, setTab] = useState('submissions');
  const [toast, setToast] = useState('');

  if (admin === undefined) return <p className="state">확인하는 중입니다.</p>;
  if (!admin) return (
    <div className="login">
      <h1 style={{ fontSize: 'var(--t-xl)' }}>운영진 화면</h1>
      <p className="muted">운영진(회장·부회장·운영진)으로 로그인해야 들어올 수 있습니다.</p>
      <Link className="btn primary" to="/login?next=%2Fadmin">로그인하기</Link>
    </div>
  );
  if (!admin.isAdmin) {
    return (
      <div className="login">
        <h1>운영진 권한이 없습니다</h1>
        <p className="muted">{admin.name}님은 운영진이 아닙니다. 운영진 권한이 필요하면 회장에게 요청하세요.</p>
        <div className="actions"><button type="button" className="btn" onClick={api.signOut}>로그아웃</button></div>
      </div>
    );
  }

  return (
    <>
      <div className="admin-bar">
        <div>
          <h1 style={{ fontSize: 'var(--t-xl)' }}>관리자 화면</h1>
          <p className="muted small">{admin.name}님으로 로그인했습니다. 여기서 바꾼 내용은 사이트에 바로 반영됩니다.</p>
        </div>
        <button type="button" className="btn small" onClick={api.signOut}>로그아웃</button>
      </div>
      <div className="admin-tabs" role="tablist">
        {TABS.map(([k, label]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>
      {tab === 'submissions' && <Submissions notify={setToast} />}
      {tab === 'settings' && <RecruitSettings notify={setToast} />}
      {SCHEMAS[tab] && <Editor key={tab} table={tab} notify={setToast} />}
      <Toast text={toast} onDone={() => setToast('')} />
    </>
  );
}
