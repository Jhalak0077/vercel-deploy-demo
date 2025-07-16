import axios, { AxiosInstance } from "axios";

const BaseConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
}

const API: AxiosInstance = axios.create(BaseConfig)
const ProtectedAPI: AxiosInstance = axios.create(BaseConfig);

ProtectedAPI.interceptors.request.use(
    async (config) => {
        // TODO: Extract {token} from cookie storage or session storage
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export { API, ProtectedAPI };
