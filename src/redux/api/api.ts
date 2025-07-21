import env from "@/config/env/env";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: env.api_url as string,
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "gallery", "blog", "team"],
});
