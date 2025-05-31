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

export type TUser = {
  role: string;
  userId: string;
  iat: number;
  exp: number;
};


export type TError = {
  data: {
    message: string;
    stack: string;  
    success: boolean;
  }
  status: number
}


export type TSemesterType = {
  _id: string;
  year: string;
  name: string;
  code: string;
  startMonth: string;
  endMonth: string;
}



export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number
}


export type TResponse = {
  data: any;
  error: TError;
  meta?: TMeta
  success: boolean;
  message: string
}
