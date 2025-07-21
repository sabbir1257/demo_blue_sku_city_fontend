import { api } from "../api";

export const galleryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadImages: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/gallery",
          contentType: "multipart/form-data",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["gallery"],
    }),
    getAllGalleryImages: builder.query({
      query: (data) => {
        return {
          url: "/admin/gallery",
          method: "GET",
        };
      },
      providesTags: ["gallery"],
    }),
    deleteGalleryImage: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/gallery/${data?.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["gallery"],
    }),
    featureChangeStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/gallery/feature/${data?.id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["gallery"],
    }),
    heroChangeStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/gallery/hero/${data?.id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["gallery"],
    }),
  }),
});

export const {
  useUploadImagesMutation,
  useGetAllGalleryImagesQuery,
  useDeleteGalleryImageMutation,
  useFeatureChangeStatusMutation,
  useHeroChangeStatusMutation,
} = galleryApi;
