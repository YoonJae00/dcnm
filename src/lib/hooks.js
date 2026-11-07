import { useCallback, useEffect, useState } from 'react';
import * as api from './api';

// 표 하나를 불러오고, 어디서든 데이터가 바뀌면 다시 불러옵니다.
export function useTable(table) {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState('');
  const load = useCallback(() => {
    api.list(table).then((r) => { setRows(r); setError(''); }).catch((e) => setError(e.message));
  }, [table]);
  useEffect(() => {
    load();
    return api.onChange(load);
  }, [load]);
  return { rows, error, reload: load };
}

// 표에서 조건에 맞는 행만 (예: 한 프로젝트의 팀 공간 자료). match가 null이면 불러오지 않습니다.
export function useRows(table, match) {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState('');
  const key = match ? JSON.stringify(match) : '';
  const load = useCallback(() => {
    if (!key) return;
    api.listBy(table, JSON.parse(key)).then((r) => { setRows(r); setError(''); }).catch((e) => setError(e.message));
  }, [table, key]);
  useEffect(() => {
    load();
    return api.onChange(load);
  }, [load]);
  return { rows, error, reload: load };
}

// 불러오는 중이면 undefined, 불러오지 못했으면 null
export function useSettings() {
  const [settings, setSettings] = useState(undefined);
  useEffect(() => {
    const load = () => api.getSettings().then(setSettings).catch(() => setSettings(null));
    load();
    return api.onChange(load);
  }, []);
  return settings;
}

export function useItem(table, id) {
  const [state, setState] = useState({ item: undefined, error: '' });
  useEffect(() => {
    const load = () => api.get(table, id)
      .then((item) => setState({ item, error: '' }))
      .catch((e) => setState({ item: null, error: e.message }));
    load();
    return api.onChange(load);
  }, [table, id]);
  return state;
}

// 로그인한 사람 (없으면 null, 확인 중이면 undefined)
export function useUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    let stop = () => {};
    const load = () => api.currentUser().then(setUser).catch(() => setUser(null));
    load();
    api.watchAuth(load).then((s) => { stop = s; });
    return () => stop();
  }, []);
  return user;
}
