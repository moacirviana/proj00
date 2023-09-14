import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const Api = axios.create({
    baseURL:"https://tucuma.tre-am.jus.br/xibefood-sb",
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization = "Bearer " + user?.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }

)