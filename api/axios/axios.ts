import axios from "axios";
import { Cookies } from "react-cookie";
export const BaseURL = "http://localhost:4000";
const cookie = new Cookies();
export const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(function (config) {
    const token = cookie.get("token")
    console.log(token);
    if(token){
      config.headers = config.headers || {};
      config.headers["x-access-headers"] = token;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* This function returns true */ true }
);