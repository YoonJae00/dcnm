import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as api from '../lib/api';
import { useSettings } from '../lib/hooks';
import { PARTS, validate } from '../lib/validate';
import { RecruitStatus } from './Home';

const EMPTY = { name: '', email: '', student_id: '', phone: '', part: '', message: '', consent: false };

function Field({ id, label, optional, hint, error, children }) {
  return (
    <div className={`field${error ? ' invalid' : ''}`}>
      <label htmlFor={id}>{label}{optional && <span className="opt"> (선택)</span>}</label>
      {children}
      {hint && !error && <span className="hint" id={`${id}-hint`}>{hint}</span>}
      {error && <span className="err" id={`${id}-err`} role="alert">{error}</span>}
    </div>
  );
}

export default function Apply() {
  const settings = useSettings();
  const [params, setParams] = useSearchParams();
  const open = !!settings?.recruit_open;
  const tab = params.get('tab') === 'inquiry' || (settings && !open) ? 'inquiry' : 'apply';

  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [tried, setTried] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [done, setDone] = useState(null);

  const errors = validate(tab, values);
  const show = (k) => (tried || touched[k]) && errors[k];
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));
  const aria = (k, hint) => ({
    'aria-invalid': show(k) ? 'true' : undefined,
    'aria-describedby': show(k) ? `${k}-err` : hint ? `${k}-hint` : undefined,
  });

  const switchTab = (t) => {
    setParams(t === 'inquiry' ? { tab: 'inquiry' } : {}, { replace: true });
    setTried(false);
    setTouched({});
    setSendError('');
  };

  async function onSubmit(e) {
    e.preventDefault();
    setTried(true);
    if (Object.keys(errors).length) {
      const firstKey = Object.keys(errors)[0];
      document.getElementById(`f-${firstKey}`)?.focus();
      return;
    }
    setSending(true);
    setSendError('');
    try {
      const payload = {
        kind: tab,
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        ...(tab === 'apply'
          ? { student_id: values.student_id.trim(), phone: values.phone.trim() || null, part: values.part }
          : {}),
      };
      await api.submit(payload);
      setDone(payload);
      setValues(EMPTY);
      setTouched({});
      setTried(false);
    } catch (err) {
      setSendError(`제출하지 못했습니다. 인터넷 연결을 확인한 뒤 다시 제출해 주세요. (${err.message})`);
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="done" role="status">
        <span className="check-mark" aria-hidden="true">✓</span>
        <h2>{done.kind === 'apply' ? '지원서가 접수되었습니다' : '문의가 접수되었습니다'}</h2>
        <p>
          {done.kind === 'apply'
            ? `운영진이 지원서를 확인한 뒤 ${done.email}로 면접 일정을 보내 드립니다.`
            : `운영진이 확인한 뒤 ${done.email}로 답장을 보내 드립니다.`}
        </p>
        <dl>
          <dt>이름</dt><dd>{done.name}</dd>
          {done.student_id && <><dt>학번</dt><dd>{done.student_id}</dd></>}
          {done.part && <><dt>관심 분야</dt><dd>{done.part}</dd></>}
          <dt>접수 시각</dt><dd>{new Date().toLocaleString('ko-KR')}</dd>
        </dl>
        <div className="actions">
          <Link className="btn primary" to="/">메인으로</Link>
          <button type="button" className="btn" onClick={() => { setDone(null); switchTab('inquiry'); }}>{done.kind === 'apply' ? '문의 남기기' : '다른 문의 남기기'}</button>
        </div>
      </div>
    );
  }

  const isApply = tab === 'apply';
  const msgLen = values.message.trim().length;

  return (
    <>
      <div className="page-head">
        <h1>{isApply ? (settings?.recruit_title || '지원하기') : '문의하기'}</h1>
        <div className="recruit-line"><RecruitStatus settings={settings} /></div>
      </div>

      <div className="tabs" role="tablist" aria-label="양식 종류">
        <button type="button" role="tab" aria-selected={isApply} disabled={!open} onClick={() => switchTab('apply')}>지원하기</button>
        <button type="button" role="tab" aria-selected={!isApply} onClick={() => switchTab('inquiry')}>문의하기</button>
      </div>

      <div className="form-layout">
        <form className="card-form" noValidate onSubmit={onSubmit}>
          <div className="two">
            <Field id="f-name" label="이름" error={show('name')}>
              <input id="f-name" autoComplete="name" value={values.name} onChange={set('name')} onBlur={blur('name')} {...aria('name')} />
            </Field>
            {isApply && (
              <Field id="f-student_id" label="학번" error={show('student_id')} hint="숫자만 입력하세요.">
                <input id="f-student_id" inputMode="numeric" value={values.student_id} onChange={set('student_id')} onBlur={blur('student_id')} {...aria('student_id', true)} />
              </Field>
            )}
          </div>
          <div className="two">
            <Field id="f-email" label="이메일" error={show('email')} hint="결과와 답장을 이 주소로 보냅니다.">
              <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} onBlur={blur('email')} {...aria('email', true)} />
            </Field>
            {isApply && (
              <Field id="f-phone" label="전화번호" optional error={show('phone')}>
                <input id="f-phone" type="tel" autoComplete="tel" placeholder="010-1234-5678" value={values.phone} onChange={set('phone')} onBlur={blur('phone')} {...aria('phone')} />
              </Field>
            )}
          </div>
          {isApply && (
            <Field id="f-part" label="관심 분야" error={show('part')}>
              <select id="f-part" value={values.part} onChange={set('part')} onBlur={blur('part')} {...aria('part')}>
                <option value="">고르세요</option>
                {PARTS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>
          )}
          <Field
            id="f-message"
            label={isApply ? '지원 동기와 해 보고 싶은 활동' : '문의 내용'}
            error={show('message')}
            hint={isApply ? '30자 이상 1000자 이하로 적어 주세요. 코딩 경험이 없어도 괜찮습니다.' : '10자 이상 적어 주세요.'}
          >
            <textarea id="f-message" value={values.message} onChange={set('message')} onBlur={blur('message')} {...aria('message', true)} />
            <span className="counter">{msgLen} / 1000자</span>
          </Field>

          <div className={`consent${show('consent') ? ' invalid' : ''}`}>
            <dl>
              <dt>수집 목적</dt><dd>{isApply ? '부원 선발과 면접 안내' : '문의 답변'}</dd>
              <dt>수집 항목</dt><dd>{isApply ? '이름, 학번, 이메일, 전화번호(선택), 관심 분야, 지원 내용' : '이름, 이메일, 문의 내용'}</dd>
              <dt>보유 기간</dt><dd>{isApply ? '모집 종료 후 30일 이내 파기' : '답변 후 30일 이내 파기'}</dd>
              <dt>거부할 권리</dt><dd>동의하지 않을 수 있으며, 이 경우 온라인 {isApply ? '지원' : '문의'}이 어렵습니다.</dd>
            </dl>
            <label className="check" htmlFor="f-consent">
              <input id="f-consent" type="checkbox" checked={values.consent} onChange={set('consent')} {...aria('consent')} />
              위 내용을 읽었고 개인정보 수집·이용에 동의합니다.
            </label>
            {show('consent') && <span className="err" id="consent-err" role="alert" style={{ color: 'var(--danger)', fontSize: 'var(--t-xs)' }}>{errors.consent}</span>}
          </div>

          {sendError && <p className="error-box" role="alert">{sendError}</p>}
          {tried && Object.keys(errors).length > 0 && (
            <p className="err small" role="alert" style={{ color: 'var(--danger)' }}>빨간색으로 표시된 {Object.keys(errors).length}개 항목을 고쳐 주세요.</p>
          )}
          <div className="actions">
            <button type="submit" className="btn primary" disabled={sending}>
              {sending ? '제출하는 중' : isApply ? '지원서 제출' : '문의 보내기'}
            </button>
          </div>
        </form>

        <aside className="aside-box">
          {isApply ? (
            <>
              <h2>지원 후 진행 순서</h2>
              <ol>
                <li>지원서 제출</li>
                <li>운영진 검토 후 이메일로 면접 일정 안내</li>
                <li>짧은 면접 (동아리방 {settings?.room || ''})</li>
                <li>합격 안내와 첫 정기 모임</li>
              </ol>
              <p className="small muted">궁금한 점은 문의하기 탭에서 남겨 주세요.</p>
            </>
          ) : (
            <>
              <h2>문의 전에 확인해 보세요</h2>
              <p className="small">모임 시간과 장소는 <Link to="/calendar">일정</Link>에, 모집 소식은 <Link to="/notices">공지사항</Link>에 먼저 올라옵니다.</p>
              {!open && settings && <p className="small muted">지금은 모집 기간이 아니어서 지원하기를 열지 않았습니다. 다음 모집 알림을 받고 싶다면 문의로 남겨 주세요.</p>}
            </>
          )}
        </aside>
      </div>
    </>
  );
}
