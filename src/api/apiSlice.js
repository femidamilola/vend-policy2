import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vend-policy-api.fly.dev",
    prepareHeaders: (headers) => {
      const token = getCookie("token");
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
    ///product/health/uploadDocument
    postForm: builder.mutation({
      query: (form) => ({
        url: `/product/health/submitProposalForm`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    submitMotorForm: builder.mutation({
      query: (form) => ({
        url: `/product/motor/submitProposalForm`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    submitClaimsForm: builder.mutation({
      query: (form) => ({
        url: `/product/claims`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    submitTravelForm: builder.mutation({
      query: (form) => ({
        url: `/product/travel/submitProposalForm`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    uploadDocument: builder.mutation({
      query: (form) => ({
        url: `/product/health/uploadDocument`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    uploadMotorDocument: builder.mutation({
      query: (form) => ({
        url: `/product/motor/uploadDocument`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    uploadComprehensiveDocument: builder.mutation({
      query: (form) => ({
        url: `/product/comprehensive/uploadDocument`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    verifyPayment: builder.mutation({
      query: (data) => ({
        url: `/verifyPayment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    setPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/setPassword`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    pay: builder.mutation({
      query: (form) => ({
        url: `/pay`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    uploadClaimsDocument: builder.mutation({
      query: (form) => ({
        url: `/product/claims/uploadDoc`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
    uploadTravelDocument: builder.mutation({
      query: (form) => ({
        url: `/product/travel/uploadDocument`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetPackagesQuery,
  useSubmitClaimsFormMutation,
  usePostFormMutation,
  useUploadDocumentMutation,
  useSubmitMotorFormMutation,
  useUploadComprehensiveDocumentMutation,
  useUploadMotorDocumentMutation,
  useUploadClaimsDocumentMutation,
  useSubmitTravelFormMutation,
  useUploadTravelDocumentMutation,
  usePayMutation,
  useSetPasswordMutation,
  useVerifyPaymentMutation
} = apiSlice;
