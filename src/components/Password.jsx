import { useState } from 'react';
import * as api from '../lib/api';

const MIN = 8;

// 새 비밀번호 + 확인. 처음 설정 화면과 내 활동의 '비밀번호 바꾸기'가 같이 씁니다.
export function PasswordForm({ submitLabel = '비밀번호 저장', onDone, idPrefix = 'pw' }) {
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr(''); setMsg('');
    if (pw.length < MIN) { setErr(`비밀번호는 ${MIN}자 이상으로 정하세요. 지금 ${pw.length}자입니다.`); return; }
    if (pw !== pw2) { setErr('두 칸의 비밀번호가 다릅니다. 같은 비밀번호를 한 번 더 입력하세요.'); return; }
    setBusy(true);
    try {
      await api.setPassword(pw);
      setPw(''); setPw2('');
      setMsg('비밀번호를 저장했습니다. 다음부터는 이메일과 비밀번호로 로그인하세요.');
      onDone?.();
    } catch (x) {
      setErr(`비밀번호를 저장하지 못했습니다. (${x.message})`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="card-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor={`${idPrefix}-new`}>새 비밀번호</label>
        <input id={`${idPrefix}-new`} type="password" autoComplete="new-password" minLength={MIN} value={pw} onChange={(e) => setPw(e.target.value)} />
        <span className="hint">{MIN}자 이상</span>
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}-confirm`}>새 비밀번호 확인</label>
        <input id={`${idPrefix}-confirm`} type="password" autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
      </div>
      {err && <p className="error-box" role="alert">{err}</p>}
      {msg && <p className="notice-box" role="status">{msg}</p>}
      <div className="actions"><button type="submit" className="btn primary" disabled={busy}>{busy ? '저장하는 중…' : submitLabel}</button></div>
    </form>
  );
}

// 이메일 링크로 처음 들어온 사람에게 다른 화면보다 먼저 보여 줍니다(Layout에서 막음).
// 저장하면 needsPassword가 꺼지면서 원래 들어온 주소(매직 링크는 내 활동)가 그대로 보입니다.
export function SetPassword({ user }) {
  return (
    <div className="login">
      <div className="page-head" style={{ marginBottom: 0 }}>
        <h1>비밀번호 설정</h1>
        <p>{user.name}님, 환영합니다. 다음부터 이메일({user.email})과 비밀번호로 바로 로그인할 수 있도록 비밀번호를 정해 주세요.</p>
      </div>
      <PasswordForm idPrefix="first-pw" submitLabel="비밀번호 정하고 계속하기" />
      <p className="small muted">지금 정하지 않으려면 로그아웃하세요. 다음에 로그인 링크로 들어오면 이 화면이 다시 나옵니다.</p>
      <div className="actions"><button type="button" className="btn" onClick={api.signOut}>로그아웃</button></div>
    </div>
  );
}
