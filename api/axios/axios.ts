import axios from "axios";
import { Cookies } from "react-cookie";
export const BaseURL = "http://localhost:4000";
export const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const cookie = new Cookies();
    const token = cookie.get("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`; 
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);