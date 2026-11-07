import { useEffect, useState } from 'react';
import * as api from './api';
import { useTable } from './hooks';
import { PRIVACY } from '../data/privacy';

// 개인정보 보호책임자: 이름은 멤버 표에서 직책이 '회장'인 사람(여러 명이면 기수가 가장 늦은 사람),
// 연락처는 운영진 설정 > '개인정보 문의 연락처'를 우선, 없으면 회장 계정 이메일. 둘 다 없으면 null → 화면에서 문의하기 폼으로 안내.
// 회장이 바뀌면 멤버 표와 계정 직책을 바꾸는 것만으로 처리방침에 자동 반영됩니다.
export function usePrivacyOfficer() {
  const { rows } = useTable('members');
  const [contact, setContact] = useState(undefined);
  useEffect(() => {
    let alive = true;
    const load = () => api.getPrivacyContact().then((c) => { if (alive) setContact(c); });
    load();
    const off = api.onChange(load);
    return () => { alive = false; off(); };
  }, []);
  const presidents = (rows || []).filter((m) => m.role === PRIVACY.officerTitle).sort((a, b) => (b.generation ?? 0) - (a.generation ?? 0));
  return {
    name: presidents[0]?.name || PRIVACY.officerFallbackName,
    title: PRIVACY.officerTitle,
    contact, // undefined: 확인 중, null: 자동으로 못 찾음
    loading: rows === null || contact === undefined,
  };
}

const DAY = 24 * 60 * 60 * 1000;

// 보유 기간이 지난 지원·문의인지. 지원서는 모집 마감일, 문의는 접수일 기준입니다.
// (처리방침·지원 폼 동의 문구와 같은 값: PRIVACY.applyRetentionDays / inquiryRetentionDays)
export function retentionDueAt(row, settings) {
  const created = new Date(row.created_at).getTime();
  if (Number.isNaN(created)) return null;
  if (row.kind === 'apply') {
    const dl = settings?.recruit_deadline ? new Date(`${settings.recruit_deadline}T23:59:59`).getTime() : NaN;
    // 마감일이 접수 뒤인 보통의 경우에만 마감일 기준. 마감이 이미 지난 접수분(재모집 등)은 접수일 기준.
    const base = !Number.isNaN(dl) && dl >= created ? dl : created;
    return base + PRIVACY.applyRetentionDays * DAY;
  }
  return created + PRIVACY.inquiryRetentionDays * DAY;
}

export function isRetentionOver(row, settings, now = Date.now()) {
  const due = retentionDueAt(row, settings);
  return due !== null && now > due;
}
