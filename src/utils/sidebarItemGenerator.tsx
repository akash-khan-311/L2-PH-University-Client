import { NavLink } from "react-router-dom";
import type { RouteItem, TAdminSidebarRoute } from "../types";

export const sidebarItemGenerator = (items: RouteItem[], role: string) => {
  const sidebarItems = items.reduce((acc: TAdminSidebarRoute[], route) => {
    if (route.path && route.name) {
      acc.push({
        key: route.name,
        label: <NavLink to={`/${role}/${route.path}`}>{route.name}</NavLink>,
      });
    }

    if (route.children && route.name) {
      acc.push({
        key: route.name,
        label: route.name,
        children: route.children.map((child) => ({
          key: child.name!,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
