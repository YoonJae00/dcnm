// 데이터 계층: Supabase 환경변수가 있으면 Supabase를, 없으면 브라우저 저장소의 예시 데이터를 씁니다.
// 화면 코드는 이 파일의 함수만 부르므로, 저장소를 바꿔도 페이지는 고칠 필요가 없습니다.
import { seed } from '../data/seed';
import { PRIVACY } from '../data/privacy';

const SB_URL = import.meta.env.VITE_SUPABASE_URL;
const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const mode = SB_URL && SB_KEY ? 'supabase' : 'local';

/* ---------- 변경 알림 ---------- */
const bus = new EventTarget();
export function onChange(fn) {
  bus.addEventListener('change', fn);
  return () => bus.removeEventListener('change', fn);
}
const emit = () => bus.dispatchEvent(new Event('change'));

/* ---------- 정렬 규칙 ---------- */
const byDateDesc = (a, b) => String(b.created_at || '').localeCompare(String(a.created_at || ''));
const byDateAsc = (a, b) => -byDateDesc(a, b);
const ORDER = {
  members: (a, b) => ((a.generation ?? 999) - (b.generation ?? 999)) || ((a.sort ?? 0) - (b.sort ?? 0)) || a.name.localeCompare(b.name),
  projects: byDateDesc,
  notices: (a, b) => (Number(!!b.pinned) - Number(!!a.pinned)) || byDateDesc(a, b),
  events: (a, b) => a.date.localeCompare(b.date) || String(a.start_time || '').localeCompare(String(b.start_time || '')),
  submissions: byDateDesc,
  applications: byDateDesc,
  inquiries: byDateAsc,
  posts: byDateDesc,
  comments: byDateAsc,
  post_likes: () => 0,
};

/* ---------- 로컬(예시) 저장소 ---------- */
const DB_KEY = 'dcm-site-db-v2';
let memory = null;
function readDb() {
  if (memory) return memory;
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) {
      memory = { ...structuredClone(seed), ...JSON.parse(raw) };
      return memory;
    }
  } catch { /* 저장소를 못 쓰면 메모리로만 동작 */ }
  memory = structuredClone(seed);
  return memory;
}
function writeDb() {
  try { localStorage.setItem(DB_KEY, JSON.stringify(memory)); } catch { /* 무시 */ }
}
const uid = () => (globalThis.crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));

export function resetDemo() {
  memory = structuredClone(seed);
  writeDb();
  emit();
}

/* ---------- Supabase ---------- */
let clientPromise = null;
function sb() {
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then((m) =>
      m.createClient(SB_URL, SB_KEY, { auth: { flowType: 'pkce', detectSessionInUrl: true, persistSession: true } })
    );
  }
  return clientPromise;
}
function check({ data, error }) {
  if (error) throw new Error(error.message);
  return data;
}

/* ---------- 콘텐츠 (모든 표 공통) ---------- */
export async function list(table) {
  const order = ORDER[table] || byDateDesc;
  if (mode === 'local') return [...(readDb()[table] || [])].sort(order);
  const c = await sb();
  return check(await c.from(table).select('*')).sort(order);
}

export async function get(table, id) {
  if (mode === 'local') return (readDb()[table] || []).find((r) => String(r.id) === String(id)) || null;
  const c = await sb();
  return check(await c.from(table).select('*').eq('id', id).maybeSingle());
}

export async function save(table, row) {
  const clean = { ...row };
  if (!clean.id) delete clean.id;
  if (mode === 'local') {
    const db = readDb();
    const rows = db[table] || (db[table] = []);
    let saved;
    if (clean.id) {
      const i = rows.findIndex((r) => r.id === clean.id);
      saved = i >= 0 ? (rows[i] = { ...rows[i], ...clean }) : (rows.push(clean), clean);
    } else {
      saved = { ...clean, id: uid(), created_at: new Date().toISOString() };
      rows.push(saved);
    }
    writeDb();
    emit();
    return saved;
  }
  const c = await sb();
  // 새로 만들 때 비워 둔 칸(null)은 보내지 않아요. 보내면 DB 기본값(예: members.sort = 0) 대신 null이 들어가
  // not null 제약에 걸립니다.
  if (!clean.id) for (const k of Object.keys(clean)) if (clean[k] === null || clean[k] === undefined) delete clean[k];
  const saved = check(await c.from(table).upsert(clean).select().single());
  emit();
  return saved;
}

