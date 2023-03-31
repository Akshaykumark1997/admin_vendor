import axios from "axios";
import { baseurl } from "../constance/Constance";

const instance = axios.create({
    baseURL: baseurl || "http://localhost:8000/api",
});

export default instance;