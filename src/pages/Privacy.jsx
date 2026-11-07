import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { usePrivacyOfficer } from '../lib/privacy';
import {
  AGENCIES, COLLECTIONS, EXTERNAL_FONTS, HISTORY, OVERSEAS, PRIVACY, PROCESSORS, SAFETY, STORAGE,
} from '../data/privacy';

function Table({ head, rows, label }) {
  return (
    <div className="table-scroll">
      <table className="policy-table" aria-label={label}>
        <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, k) => (k === 0 ? <th key={k} scope="row">{c}</th> : <td key={k}>{c}</td>))}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function Privacy() {
  const officer = usePrivacyOfficer();
  const P = PRIVACY;
  const isEmail = (officer.contact || '').includes('@') && !/\s/.test(officer.contact);

  return (
    <div className="article policy">
      <header>
        <h1>개인정보 처리방침</h1>
        <p className="meta-line"><span>시행일 {P.effective}</span><span>버전 {P.version}</span></p>
      </header>

      <p>
        {P.operatorFull}(이하 "동아리")는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 빠르게 처리하기 위해 이 처리방침을 정하고 공개합니다.
        동아리는 아래 목적에 꼭 필요한 최소한의 개인정보만 처리합니다. 이 방침은 {P.site} 에서 지원·문의하거나 부원으로 로그인해 쓰는 모든 기능에 적용됩니다.
      </p>

      <section aria-labelledby="pp-1">
        <h2 id="pp-1">1. 개인정보의 처리 목적과 처리하는 항목</h2>
        <p className="small muted">필수 항목은 목적에 꼭 필요한 항목이고, 선택 항목은 동의하지 않아도 지원·가입을 할 수 있습니다.</p>
        <Table label="처리 목적과 항목" head={['구분', '처리 목적', '필수 항목', '선택 항목']} rows={COLLECTIONS.map((c) => [c.who, c.purpose, c.required, c.optional || '없음'])} />
      </section>

      <section aria-labelledby="pp-2">
        <h2 id="pp-2">2. 개인정보의 처리 및 보유 기간</h2>
        <Table label="보유 기간" head={['구분', '보유 기간', '받는 방법']} rows={COLLECTIONS.map((c) => [c.who, c.period, c.how])} />
        <p className="small muted">법령에 따라 따로 보존해야 하는 개인정보는 없습니다.</p>
      </section>

      <section aria-labelledby="pp-3">
        <h2 id="pp-3">3. 14세 미만 아동의 개인정보</h2>
        <p>동아리는 대학생을 대상으로 한 동아리라서 만 14세 미만 아동의 가입·지원을 받지 않으며, 법정대리인 동의 절차도 운영하지 않습니다. 만 14세 미만의 개인정보가 접수된 것을 알게 되면 지체 없이 파기합니다.</p>
      </section>

      <section aria-labelledby="pp-4">
        <h2 id="pp-4">4. 개인정보의 파기 절차 및 방법</h2>
        <ul>
          <li>보유 기간이 지나거나 처리 목적을 이룬 개인정보는 지체 없이 파기합니다.</li>
          <li><b>파기 절차</b>: 파기 사유가 생긴 개인정보를 골라 운영진이 개인정보 보호책임자({officer.title})의 확인 아래 파기합니다. 지원·문의는 운영진 화면에서 모집이 끝난 뒤 {P.applyRetentionDays}일 안에 일괄 파기하고, 보유 기간이 지난 건수를 화면에 알려 줍니다.</li>
          <li><b>파기 방법</b>: 데이터베이스에 저장된 개인정보는 복구할 수 없도록 해당 행을 삭제합니다. 종이 문서로 출력한 것이 있으면 분쇄하거나 소각합니다.</li>
          <li><b>탈퇴 후 남는 정보</b>: 계정을 삭제하면 로그인 계정, 프로필, 프로젝트 참여 신청, 좋아요, 멤버 카드, 초대(로그인 이메일) 기록, 같은 이메일로 접수된 지원·문의가 함께 삭제됩니다. 작성한 글·댓글·문의·프로젝트는 작성자 이름을 "탈퇴한 회원"으로 바꾸어 남기며, 탈퇴할 때 삭제를 선택하면 글·댓글·문의도 지웁니다. 멤버 카드를 운영진이 삭제하면 그 사람의 초대(로그인 이메일) 기록도 함께 삭제됩니다.</li>
        </ul>
      </section>

      <section aria-labelledby="pp-5">
        <h2 id="pp-5">5. 개인정보의 제3자 제공</h2>
        <p>동아리는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 멤버 카드(이름, 기수, 직책, 활동 분야, 소개, 기술, GitHub)와 커뮤니티 글·댓글·프로젝트 글의 작성자 이름은 사이트에 공개되어 누구나 볼 수 있습니다.</p>
      </section>

      <section aria-labelledby="pp-6">
        <h2 id="pp-6">6. 개인정보 처리업무의 위탁</h2>
        <p>동아리는 서비스 운영을 위해 아래와 같이 개인정보 처리 업무를 맡기고 있습니다. 두 업체 모두 국외에 있어 7항에서도 안내합니다.</p>
        <Table label="처리 위탁" head={['수탁자', '위탁하는 업무']} rows={PROCESSORS.map((p) => [p.name, p.task])} />
      </section>

      <section aria-labelledby="pp-7">
        <h2 id="pp-7">7. 개인정보의 국외 이전</h2>
        <p>동아리가 쓰는 서비스의 서버가 외국에 있어, 아래와 같이 개인정보가 국외로 이전됩니다. 제3자 제공이나 위탁과 별도로 알립니다. 국외에서 직접 수집하는 개인정보는 없습니다.</p>
        {OVERSEAS.map((o) => (
          <dl className="policy-dl" key={o.kind}>
            <dt>유형</dt><dd>{o.kind}</dd>
            <dt>법적 근거</dt><dd>{o.basis}</dd>
            <dt>이전받는 자</dt><dd>{o.to}</dd>
            <dt>이전 국가</dt><dd>{o.country}</dd>
            <dt>이전하는 항목</dt><dd>{o.items}</dd>
            <dt>이전 시기와 방법</dt><dd>{o.when}</dd>
            <dt>이용 목적</dt><dd>{o.purpose}</dd>
            <dt>보유·이용 기간</dt><dd>{o.period}</dd>
            <dt>거부 방법과 효과</dt><dd>{o.refuse}</dd>
          </dl>
        ))}
      </section>

      <section aria-labelledby="pp-8">
        <h2 id="pp-8">8. 개인정보의 안전성 확보 조치</h2>
        <dl className="policy-dl">
          {SAFETY.map(([k, v]) => <Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>)}
        </dl>
      </section>

      <section aria-labelledby="pp-9">
        <h2 id="pp-9">9. 개인정보 자동 수집 장치(브라우저 저장소)의 설치·운영 및 거부</h2>
        <p>동아리는 광고·분석 쿠키를 쓰지 않고, 이용자의 행태정보를 수집하거나 제3자가 수집하게 하지 않습니다. 대신 화면을 편하게 쓰기 위해 이용자의 브라우저 저장소에 아래 값을 저장합니다. 이 값은 이용자의 기기에만 있고 동아리로 전송되지 않습니다.</p>
        <Table label="브라우저 저장소" head={['저장 이름', '용도', '보관 기간']} rows={STORAGE} />
        <p><b>거부 방법</b>: 브라우저 설정의 "사이트 데이터 삭제" 또는 "저장 차단"으로 지우거나 막을 수 있습니다. 막아도 사이트를 볼 수 있지만, 로그인 상태가 유지되지 않으므로 부원 로그인은 쓸 수 없습니다.</p>
        <p><b>외부 서버 접속</b>: 글꼴을 내려받기 위해 이용자의 브라우저가 아래 서버에 직접 접속하며, 이때 접속 IP 주소 등이 해당 업체에 전달될 수 있습니다. 동아리는 이 정보를 받거나 저장하지 않습니다.</p>
        <Table label="외부 글꼴 서버" head={['접속처', '내려받는 것']} rows={EXTERNAL_FONTS} />
      </section>

      <section aria-labelledby="pp-10">
        <h2 id="pp-10">10. 정보주체와 법정대리인의 권리·의무 및 행사 방법</h2>
        <ul>
          <li>이용자는 언제든지 자신의 개인정보를 <b>열람, 정정·삭제, 처리 정지</b>하거나 <b>동의를 철회</b>할 수 있습니다. 만 14세 이상 미성년자는 본인이 하거나 법정대리인을 통해 할 수 있습니다.</li>
          <li><b>부원</b>은 사이트의 <Link to="/me">내 활동 &gt; 내 정보</Link>에서 저장된 정보를 직접 확인하고, 계정을 삭제(탈퇴)해 동의를 철회할 수 있습니다. 정정은 운영진에게 요청하면 처리합니다.</li>
          <li><b>지원자·문의자</b>는 <Link to={P.inquiryPath}>문의하기</Link>로 접수하거나 아래 연락처로 열람·삭제를 요청할 수 있습니다. 같은 이메일로 접수된 것인지 확인한 뒤 처리합니다.</li>
          <li>서면, 전자우편, 인터넷(문의하기) 등으로 요청할 수 있으며, 요청한 날부터 {P.replyDays}일 안에 처리 결과를 알립니다.</li>
          <li>요청한 사람이 본인이거나 정당한 대리인인지 확인합니다. 다른 법령에서 그 개인정보가 수집 대상으로 정해져 있는 경우에는 삭제를 요구할 수 없고, 법령에 따라 열람·처리 정지가 제한될 수 있습니다.</li>
          <li>동의 거부권: 개인정보 수집·이용과 국외 이전에 동의하지 않을 수 있습니다. 필수 항목에 동의하지 않으면 온라인 지원·문의와 부원 로그인이 어렵습니다. 선택 항목(전화번호)에 동의하지 않아도 지원할 수 있습니다.</li>
        </ul>
      </section>

      <section aria-labelledby="pp-11">
        <h2 id="pp-11">11. 개인정보 보호책임자</h2>
        <p>동아리는 개인정보 처리에 관한 업무를 총괄하고 개인정보 처리와 관련한 불만 처리·피해 구제를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <dl className="policy-dl" aria-live="polite">
          <dt>개인정보 보호책임자</dt><dd>{officer.name} ({officer.title})</dd>
          <dt>개인정보 보호 담당</dt><dd>{P.officerDept}</dd>
          <dt>연락처(이메일)</dt>
          <dd>
            {officer.loading ? '불러오는 중…' : officer.contact
              ? (isEmail ? <a href={`mailto:${officer.contact}`}>{officer.contact}</a> : officer.contact)
              : <>이메일 주소를 불러오지 못했습니다. <Link to={P.inquiryPath}>문의하기</Link>로 접수해 주세요.</>}
          </dd>
        </dl>
        <p className="small muted">개인정보와 관련한 문의, 불만 처리, 피해 구제는 위 책임자와 담당에게 하실 수 있고, 지체 없이 답변하고 처리하겠습니다.</p>
      </section>

      <section aria-labelledby="pp-12">
        <h2 id="pp-12">12. 권익침해 구제 방법</h2>
        <p>개인정보 침해로 인한 피해 구제나 상담이 필요하면 아래 기관에 문의할 수 있습니다.</p>
        <Table label="권익침해 구제 기관" head={['기관', '전화', '누리집']} rows={AGENCIES} />
      </section>

      <section aria-labelledby="pp-13">
        <h2 id="pp-13">13. 개인정보 처리방침의 변경</h2>
        <p>이 방침이 바뀌면 시행일과 바뀐 내용을 이 페이지에 계속 공개하고, 로그인한 부원에게는 다시 동의를 받습니다. 개인정보 항목이나 처리 목적처럼 이용자의 권리에 큰 영향이 있는 변경은 바뀌기 전과 후를 비교해 따로 알립니다.</p>
        <Table label="변경 이력" head={['버전', '적용 시작', '적용 끝', '내용']} rows={HISTORY.map((h) => [h.version, h.from, h.to, h.note])} />
        <p className="small muted">이전 버전이 생기면 이 표에 적용 기간과 함께 남깁니다.</p>
      </section>
    </div>
  );
}
