// 데이터 계층: Supabase 환경변수가 있으면 Supabase를, 없으면 브라우저 저장소의 예시 데이터를 씁니다.
// 화면 코드는 이 파일의 함수만 부르므로, 저장소를 바꿔도 페이지는 고칠 필요가 없습니다.
import { seed } from '../data/seed';

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
export async function submit(payload) {
  const row = { ...payload, consent: true };
  if (mode === 'local') {
    readDb().submissions.push({ ...row, id: uid(), created_at: new Date().toISOString() });
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
// Supabase 모드: 이메일 로그인 링크 + profiles 표
const SESSION_KEY = 'dcm-user';
let localUserId = null;
const STAFF = new Set(['회장', '부회장', '운영진']);

export async function demoAccounts() {
  return list('members');
}

export async function currentUser() {
  if (mode === 'local') {
    try { localUserId = localUserId || sessionStorage.getItem(SESSION_KEY); } catch { /* 무시 */ }
    if (!localUserId) return null;
    const m = (readDb().members || []).find((x) => x.id === localUserId);
    if (!m) return null;
    return { id: m.id, name: m.name, generation: m.generation, part: m.part, role: m.role, isAdmin: STAFF.has(m.role), approved: true };
  }
  const c = await sb();
  const { data } = await c.auth.getSession();
  const u = data.session?.user;
  if (!u) return null;
  let profile = check(await c.from('profiles').select('*').eq('id', u.id).maybeSingle());
  if (!profile) {
    profile = check(await c.from('profiles').insert({ id: u.id, email: u.email, name: u.email.split('@')[0] }).select().single());
  }
  const admin = check(await c.from('admins').select('email').eq('email', u.email).maybeSingle());
  return { ...profile, isAdmin: !!admin, approved: !!profile.approved || !!admin };
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

// 비밀번호 로그인 (운영진 테스트 계정처럼 비밀번호가 있는 계정용). Supabase 모드에서만 씁니다.
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
  await c.auth.signOut();
  emit();
}

export async function watchAuth(fn) {
  if (mode === 'local') return onChange(fn);
  const c = await sb();
  const { data } = c.auth.onAuthStateChange(() => fn());
  return () => data.subscription.unsubscribe();
}
