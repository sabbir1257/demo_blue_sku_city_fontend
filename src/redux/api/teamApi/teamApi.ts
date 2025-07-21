import { api } from "../api";

export const teamApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/teams",
          contentType: "multipart/form-data",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["team"],
    }),
    getAllTeam: builder.query({
      query: () => {
        return {
          url: "/admin/teams",
          method: "GET",
        };
      },
      providesTags: ["team"],
    }),
    deleteTeamMembers: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/teams/${data?.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["team"],
    }),
    updateTeamMember: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/teams/${data?.id}`,
          contentType: "multipart/form-data",
          method: "POST",
          data: data?.data,
        };
      },
      invalidatesTags: ["team"],
    }),
    getAllTeamMembersByPublic: builder.query({
      query: () => {
        return {
          url: "/public/teams",
          method: "GET",
        };
      },
      providesTags: ["team"],
    })
  }),
});

export const {
  useCreateTeamMutation,
  useGetAllTeamQuery,
  useDeleteTeamMembersMutation,
  useUpdateTeamMemberMutation,
  useGetAllTeamMembersByPublicQuery
} = teamApi;
