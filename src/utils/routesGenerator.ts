import type { RouteItem, TRoute } from "../types";

export const routesGenerator = (items: RouteItem[]): TRoute[] => {
  const routes = items.reduce((acc: TRoute[], route: RouteItem) => {
    if (route.path && route.element) {
      acc.push({
        path: route.path,
        element: route.element,
      });
    }

    if (route.children) {
      route.children.forEach((child: TRoute) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