export async function remove(table, id) {
  if (mode === 'local') {
    const db = readDb();
    db[table] = (db[table] || []).filter((r) => r.id !== id);
    writeDb();
    emit();
    return;
  }
  const c = await sb();
  check(await c.from(table).delete().eq('id', id));
  emit();
}

export async function removeAll(table) {
  if (mode === 'local') {
    readDb()[table] = [];
    writeDb();
    emit();
    return;
  }
  const c = await sb();
  check(await c.from(table).delete().not('id', 'is', null));
  emit();
}

/* ---------- 모집 설정 ---------- */
export async function getSettings() {
  if (mode === 'local') return { ...seed.settings, ...readDb().settings };
  const c = await sb();
  return check(await c.from('settings').select('*').eq('id', 1).maybeSingle()) || { ...seed.settings };
}

export async function saveSettings(s) {
  if (mode === 'local') {
    readDb().settings = { ...s, id: 1 };
    writeDb();
    emit();
    return;
  }
  const c = await sb();
  check(await c.from('settings').upsert({ ...s, id: 1 }));
  emit();
}

/* ---------- 지원·문의 접수 (비회원도 가능) ---------- */
// 동의 기록(처리방침 버전·국외 이전·전화번호 선택 동의)을 접수 데이터에 함께 저장합니다. 동의 시각은 DB가 서버 시각으로 넣습니다.
export async function submit(payload) {
  const row = {
    ...payload,
    consent: true,
    consent_overseas: true,
    consent_phone: !!payload.phone,
    consent_version: PRIVACY.version,
  };
  if (mode === 'local') {
    const now = new Date().toISOString();
    readDb().submissions.push({ ...row, id: uid(), created_at: now, consented_at: now });
    writeDb();
    emit();
    return;
  }
  const c = await sb();
  check(await c.from('submissions').insert(row));
}

/* ---------- 프로젝트 참여 ---------- */
// 참여 신청을 수락하면 신청자를 프로젝트 멤버에 넣고, 정원이 차면 진행 중으로 바꿀지 작성자가 정합니다.
export async function decideApplication(app, accept) {
  await save('applications', { id: app.id, status: accept ? 'accepted' : 'rejected' });
  if (accept) {
    const p = await get('projects', app.project_id);
    if (p && !(p.member_ids || []).includes(app.user_id)) {
      const ids = p.member_ids || [];
      const names = p.member_names?.length === ids.length ? p.member_names : ids.map(() => '');
      await save('projects', { id: p.id, member_ids: [...ids, app.user_id], member_names: [...names, app.user_name] });
    }
  }
}

export async function toggleLike(postId, userId) {
  const likes = await list('post_likes');
  const mine = likes.find((l) => l.post_id === postId && l.user_id === userId);
  if (mine) await remove('post_likes', mine.id);
  else await save('post_likes', { post_id: postId, user_id: userId });
}

/* ---------- 개인 로그인 ---------- */
// 로컬 모드: 예시 멤버 중 한 명으로 로그인 (시연용)
// Supabase 모드: 처음엔 이메일 로그인 링크, 비밀번호를 정한 뒤로는 이메일 + 비밀번호. profiles 표
const SESSION_KEY = 'dcm-user';
let localUserId = null;
const STAFF = new Set(['회장', '부회장', '운영진']);

export async function demoAccounts() {
  return list('members');
}

// 매직 링크(PKCE)로 돌아오면 supabase-js가 클라이언트를 만들 때 주소의 ?code=를 세션으로 바꾸고 code를 지웁니다.
// 다른 브라우저에서 링크를 열었거나 링크가 만료되면 교환이 안 되고 ?code=가 남으므로, 여기서 지우고 그 사실을 기억합니다.
let linkFailed = false;
export function loginLinkFailed() {
  return linkFailed;
}
function clearCodeFromUrl() {
  const url = new URL(location.href);
  if (!url.searchParams.has('code')) return false;
  url.searchParams.delete('code');
  url.searchParams.delete('sb_flow_id');
  history.replaceState(history.state, '', url.toString()); // 해시(#/me 등)는 그대로 둡니다
  return true;
}

