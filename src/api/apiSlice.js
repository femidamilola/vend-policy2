import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vend-policy-api.fly.dev",
    prepareHeaders: (headers) => {
      const token = getCookie("token");
      console.log(token);
      headers.set("Authorization", token);
      return headers;
    },
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (details) => ({
        url: "/auth/signup",
        method: "POST",
        body: details,
      }),
      invalidatesTags: ["Todos"],
    }),
    signIn: builder.mutation({
      query: (details) => ({
        url: `/auth/login`,
        method: "POST",
        body: details,
      }),
      invalidatesTags: ["Todos"],
    }),
    getPackages: builder.query({
      query: () => "/user/dashboard",

      providesTags: ["Todos"],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useGetPackagesQuery } =
  apiSlice;
