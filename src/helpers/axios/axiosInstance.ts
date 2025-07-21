import env from "@/config/env/env";
import axios from "axios";

export const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 60000;
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await localStorage.getItem(env.auth_token as string);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Error getting token", err);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        await localStorage.removeItem(env.auth_token as string);
      }
    }
    return Promise.reject(error);
  }
);