// 초대 받기는 로그인한 사람마다 페이지를 연 뒤 한 번만 시도합니다.
const claimTried = new Set();
let userInFlight = null;

async function loadSupabaseUser() {
  const c = await sb();
  const { data } = await c.auth.getSession(); // 위의 URL 교환이 끝난 뒤에 돌아옵니다
  if (clearCodeFromUrl() && !data.session) linkFailed = true;
  const u = data.session?.user;
  if (!u) return null;
  linkFailed = false;
  const readProfile = async () => check(await c.from('profiles').select('*').eq('id', u.id).maybeSingle());
  let profile = await readProfile();
  if ((!profile || !profile.approved) && !claimTried.has(u.id)) {
    claimTried.add(u.id);
    // 운영진이 이 이메일로 초대해 두었으면 승인·이름·직책이 초대 값으로 맞춰집니다. 초대가 없으면 아무 일도 없습니다.
    const { data: claimed, error } = await c.rpc('claim_invite');
    if (error) console.warn('초대 확인 실패:', error.message);
    if (claimed) profile = await readProfile();
  }
  if (!profile) {
    profile = check(await c.from('profiles').insert({ id: u.id, email: u.email, name: u.email.split('@')[0] }).select().single());
  }
  const admin = check(await c.from('admins').select('email').eq('email', u.email).maybeSingle());
  return {
    ...profile,
    isAdmin: !!admin,
    approved: !!profile.approved || !!admin,
    // 비밀번호 설정 화면을 보여 줄지에만 씁니다. 사용자가 바꿀 수 있는 값이라 권한 판단에는 쓰지 않습니다.
    needsPassword: !u.user_metadata?.password_set,
    // 처리방침 동의가 없거나 예전 버전에 동의했으면 다시 받습니다.
    needsPrivacy: profile.privacy_version !== PRIVACY.version,
  };
}

export async function currentUser() {
  if (mode === 'local') {
    try { localUserId = localUserId || sessionStorage.getItem(SESSION_KEY); } catch { /* 무시 */ }
    if (!localUserId) return null;
    const m = (readDb().members || []).find((x) => x.id === localUserId);
    if (!m) return null;
    return { id: m.id, name: m.name, generation: m.generation, part: m.part, role: m.role, isAdmin: STAFF.has(m.role), approved: true, needsPassword: false, needsPrivacy: false };
  }
  // 여러 화면이 동시에 불러도 profile 만들기·초대 받기가 한 번만 일어나게 묶습니다.
  if (!userInFlight) userInFlight = loadSupabaseUser().finally(() => { userInFlight = null; });
  return userInFlight;
}

// 비밀번호 설정·변경 (Supabase 모드). password_set 표시는 '처음 비밀번호 설정 화면'을 다시 띄우지 않으려는 용도입니다.
export async function setPassword(password) {
  if (mode === 'local') return;
  const c = await sb();
  check(await c.auth.updateUser({ password, data: { password_set: true } }));
  emit();
}

export async function signIn(input) {
  if (mode === 'local') {
    localUserId = input;
    try { sessionStorage.setItem(SESSION_KEY, input); } catch { /* 무시 */ }
    emit();
    return { done: true };
  }
  const c = await sb();
  const redirect = `${location.origin}${location.pathname}#/me`;
  check(await c.auth.signInWithOtp({ email: input.trim(), options: { emailRedirectTo: redirect } }));
  return { sent: true };
}

// 비밀번호 로그인 (첫 로그인 때 비밀번호를 정한 계정). Supabase 모드에서만 씁니다.
export async function signInWithPassword(email, password) {
  const c = await sb();
  check(await c.auth.signInWithPassword({ email: email.trim(), password }));
  emit();
}

