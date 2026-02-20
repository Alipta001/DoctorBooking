import axios from "axios";

export const BaseURL = "http://localhost:4000";
export const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(function (config) {
    const token = cookies.get("token")
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
  { synchronous: true, runWhen: () => /* This function returns true */}
);