
import {
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
  type DefinitionType,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:5000/api/v1";
const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) headers.set("authorization", `${token}`);

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if(result?.error?.status === 400){
    const errorData = result.error.data as { message?: string };
    toast.error(errorData?.message || "An error occurred", {
      autoClose: 3000,
      position: "bottom-right",
      theme: "dark",
    });
  }
  if (result.error?.status === 401) {
    //* Send Refresh Token


    const res = await fetch(`${baseUrl}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const { data } = await res.json();

    if (data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user, token: data?.accessToken }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
