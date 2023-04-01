import axios from "axios";
import { baseurl } from "../constance/Constance";

const instance = axios.create({
  baseURL: baseurl || "http://localhost:8000/api",
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tokenAdmin");

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
