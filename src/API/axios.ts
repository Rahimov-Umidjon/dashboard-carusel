import axios, {type InternalAxiosRequestConfig} from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
