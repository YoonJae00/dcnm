import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../lib/api';
import { useSettings, useTable } from '../lib/hooks';
import { STATUS_LABEL } from '../lib/projects';
import { landingState } from '../lib/landing';
import { detailsToForm, formToDetails, validateRecruitForm } from '../lib/recruitDetails';

// 목록 편집에서 위·아래로 옮기기
const move = (list, i, d) => {
  const j = i + d;
  if (j < 0 || j >= list.length) return list;
  const next = [...list];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
};
const patch = (list, i, p) => list.map((x, k) => (k === i ? { ...x, ...p } : x));
const drop = (list, i) => list.filter((_, k) => k !== i);

// 한 칸: 라벨 + 입력 + 오류 문구. 오류가 있으면 input에 aria-invalid
function Field({ id, label, hint, err, children }) {
  return (
    <div className={`field${err ? ' invalid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && <span className="hint">{hint}</span>}
      {err && <span className="err" id={`${id}-err`}>{err}</span>}
    </div>
  );
}

function RowTools({ i, n, onMove, onRemove, label, lockFirst }) {
  return (
    <div className="row-tools">
      <button type="button" className="btn ghost small" aria-label={`${label} 위로`} disabled={i === 0 || (lockFirst && i === 1)} onClick={() => onMove(i, -1)}>↑</button>
      <button type="button" className="btn ghost small" aria-label={`${label} 아래로`} disabled={i === n - 1 || (lockFirst && i === 0)} onClick={() => onMove(i, 1)}>↓</button>
      <button type="button" className="btn ghost small" aria-label={`${label} 삭제`} disabled={lockFirst && i === 0} onClick={() => onRemove(i)}>삭제</button>
    </div>
  );
}

// 문장 목록 (지원 자격)
function TextList({ idPrefix, label, items, onChange, errs, addLabel, placeholder }) {
  return (
    <div className="field">
      <span className="label">{label}</span>
      {items.map((t, i) => (
        <div className="list-line" key={i}>
          <input id={`${idPrefix}-${i}`} aria-label={`${label} ${i + 1}`} value={t} placeholder={placeholder} aria-invalid={!!errs[`${idPrefix}.${i}`]} onChange={(e) => onChange(items.map((x, k) => (k === i ? e.target.value : x)))} />
          <RowTools i={i} n={items.length} label={`${label} ${i + 1}`} onMove={(k, d) => onChange(move(items, k, d))} onRemove={(k) => onChange(drop(items, k))} />
        </div>
      ))}
      <div><button type="button" className="btn small" onClick={() => onChange([...items, ''])}>+ {addLabel}</button></div>
    </div>
  );
}

// 기수를 바꾸면 일정·자격·FAQ 문구 안의 'N기'도 함께 바꿔요 (예: '8기 OT' → '9기 OT').
// 운영진은 저장 전에 화면에서 바뀐 문구를 보고 고칠 수 있어요.
function withGeneration(form, value) {
  // 지우고 다시 입력하는 중(빈 값)에도 마지막으로 유효했던 기수를 기억해 둬요.
  const prev = Number(form.textGen ?? form.generation);
  const next = Number(value);
  const valid = (n) => Number.isInteger(n) && n > 0;
  if (!valid(next)) return { generation: value, textGen: valid(prev) ? prev : form.textGen };
  if (!valid(prev) || prev === next) return { generation: value, textGen: next };
  const re = new RegExp(`(^|[^0-9])${prev}기`, 'g');
  const swap = (t) => (typeof t === 'string' ? t.replace(re, `$1${next}기`) : t);
  return {
    generation: value,
    textGen: next,
    steps: form.steps.map((x) => ({ ...x, title: swap(x.title), description: swap(x.description) })),
    qualifications: form.qualifications.map(swap),
    faqs: form.faqs.map((f) => ({ q: swap(f.q), a: swap(f.a) })),
  };
}


// 랜딩 Activities에 보일 프로젝트 고르기. 체크한 순서가 곧 랜딩 표시 순서예요.
const LP_FILTERS = [['all', '전체'], ['ongoing', '진행 중'], ['recruiting', '모집 중'], ['done', '완료']];
function LandingProjects({ projects, value, onChange }) {
  const [status, setStatus] = useState('all');
  const [q, setQ] = useState('');
  const byId = new Map(projects.map((p) => [p.id, p]));
  const picked = value.filter((id) => byId.has(id)); // 삭제된 프로젝트 id는 조용히 뺍니다
  const shown = projects.filter((p) => (status === 'all' || p.status === status) && p.title.toLowerCase().includes(q.trim().toLowerCase()));
  const toggle = (id) => onChange(picked.includes(id) ? picked.filter((x) => x !== id) : [...picked, id]);
  return (
    <>
      <p className="small muted">
        체크한 프로젝트만 랜딩의 Activities 섹션에 보입니다. 선택됨 목록의 순서가 랜딩 표시 순서예요. <strong>{picked.length}개 선택됨</strong>
      </p>
      {picked.length === 0 && <p className="small muted" role="status">랜딩에서 Activities 섹션이 숨겨집니다.</p>}
      {picked.length > 0 && (
        <ol className="lp-picked" aria-label="선택된 프로젝트 (표시 순서)">
          {picked.map((id, i) => (
            <li key={id} className="list-line">
              <span className="lp-title">{i + 1}. {byId.get(id).title} <small className="muted">{byId.get(id).kind} · {STATUS_LABEL[byId.get(id).status]}</small></span>
              <RowTools i={i} n={picked.length} label={byId.get(id).title} onMove={(k, d) => onChange(move(picked, k, d))} onRemove={(k) => onChange(drop(picked, k))} />
            </li>
          ))}
        </ol>
      )}
      <div className="filter-line" role="group" aria-label="프로젝트 상태">
        {LP_FILTERS.map(([k, label]) => (
          <button type="button" key={k} className="chip" aria-pressed={status === k} onClick={() => setStatus(k)}>{label}</button>
        ))}
        <input className="filter-search" type="search" aria-label="프로젝트 제목 검색" placeholder="제목 검색" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <ul className="lp-list">
        {shown.map((p) => (
          <li key={p.id}>
            <label className="check-line" htmlFor={`lp-${p.id}`}>
              <input id={`lp-${p.id}`} type="checkbox" checked={picked.includes(p.id)} onChange={() => toggle(p.id)} />
              <span>{p.title}<small>{p.kind} · {STATUS_LABEL[p.status]}</small></span>
            </label>
          </li>
        ))}
        {shown.length === 0 && <li className="small muted">조건에 맞는 프로젝트가 없습니다.</li>}
      </ul>
    </>
  );
}

export default function RecruitSettings({ notify }) {
  const settings = useSettings();
  const { rows: projects } = useTable('projects');
  const [s, setS] = useState(null);
  const [form, setForm] = useState(null);
  const [errs, setErrs] = useState({});
  const [err, setErr] = useState('');
  const [linksText, setLinksText] = useState('');
  const root = useRef(null);
  useEffect(() => {
    if (settings && !s) {
      setS(settings);
      setForm(detailsToForm(settings));
      setLinksText((settings.links || []).map((l) => `${l.label} ${l.url}`).join('\n'));
    }
  }, [settings, s]);
  if (!s) return <p className="state">불러오는 중입니다.</p>;

  // 스위치는 지금 폼에 적힌 값으로, 방문자에게 보이는지는 저장된 값으로 판정합니다.
  const live = landingState(s);
  const saved = landingState(settings);
  const set = (k) => (e) => setS({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const setF = (p) => setForm({ ...form, ...p });

  const steps = form.steps;
  const setStep = (i, p) => setF({ steps: patch(steps, i, p) });

  const submit = async (e) => {
    e.preventDefault();
    const lines = linksText.split('\n').map((l) => l.trim()).filter(Boolean);
    const links = [];
    const found = validateRecruitForm(form, { start: s.recruit_start, deadline: s.recruit_deadline });
    for (const line of lines) {
      const m = line.match(/^(.+?)\s+(https?:\/\/\S+)$/);
      if (!m) { found.links = `'${line}' 줄을 '이름 https://주소' 형식으로 고쳐 주세요.`; break; }
      links.push({ label: m[1].trim(), url: m[2] });
    }
    setErrs(found);
    const count = Object.keys(found).length;
    if (count) {
      setErr(`입력을 확인해 주세요. 고칠 곳이 ${count}군데 있습니다.`);
      setTimeout(() => root.current?.querySelector('[aria-invalid="true"]')?.focus(), 0);
      return;
    }
    try {
      await api.saveSettings({
        ...s,
        links,
        privacy_contact: (s.privacy_contact || '').trim() || null,
        landing_projects: (s.landing_projects || []).filter((id) => !projects || projects.some((p) => p.id === id)),
        recruit_start: s.recruit_start || null,
        recruit_deadline: s.recruit_deadline || null,
        recruit_details: formToDetails(form, { start: s.recruit_start, deadline: s.recruit_deadline }),
      });
      notify('설정을 저장했습니다');
      setErr('');
    } catch (x) { setErr(`저장하지 못했습니다: ${x.message}`); }
  };

  return (
    <form className="edit-form settings-form" ref={root} noValidate onSubmit={submit}>
      <p className="small muted">
        바꾼 내용은 저장하면 모집 랜딩과 메인 사이트에 바로 반영됩니다. <Link to="/recruit">랜딩에서 보기</Link>
      </p>

      <section className="set-sec" aria-labelledby="set-basic">
        <h3 id="set-basic">모집 기본</h3>
        <label className="check-line" htmlFor="st-open">
          <input id="st-open" type="checkbox" checked={!!s.recruit_open} onChange={set('recruit_open')} /> 지금 지원을 받습니다
        </label>
        <Field id="st-title" label="모집 제목"><input id="st-title" value={s.recruit_title || ''} onChange={set('recruit_title')} /></Field>
        <Field id="st-gen" label="기수" hint="랜딩의 'N기' 표기에 모두 쓰입니다. 바꾸면 아래 일정·자격·FAQ 문구의 'N기'도 함께 바뀌니 저장 전에 확인하세요." err={errs.generation}>
          <input id="st-gen" type="number" inputMode="numeric" min="1" step="1" value={form.generation} aria-invalid={!!errs.generation} aria-describedby={errs.generation ? 'st-gen-err' : undefined} onChange={(e) => setF(withGeneration(form, e.target.value))} />
        </Field>
        <Field id="st-start" label="모집 시작일" err={errs.recruit_start}><input id="st-start" type="date" value={s.recruit_start || ''} aria-invalid={!!errs.recruit_start} onChange={set('recruit_start')} /></Field>
        <Field id="st-deadline" label="마감일" hint="서류 접수 단계의 날짜가 됩니다." err={errs.recruit_deadline}><input id="st-deadline" type="date" value={s.recruit_deadline || ''} aria-invalid={!!errs.recruit_deadline} onChange={set('recruit_deadline')} /></Field>
        <Field id="st-endtime" label="서류 접수 마감 시각" hint="마감일 이 시각까지 접수합니다. 랜딩 켜짐 판단은 날짜만 봅니다.">
          <input id="st-endtime" type="time" value={form.endTime} onChange={(e) => setF({ endTime: e.target.value || '23:59' })} />
        </Field>
        <div className="field">
          <label className="check-line" htmlFor="st-landing">
            <input id="st-landing" type="checkbox" checked={!!s.landing_enabled} disabled={!live.canEnable && !s.landing_enabled} onChange={set('landing_enabled')} /> 모집 랜딩 페이지 켜기
          </label>
          <span className="hint">
            {live.canEnable
              ? '켜면 로그인하지 않은 방문자에게 메인(/) 대신 모집 랜딩이 보입니다. 로그인한 부원에게는 평소 메인이 보입니다.'
              : "모집 기간(시작일~마감일) 안이고 '지금 지원을 받습니다'가 켜져 있을 때만 켤 수 있어요."}
            {!live.canEnable && s.landing_enabled && ' 지금은 조건이 맞지 않아 켜 둬도 보이지 않습니다. 끄려면 체크를 해제하세요.'}
          </span>
          <span className="hint" data-testid="landing-status">
            {saved.live ? '현재 상태: 방문자에게 랜딩이 보이는 중입니다.' : '현재 상태: 방문자에게 평소 메인이 보입니다.'}
            {' '}<Link to="/recruit">랜딩 미리 보기</Link>
          </span>
        </div>
      </section>

      <section className="set-sec" aria-labelledby="set-steps">
        <h3 id="set-steps">모집 일정</h3>
        <p className="hint">시간은 한국 시간입니다. 첫 단계(서류 접수)의 날짜는 위의 모집 시작일·마감일이 정합니다. 뒤 단계는 앞 단계보다 늦어야 합니다.</p>
        {errs.steps && <p className="err">{errs.steps}</p>}
        {steps.map((x, i) => (
          <div className="list-card" key={i}>
            <div className="list-card-head">
              <b>{i + 1}단계</b>
              <RowTools i={i} n={steps.length} label={`${i + 1}단계`} lockFirst onMove={(k, d) => setF({ steps: move(steps, k, d) })} onRemove={(k) => setF({ steps: drop(steps, k) })} />
            </div>
            <Field id={`step-${i}-title`} label="단계 이름" err={errs[`steps.${i}.title`]}><input id={`step-${i}-title`} value={x.title} aria-invalid={!!errs[`steps.${i}.title`]} onChange={(e) => setStep(i, { title: e.target.value })} /></Field>
            <Field id={`step-${i}-desc`} label="설명"><textarea id={`step-${i}-desc`} rows={2} style={{ minHeight: 'auto' }} value={x.description} onChange={(e) => setStep(i, { description: e.target.value })} /></Field>
            {i === 0 ? (
              <p className="small muted">{s.recruit_start || '시작일 미정'} 00:00 ~ {s.recruit_deadline || '마감일 미정'} {form.endTime} (모집 시작일·마감일·마감 시각에서 정해져요)</p>
            ) : (
              <>
                <Field id={`step-${i}-sd`} label="시작" err={errs[`steps.${i}.start`]}>
                  <div className="date-pair">
                    <input id={`step-${i}-sd`} type="date" aria-label={`${i + 1}단계 시작 날짜`} value={x.sd} aria-invalid={!!errs[`steps.${i}.start`]} onChange={(e) => setStep(i, { sd: e.target.value })} />
                    <input type="time" aria-label={`${i + 1}단계 시작 시각`} value={x.st} onChange={(e) => setStep(i, { st: e.target.value })} />
                  </div>
                </Field>
                <Field id={`step-${i}-ed`} label={<>끝 <span className="opt">(선택)</span></>} err={errs[`steps.${i}.end`]}>
                  <div className="date-pair">
                    <input id={`step-${i}-ed`} type="date" aria-label={`${i + 1}단계 끝 날짜`} value={x.ed} aria-invalid={!!errs[`steps.${i}.end`]} onChange={(e) => setStep(i, { ed: e.target.value })} />
                    <input type="time" aria-label={`${i + 1}단계 끝 시각`} value={x.et} onChange={(e) => setStep(i, { et: e.target.value })} />
                  </div>
                </Field>
              </>
            )}
          </div>
        ))}
        <div><button type="button" className="btn small" onClick={() => setF({ steps: [...steps, { title: '', description: '', sd: '', st: '10:00', ed: '', et: '' }] })}>+ 단계 추가</button></div>
      </section>

      <section className="set-sec" aria-labelledby="set-qual">
        <h3 id="set-qual">지원 자격</h3>
        <TextList idPrefix="qual" label="지원 자격" items={form.qualifications} errs={errs} addLabel="문장 추가" placeholder="예: 개발에 관심 있는 재학생" onChange={(qualifications) => setF({ qualifications })} />
      </section>


      <section className="set-sec" aria-labelledby="set-faq">
        <h3 id="set-faq">자주 묻는 질문</h3>
        {form.faqs.map((f, i) => (
          <div className="list-card" key={i}>
            <div className="list-card-head">
              <b>질문 {i + 1}</b>
              <RowTools i={i} n={form.faqs.length} label={`질문 ${i + 1}`} onMove={(k, d) => setF({ faqs: move(form.faqs, k, d) })} onRemove={(k) => setF({ faqs: drop(form.faqs, k) })} />
            </div>
            <Field id={`faq-${i}-q`} label="질문" err={errs[`faqs.${i}.q`]}><input id={`faq-${i}-q`} value={f.q} aria-invalid={!!errs[`faqs.${i}.q`]} onChange={(e) => setF({ faqs: patch(form.faqs, i, { q: e.target.value }) })} /></Field>
            <Field id={`faq-${i}-a`} label="답" err={errs[`faqs.${i}.a`]}><textarea id={`faq-${i}-a`} rows={3} style={{ minHeight: 'auto' }} value={f.a} aria-invalid={!!errs[`faqs.${i}.a`]} onChange={(e) => setF({ faqs: patch(form.faqs, i, { a: e.target.value }) })} /></Field>
          </div>
        ))}
        <div><button type="button" className="btn small" onClick={() => setF({ faqs: [...form.faqs, { q: '', a: '' }] })}>+ 질문 추가</button></div>
      </section>

      <section className="set-sec" aria-labelledby="set-activities">
        <h3 id="set-activities">랜딩 활동(Activities)</h3>
        {projects ? (
          <LandingProjects projects={projects} value={s.landing_projects || []} onChange={(landing_projects) => setS({ ...s, landing_projects })} />
        ) : <p className="state">프로젝트를 불러오는 중입니다.</p>}
      </section>

      <section className="set-sec" aria-labelledby="set-site">
        <h3 id="set-site">사이트 기본</h3>
        <Field id="st-intro" label="메인 소개 문구"><textarea id="st-intro" rows={4} style={{ minHeight: 'auto' }} value={s.intro || ''} onChange={set('intro')} /></Field>
        <Field id="st-room" label="동아리방"><input id="st-room" value={s.room || ''} onChange={set('room')} /></Field>
        <Field id="st-privacy" label="개인정보 문의 연락처" hint="개인정보 처리방침의 보호책임자 연락처로 쓰입니다. 비워 두면 회장 계정의 이메일이 자동으로 쓰입니다. 공개되니 동아리 공용 이메일이면 더 좋아요.">
          <input id="st-privacy" maxLength={200} placeholder="예: dcm.privacy@example.com" value={s.privacy_contact || ''} onChange={set('privacy_contact')} />
        </Field>
        <Field id="st-links" label="자주 쓰는 바로가기 링크" err={errs.links} hint="한 줄에 하나씩 '이름 주소' 형식으로 적어 주세요. 예: 인스타그램 https://instagram.com/동아리계정">
          <textarea id="st-links" rows={5} style={{ minHeight: 'auto' }} value={linksText} aria-invalid={!!errs.links} onChange={(e) => setLinksText(e.target.value)} />
        </Field>
      </section>

      {err && <p className="error-box" role="alert">{err}</p>}
      <div className="actions"><button type="submit" className="btn primary">저장</button> <Link className="btn" to="/recruit">랜딩에서 보기</Link></div>
    </form>
  );
}
