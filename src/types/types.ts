import type { ReactNode } from "react";

export type TRoute = {
  name?: string;
  path: string;
  element: ReactNode;
};

export type TAdminSidebarRoute = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebarRoute[];
};

export type RouteItem = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoute[];
};