export async function signOut() {
  if (mode === 'local') {
    localUserId = null;
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* 무시 */ }
    emit();
    return;
  }
  const c = await sb();
  check(await c.auth.signOut());
  emit();
}

export async function watchAuth(fn) {
  if (mode === 'local') return onChange(fn);
  const c = await sb();
  const { data } = c.auth.onAuthStateChange(() => fn());
  return () => data.subscription.unsubscribe();
}

/* ---------- 멤버 초대 (운영진, Supabase 모드) ---------- */
// 로그인 이메일은 공개 표 members가 아니라 운영진만 보는 member_invites에 둡니다.
// 예시 모드에서는 이메일 로그인이 없으므로 빈 목록·아무 일 없음으로 동작합니다.
export const normalizeEmail = (s) => String(s || '').trim().toLowerCase();

export async function listInvites() {
  if (mode === 'local') return [];
  const c = await sb();
  return check(await c.from('member_invites').select('*'));
}

export async function saveInvite(invite) {
  if (mode === 'local') return null;
  const c = await sb();
  const row = { ...invite, email: normalizeEmail(invite.email) };
  const saved = check(await c.from('member_invites').upsert(row, { onConflict: 'email' }).select().single());
  emit();
  return saved;
}

export async function removeInvite(email) {
  if (mode === 'local') return;
  const c = await sb();
  check(await c.from('member_invites').delete().eq('email', normalizeEmail(email)));
  emit();
}

/* ---------- 개인정보 처리방침 동의 · 연락처 · 계정 삭제 ---------- */
// 부원 계정의 동의 기록. profiles는 본인이 직접 못 고치므로 security definer 함수가 두 칸만 씁니다. 예시 모드에서는 아무 일도 없습니다.
export async function agreePrivacy() {
  if (mode === 'local') return;
  const c = await sb();
  check(await c.rpc('agree_privacy', { version: PRIVACY.version }));
  emit();
}

// 처리방침에 보여 줄 개인정보 문의 연락처: 운영진이 설정에 적은 값, 없으면 회장 계정 이메일(DB 함수). 없으면 null.
export async function getPrivacyContact() {
  if (mode === 'local') return (readDb().settings?.privacy_contact || '').trim() || null;
  try {
    const c = await sb();
    const { data, error } = await c.rpc('privacy_contact');
    return error ? null : data || null;
  } catch { return null; }
}

// 계정 삭제(탈퇴). deleteContent가 true면 내가 쓴 글·댓글·문의도 지우고, 아니면 이름만 '탈퇴한 회원'으로 바꿔 남깁니다.
export async function deleteMyAccount(deleteContent) {
  if (mode === 'local') {
    const db = readDb();
    const id = localUserId;
    const me = (db.members || []).find((m) => m.id === id);
    if (!me) return;
    const gone = '탈퇴한 회원';
    if (deleteContent) {
      db.posts = (db.posts || []).filter((p) => p.author_id !== id);
      db.comments = (db.comments || []).filter((x) => x.user_id !== id);
      db.inquiries = (db.inquiries || []).filter((x) => x.user_id !== id);
    }
    for (const [t, idKey, nameKey] of [['posts', 'author_id', 'author_name'], ['comments', 'user_id', 'user_name'], ['inquiries', 'user_id', 'user_name'], ['projects', 'author_id', 'author_name']]) {
      for (const r of db[t] || []) if (r[idKey] === id) { r[nameKey] = gone; r[idKey] = null; }
    }
    db.applications = (db.applications || []).filter((a) => a.user_id !== id);
    db.post_likes = (db.post_likes || []).filter((l) => l.user_id !== id);
    for (const p of db.projects || []) {
      const ids = p.member_ids || [];
      const i = ids.indexOf(id);
      if (i >= 0) { p.member_ids = ids.filter((x) => x !== id); p.member_names = (p.member_names || []).filter((_, k) => k !== i); }
    }
    db.members = (db.members || []).filter((m) => m.id !== id);
    writeDb();
    await signOut();
    return;
  }
  const c = await sb();
  check(await c.rpc('delete_my_account', { delete_content: !!deleteContent }));
  await c.auth.signOut();
  emit();
}
