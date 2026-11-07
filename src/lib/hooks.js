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

export function useSettings() {
  const [settings, setSettings] = useState(null);
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
