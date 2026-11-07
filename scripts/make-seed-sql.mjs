// src/data/seed.js의 예시 데이터를 Supabase용 SQL로 바꿉니다.
// 사용법: npm run seed-sql  ->  supabase/seed.sql 생성
import { seed } from '../src/data/seed.js';

const q = (v) => {
  if (v === null || v === undefined || v === '') return 'null';
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (Array.isArray(v)) return `array[${v.map(q).join(', ')}]::text[]`;
  return `'${String(v).replace(/'/g, "''")}'`;
};

const out = ['-- 예시 데이터 (schema.sql 실행 후 실행)', ''];
const s = seed.settings;
out.push(
  `insert into settings (id, recruit_open, recruit_title, recruit_start, recruit_deadline, landing_enabled, recruit_details, intro, room, links) values (1, ${q(s.recruit_open)}, ${q(s.recruit_title)}, ${q(s.recruit_start)}, ${q(s.recruit_deadline)}, ${q(s.landing_enabled)}, '${JSON.stringify(s.recruit_details).replace(/'/g, "''")}'::jsonb, ${q(s.intro)}, ${q(s.room)}, '${JSON.stringify(s.links).replace(/'/g, "''")}'::jsonb) on conflict (id) do update set recruit_open = excluded.recruit_open, recruit_title = excluded.recruit_title, recruit_start = excluded.recruit_start, recruit_deadline = excluded.recruit_deadline, landing_enabled = excluded.landing_enabled, recruit_details = excluded.recruit_details, intro = excluded.intro, room = excluded.room, links = excluded.links;`,
  ''
);

// 프로젝트·게시글은 로그인한 사람(profiles)과 연결되므로 예시로 넣지 않습니다. 사이트에서 직접 올리세요.
const tables = {
  members: ['name', 'generation', 'role', 'part', 'intro', 'tags', 'github', 'sort'],
  notices: ['title', 'body', 'pinned', 'created_at'],
  events: ['title', 'date', 'start_time', 'end_time', 'place', 'kind', 'note'],
};
for (const [table, cols] of Object.entries(tables)) {
  for (const row of seed[table]) {
    out.push(`insert into ${table} (${cols.join(', ')}) values (${cols.map((c) => q(row[c])).join(', ')});`);
  }
  out.push('');
}
console.log(out.join('\n'));
