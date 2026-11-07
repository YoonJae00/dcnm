import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { navLinks } from "@/data/site";
import * as api from "../../lib/api.js";

/** 랜딩 Activities에 보일 프로젝트 한 건 (projects 표의 일부) */
export type ActivityProject = {
  id: string;
  status: "ongoing" | "recruiting" | "done";
  kind: string;
  title: string;
  summary?: string | null;
  period?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  tags?: string[] | null;
};

type State = {
  /** 불러오는 중이면 false */
  ready: boolean;
  /** 운영진이 체크한 순서 그대로. 삭제된 id는 빠져 있어요. */
  items: ActivityProject[];
};

const ActivitiesContext = createContext<State>({ ready: true, items: [] });

/**
 * settings.landing_projects(id 배열)와 projects 표를 합쳐서 랜딩이 보여 줄 프로젝트 목록을 만들어요.
 * 체크한 게 없으면 표를 불러오지 않고 바로 빈 목록이에요.
 */
export function ActivitiesProvider({ ids, children }: { ids: string[] | null | undefined; children: ReactNode }) {
  const key = (ids ?? []).join(",");
  const [rows, setRows] = useState<ActivityProject[] | null>(null);

  useEffect(() => {
    if (!key) return;
    let alive = true;
    const load = () =>
      api
        .list("projects")
        .then((r: ActivityProject[]) => alive && setRows(r))
        .catch(() => alive && setRows([]));
    load();
    const off = api.onChange(load);
    return () => {
      alive = false;
      off?.();
    };
  }, [key]);

  const value = useMemo<State>(() => {
    if (!key) return { ready: true, items: [] };
    if (!rows) return { ready: false, items: [] };
    const byId = new Map(rows.map((r) => [r.id, r]));
    const items = key.split(",").map((id) => byId.get(id)).filter((p): p is ActivityProject => !!p);
    return { ready: true, items };
  }, [key, rows]);

  return <ActivitiesContext.Provider value={value}>{children}</ActivitiesContext.Provider>;
}

export const useActivities = () => useContext(ActivitiesContext);

/** 헤더·푸터 메뉴. 보여 줄 활동이 없으면 '활동' 링크도 빼요. */
export function useNavLinks() {
  const { ready, items } = useActivities();
  const show = ready && items.length > 0;
  return navLinks.filter((l) => show || l.href !== "/#activities");
}
