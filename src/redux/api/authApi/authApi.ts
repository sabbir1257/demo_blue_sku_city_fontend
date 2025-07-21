import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    userData: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET",
        };
      },
      providesTags: ["auth"],
    }),
    logOut: builder.mutation({
      query: () => {
        return {
          url: "/logout",
          method: "POST",
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useLoginUserMutation, useUserDataQuery, useLogOutMutation } =
  authApi;
