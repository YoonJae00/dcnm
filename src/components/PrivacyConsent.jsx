import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../lib/api';
import { COLLECTIONS, PRIVACY } from '../data/privacy';

// 부원 계정 첫 로그인(또는 처리방침 버전이 바뀐 뒤)에 비밀번호 설정보다 먼저 보여 줍니다. Layout이 막습니다.
// 수집·이용 동의와 국외 이전 별도 동의를 나누어 받습니다(개인정보 보호법 제22조제1항, 제28조의8제1항제1호).
export function PrivacyConsent({ user }) {
  const [collect, setCollect] = useState(false);
  const [overseas, setOverseas] = useState(false);
  const [tried, setTried] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const rows = COLLECTIONS.filter((c) => ['account', 'card', 'activity'].includes(c.id));

  async function onSubmit(e) {
    e.preventDefault();
    setTried(true);
    if (!collect || !overseas) return;
    setBusy(true);
    setErr('');
    try {
      await api.agreePrivacy();
    } catch (x) {
      setErr(`동의를 저장하지 못했습니다. 잠시 뒤 다시 시도해 주세요. (${x.message})`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login">
      <div className="page-head" style={{ marginBottom: 0 }}>
        <h1>개인정보 수집·이용 동의</h1>
        <p>{user.name}님, 부원 계정을 쓰려면 아래 내용을 읽고 동의해 주세요. 처리방침이 바뀌면 다시 안내합니다.</p>
      </div>

      <form className="card-form" onSubmit={onSubmit} noValidate>
        <div className={`consent${tried && !collect ? ' invalid' : ''}`}>
          <b>① 개인정보 수집·이용 (필수)</b>
          <dl>
            <dt>수집 목적</dt><dd>부원 확인과 로그인, 글쓰기·프로젝트 참여 등 동아리 활동 지원</dd>
            <dt>수집 항목</dt><dd>{rows[0].required}</dd>
            <dt>활동 정보</dt><dd>{rows[2].required}</dd>
            <dt>공개되는 정보</dt><dd>멤버 카드({rows[1].required})와 글·댓글의 작성자 이름은 사이트에 공개됩니다.</dd>
            <dt>보유 기간</dt><dd>{rows[0].period}</dd>
            <dt>거부할 권리</dt><dd>동의하지 않을 수 있습니다. 동의하지 않으면 부원 로그인과 글쓰기·프로젝트 참여를 쓸 수 없습니다.</dd>
          </dl>
          <label className="check" htmlFor="pc-collect">
            <input id="pc-collect" type="checkbox" checked={collect} onChange={(e) => setCollect(e.target.checked)} aria-invalid={tried && !collect ? 'true' : undefined} />
            [필수] 개인정보 수집·이용에 동의합니다.
          </label>
        </div>

        <div className={`consent${tried && !overseas ? ' invalid' : ''}`}>
          <b>② 개인정보 국외 이전 (필수, 별도 동의)</b>
          <dl>
            <dt>이전받는 자</dt><dd>Supabase, Inc. (데이터베이스·로그인 인증·메일 발송)</dd>
            <dt>이전 국가</dt><dd>싱가포르 (서버 위치)</dd>
            <dt>이전 항목</dt><dd>위 ① 의 계정 정보와 활동 정보</dd>
            <dt>시기·방법</dt><dd>로그인하거나 글을 쓸 때마다 HTTPS로 암호화해 전송</dd>
            <dt>이용 목적·기간</dt><dd>저장과 로그인 인증. 위 보유 기간까지</dd>
            <dt>거부 방법·효과</dt><dd>동의하지 않을 수 있으며, 이 경우 부원 로그인을 쓸 수 없습니다. 동의 뒤에는 내 활동 &gt; 내 정보에서 계정을 삭제해 철회할 수 있습니다.</dd>
          </dl>
          <label className="check" htmlFor="pc-overseas">
            <input id="pc-overseas" type="checkbox" checked={overseas} onChange={(e) => setOverseas(e.target.checked)} aria-invalid={tried && !overseas ? 'true' : undefined} />
            [필수] 개인정보의 국외 이전에 동의합니다.
          </label>
        </div>

        {tried && (!collect || !overseas) && <p className="err small" role="alert" style={{ color: 'var(--danger)' }}>두 항목에 모두 동의해야 계속할 수 있습니다.</p>}
        {err && <p className="error-box" role="alert">{err}</p>}
        <p className="small muted">전체 내용은 <Link to="/privacy" target="_blank" rel="noreferrer">개인정보 처리방침(새 창)</Link>에서 볼 수 있습니다. 시행 버전 {PRIVACY.version}</p>
        <div className="actions">
          <button type="submit" className="btn primary" disabled={busy}>{busy ? '저장하는 중…' : '동의하고 계속하기'}</button>
          <button type="button" className="btn" onClick={api.signOut}>동의하지 않고 로그아웃</button>
        </div>
      </form>
    </div>
  );
}
