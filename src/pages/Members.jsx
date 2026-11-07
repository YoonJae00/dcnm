import { useMemo, useState } from 'react';
import { useTable } from '../lib/hooks';
import { initials } from '../lib/format';

const ROLE_ORDER = ['지도교수', '회장', '부회장', '운영진', '부원'];
const LEADS = new Set(['지도교수', '회장', '부회장', '운영진']);

function Chips({ label, options, value, onChange, format = (v) => v }) {
  return (
    <div className="filter-line" role="group" aria-label={label}>
      <span className="label">{label}</span>
      <button type="button" className="chip" aria-pressed={value === 'all'} onClick={() => onChange('all')}>전체</button>
      {options.map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={value === o} onClick={() => onChange(o)}>
          {format(o)}
        </button>
      ))}
    </div>
  );
}

export default function Members() {
  const { rows, error } = useTable('members');
  const projects = useTable('projects').rows || [];
  const joinedOf = (id) => projects.filter((p) => p.status !== 'done' && (p.member_ids || []).includes(id));
  const [gen, setGen] = useState('all');
  const [role, setRole] = useState('all');
  const [q, setQ] = useState('');

  const gens = useMemo(() => [...new Set((rows || []).map((m) => m.generation).filter((g) => g != null && g !== ''))].sort((a, b) => a - b), [rows]);
  const roles = useMemo(() => {
    const present = new Set((rows || []).map((m) => m.role));
    return [...ROLE_ORDER.filter((r) => present.has(r)), ...[...present].filter((r) => !ROLE_ORDER.includes(r))];
  }, [rows]);

  const shown = (rows || []).filter((m) => {
    if (gen !== 'all' && m.generation !== gen) return false;
    if (role !== 'all' && m.role !== role) return false;
    if (q.trim()) {
      const hay = [m.name, m.part, m.intro, ...(m.tags || [])].join(' ').toLowerCase();
      if (!hay.includes(q.trim().toLowerCase())) return false;
    }
    return true;
  });

  return (
    <>
      <div className="page-head">
        <h1>멤버</h1>
        <p>기수와 역할로 골라 볼 수 있습니다. 관심 분야나 기술 이름으로 검색해도 됩니다. 카드 아래에는 지금 참여 중인 프로젝트가 나옵니다.</p>
      </div>

      <div className="filters">
        <Chips label="기수" options={gens} value={gen} onChange={setGen} format={(g) => `${g}기`} />
        <Chips label="역할" options={roles} value={role} onChange={setRole} />
        <div className="filter-line">
          <span className="label">검색</span>
          <input
            id="member-search"
            className="filter-search"
            type="search"
            placeholder="예: Python, 웹, 디자인"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        {rows && <span className="result-count" aria-live="polite">{shown.length}명</span>}
      </div>

      {error && <p className="error-box">멤버를 불러오지 못했습니다: {error}</p>}
      {!rows && !error && <p className="state">불러오는 중입니다.</p>}

      <div className="member-grid">
        {shown.map((m) => (
          <article key={m.id} className={`member${LEADS.has(m.role) ? ' lead' : ''}`}>
            <span className="avatar" aria-hidden="true">{initials(m.name)}</span>
            <h3>{m.name} <span className="role">{m.role}</span></h3>
            <span className="meta">{m.role === '지도교수' ? `한성대학교${m.part ? ` · ${m.part}` : ''}` : <>{m.generation ? `${m.generation}기` : '기수 미정'}{m.part ? ` · ${m.part}` : ''}</>}</span>
            {m.intro && <p className="intro">{m.intro}</p>}
            {m.tags?.length > 0 && (
              <div className="tags">{m.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            )}
            {m.github && <a className="gh" href={m.github} target="_blank" rel="noreferrer">GitHub</a>}
            {joinedOf(m.id).length > 0 && (
              <p className="joined">참여 중 <b>{joinedOf(m.id)[0].title}</b>{joinedOf(m.id).length > 1 ? ` 외 ${joinedOf(m.id).length - 1}` : ''}</p>
            )}
          </article>
        ))}
      </div>

      {rows && shown.length === 0 && (
        <p className="state">
          조건에 맞는 멤버가 없습니다.{' '}
          <button type="button" className="btn small" onClick={() => { setGen('all'); setRole('all'); setQ(''); }}>필터 지우기</button>
        </p>
      )}
    </>
  );
}
