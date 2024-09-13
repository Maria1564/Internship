import axios from "axios";
import { memoizedRefreshToken } from "./refreshToken";

export const axiosPublic = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPublic.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    console.log(".interceptors.request:", config); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => console.log("Interceptor error:", err.message)
);

axiosPublic.interceptors.response.use(
  response => response,
  async err => {
    console.log(".interceptors.response Token:", err)
    if (axios.isAxiosError(err)) {
      if (err.status === 401) {
        const res = await memoizedRefreshToken();

        const config = err.config;
        if (config) {
          config.headers.Authorization = `Bearer ${res.token}`;
          return axiosPublic(config);
        }
      }
    }

    return err
  }
);
