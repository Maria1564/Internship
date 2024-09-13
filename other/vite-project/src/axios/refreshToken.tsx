import axios from "axios";
import { axiosPublic } from "./axiosPublic";
import mem from "mem";

export const refreshTokenFn = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const { data } = await axiosPublic.post("/auth/refresh", {
      refreshToken: refreshToken,
    });
    const newRefreshToken = data.refreshToken;
    console.log(data)
    localStorage.setItem("refreshToken", newRefreshToken);
    localStorage.setItem("token", data.token);
    return data.token
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      if (error.status === 401) {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
