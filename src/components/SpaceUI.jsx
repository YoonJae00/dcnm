// 팀 공간 화면들이 함께 쓰는 작은 부품
import { useState } from 'react';
import { shortDate } from '../lib/format';

// 저장 중·오류 표시를 한곳에서: run(fn)이 끝날 때까지 busy, 실패하면 err
export function useRun() {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const run = async (fn) => {
    setBusy(true);
    setErr('');
    try {
      await fn();
      return true;
    } catch (e) {
      setErr(e?.message || String(e));
      return false;
    } finally {
      setBusy(false);
    }
  };
  return { busy, err, setErr, run };
}

export function F({ id, label, opt, error, hint, children }) {
  return (
    <div className={`field${error ? ' invalid' : ''}`}>
      <label htmlFor={id}>{label}{opt && <span className="opt"> (선택)</span>}</label>
      {children}
      {error ? <span className="err" role="alert">{error}</span> : hint && <span className="hint">{hint}</span>}
    </div>
  );
}

export const ErrLine = ({ err }) => (err ? <p className="error-box small" role="alert">저장하지 못했습니다: {err}</p> : null);

export const Meta = ({ row, prefix }) => (
  <span className="ws-meta">{prefix}{row.created_by_name || '팀원'} · {shortDate(row.created_at)}</span>
);

// 지우기 전에 한 번 묻습니다
export function DelBtn({ onDelete, what = '이 항목', disabled }) {
  return (
    <button type="button" className="btn ghost small danger" disabled={disabled}
      onClick={() => { if (window.confirm(`${what}을(를) 지울까요? 되돌릴 수 없습니다.`)) onDelete(); }}>
      삭제
    </button>
  );
}

export const Empty = ({ children }) => <p className="ws-empty">{children}</p>;
