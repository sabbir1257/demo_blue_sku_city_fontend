import { api } from "../api";

export const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/blog",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["blog"],
    }),
    getAllBlog: builder.query({
      query: () => {
        return {
          url: "/admin/blog",
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
    displayChange: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/blog/display/${data?.id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/blog/${data?.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blog"],
    }),
    updataBlog: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/blog/${data?.id}`,
          method: "PUT",
          data,
        };
      },
      invalidatesTags: ["blog"],
    }),
    singleBlog: builder.query({
      query: (id) => {
        return {
          url: `/admin/blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useUploadBlogMutation,
  useGetAllBlogQuery,
  useDisplayChangeMutation,
  useDeleteBlogMutation,
  useSingleBlogQuery,
  useUpdataBlogMutation,
} = blogApi;
