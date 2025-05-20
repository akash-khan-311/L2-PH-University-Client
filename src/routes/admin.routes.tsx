import type { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TAdminSidebarRoute = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebarRoute[];
};

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

// * Programmatically generate the routes for the admin section

export const adminRoutes = adminPaths.reduce((acc: TRoute[], route) => {
  if (route.path && route.element) {
    acc.push({
      path: route.path,
      element: route.element,
    });
  }

  if (route.children) {
    route.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

export const adminSidebarRoutes = adminPaths.reduce(
  (acc: TAdminSidebarRoute[], route) => {
    if (route.path && route.name) {
      acc.push({
        key: route.name,
        label: <NavLink to={`/admin/${route.path}`}>{route.name}</NavLink>,
      });
    }

    if (route.children && route.name) {
      acc.push({
        key: route.name,
        label: route.name,
        children: route.children.map((child) => {
          return {
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          };
        }),
      });
    }

    return acc;
  },
  []
);
