import { useEffect, useState } from 'react';
import * as api from '../lib/api';
import { Link } from 'react-router-dom';
import { useSettings, useTable, useUser } from '../lib/hooks';
import { fullDate, shortDate } from '../lib/format';
import RecruitSettings from './RecruitSettings';
import { PRIVACY } from '../data/privacy';
import { isRetentionOver } from '../lib/privacy';

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

/* 멤버 로그인 초대 (Supabase 모드에서만). 이메일은 공개 표 members가 아니라 member_invites에 저장합니다. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INVITE_STATUS = {
  none: ['neutral', '초대 없음'],
  invited: ['open', '초대됨 · 첫 로그인 전'],
  claimed: ['ok', '로그인 완료'],
};
const inviteStatus = (inv) => (!inv ? 'none' : inv.claimed_by || inv.claimed_at ? 'claimed' : 'invited');

function useInvites(enabled) {
  const [invites, setInvites] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!enabled) return undefined;
    const load = () => api.listInvites().then((r) => { setInvites(r); setError(''); }).catch((e) => setError(e.message));
    load();
    return api.onChange(load);
  }, [enabled]);
  return { invites, error };
}

// 멤버 카드를 저장한 뒤 초대를 맞춥니다. 로그인 완료된 초대는 건드리지 않습니다.
async function syncInvite(member, email, current) {
  const next = api.normalizeEmail(email);
  if (current && inviteStatus(current) === 'claimed') return;
  if (current && current.email !== next) await api.removeInvite(current.email);
  if (!next) return;
  await api.saveInvite({
    email: next,
    member_id: member.id,
    name: member.name,
    generation: member.generation ?? null,
    role: member.role || '부원',
    part: member.part || null,
  });
}

function Editor({ table, notify }) {
  const schema = SCHEMAS[table];
  const { rows, error } = useTable(table);
  const withInvites = table === 'members' && api.mode === 'supabase';
  const { invites, error: inviteError } = useInvites(withInvites);
  const inviteOf = (memberId) => invites.find((i) => i.member_id === memberId) || null;
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
    const { invite_email: inviteEmail = '', ...row } = draft;
    for (const f of schema.fields) {
      if (f.type === 'number') row[f.k] = row[f.k] === '' || row[f.k] === null ? null : Number(row[f.k]);
      if (f.type === 'list') row[f.k] = (row[f.k] || []).map((s) => s.trim()).filter(Boolean);
    }
    const currentInvite = withInvites && draft.id ? inviteOf(draft.id) : null;
    if (withInvites) {
      const email = api.normalizeEmail(inviteEmail);
      if (email && !EMAIL_RE.test(email)) { setFormError('로그인 이메일은 name@example.com 형식으로 입력하세요.'); return; }
      if (currentInvite && inviteStatus(currentInvite) === 'claimed' && email !== currentInvite.email) {
        setFormError('이미 이 이메일로 로그인한 멤버라 로그인 이메일은 바꿀 수 없습니다.'); return;
      }
      const taken = email && invites.find((i) => i.email === email && i.member_id !== (draft.id || null));
      if (taken) {
        const owner = (rows || []).find((m) => m.id === taken.member_id);
        setFormError(`이 이메일은 이미 ${owner ? `${owner.name} 멤버` : '다른 초대'}에 쓰이고 있습니다.`); return;
      }
    }
    setBusy(true);
    let saved;
    try {
      saved = await api.save(table, row);
    } catch (err) {
      setFormError(`저장하지 못했습니다: ${err.message}`);
      setBusy(false);
      return;
    }
    try {
      if (withInvites) await syncInvite(saved, inviteEmail, currentInvite);
      notify(draft.id ? '저장했습니다' : `${schema.label}을(를) 추가했습니다`);
      setDraft(blank(schema));
      setFormError('');
    } catch (err) {
      setDraft((d) => ({ ...d, id: saved.id }));
      setFormError(`${schema.label}은(는) 저장했지만 로그인 초대를 저장하지 못했습니다: ${err.message}`);
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id) {
    try {
      // 아직 아무도 받지 않은 초대는 멤버와 함께 지웁니다(남겨 두면 그 이메일로 로그인할 때 승인돼 버림).
      const inv = withInvites ? inviteOf(id) : null;
      if (inv && inviteStatus(inv) === 'invited') await api.removeInvite(inv.email);
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
        {withInvites && (
          <p className="notice-box" style={{ marginBottom: 12 }}>
            멤버에 <b>로그인 이메일</b>을 적으면 그 사람이 처음 로그인할 때 바로 승인되고 이름·기수·직책·분야가 맞춰집니다. 회장·부회장·운영진이면 운영진 권한도 생깁니다.
            추가한 멤버에게 '로그인 화면에서 이 이메일로 로그인 링크를 받으라'고 알려 주세요. 링크로 들어오면 비밀번호를 정하고, 다음부터는 이메일 + 비밀번호로 로그인합니다.
          </p>
        )}
        {inviteError && <p className="error-box">초대 목록을 불러오지 못했습니다: {inviteError}</p>}
        <div className="edit-list">
          {(rows || []).map((r) => (
            <div key={r.id} className={`edit-item${draft.id === r.id ? ' current' : ''}`}>
              <div className="txt"><b>{schema.title(r)}</b><span>{schema.sub(r)}</span></div>
              {withInvites && (() => { const [cls, label] = INVITE_STATUS[inviteStatus(inviteOf(r.id))]; return <span className={`badge ${cls}`}>{label}</span>; })()}
              {confirmId === r.id ? (
                <>
                  <button type="button" className="btn small danger solid" onClick={() => onDelete(r.id)}>삭제 확인</button>
                  <button type="button" className="btn small" onClick={() => setConfirmId(null)}>취소</button>
                </>
              ) : (
                <>
                  <button type="button" className="btn small" onClick={() => { setDraft({ ...blank(schema), ...r, ...(withInvites ? { invite_email: inviteOf(r.id)?.email || '' } : {}) }); setFormError(''); }}>수정</button>
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
          {withInvites && (() => {
            const inv = draft.id ? inviteOf(draft.id) : null;
            const locked = inviteStatus(inv) === 'claimed';
            const id = `ed-${table}-invite-email`;
            return (
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor={id}>로그인 이메일 (비공개)<span className="opt"> (선택)</span></label>
                <input id={id} type="email" autoComplete="off" value={draft.invite_email ?? ''} disabled={locked} onChange={(e) => setDraft((d) => ({ ...d, invite_email: e.target.value }))} />
                <span className="hint">
                  {locked
                    ? '이 이메일로 이미 로그인했습니다. 로그인 이메일은 바꿀 수 없습니다.'
                    : '멤버 카드에는 보이지 않고 운영진만 봅니다. 비워 두면 초대하지 않습니다.'}
                </span>
              </div>
            );
          })()}
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
  const settings = useSettings();
  const shown = (rows || []).filter((r) => r.kind === kind);
  const overdue = (rows || []).filter((r) => isRetentionOver(r, settings));

  async function del(id) {
    if (id === 'over') {
      for (const r of overdue) await api.remove('submissions', r.id);
    } else {
      await (id === 'all' ? api.removeAll('submissions') : api.remove('submissions', id));
    }
    notify(id === 'all' ? '지원·문의를 모두 파기했습니다' : id === 'over' ? `보유 기간이 지난 ${overdue.length}건을 파기했습니다` : '삭제했습니다');
    setConfirm(null);
  }

  return (
    <div className="section">
      <p className="notice-box">
        지원서에는 개인정보가 들어 있습니다. 개인정보 처리방침과 지원 폼에 <b>지원서는 모집 마감일부터 {PRIVACY.applyRetentionDays}일, 문의는 접수일부터 {PRIVACY.inquiryRetentionDays}일 안에 파기</b>한다고 안내되어 있으니 그 안에 파기하세요. (<Link to="/privacy">처리방침 보기</Link>)
      </p>
      {overdue.length > 0 && (
        <p className="error-box" role="alert">
          보유 기간이 지난 접수가 <b>{overdue.length}건</b> 있습니다. 지금 파기해 주세요.{' '}
          {confirm === 'over' ? (
            <span className="actions">
              <button type="button" className="btn small danger solid" onClick={() => del('over')}>{overdue.length}건 파기 확인</button>
              <button type="button" className="btn small" onClick={() => setConfirm(null)}>취소</button>
            </span>
          ) : (
            <button type="button" className="btn small danger" onClick={() => setConfirm('over')}>기간 지난 {overdue.length}건 파기</button>
          )}
        </p>
      )}
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
