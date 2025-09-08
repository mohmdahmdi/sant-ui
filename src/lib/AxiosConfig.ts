import axios, { AxiosError, AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// const API_URL = global.api_url || 'default url api';
const API_URL = "http://localhost:3003";

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

let tokenPromise: Promise<string | undefined> | null = null;
export let globalAccessToken: string | undefined = undefined;

setInterval(() => {
  tokenPromise = null;
  getToken();
}, 50 * 60 * 1000);

export const getToken = async (): Promise<string | undefined> => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_DEVELOPMENT_TOKEN;
  }
  globalAccessToken = 's'
  return;
};

const applyRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(async (config) => {
    const token =
      typeof globalAccessToken === "string"
        ? globalAccessToken
        : await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

interface Err {
  Count: number;
  Data: null;
  message: string;
  StatusCode: number;
}

const applyResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(null, async (error: AxiosError) => {
    const originalRequest = error.response && error.config;
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      tokenPromise = null;
      getToken();
    } else if (status === 500) {
      console.log("مشکلی در سمت سرور رخ داده است!");
    } else if (status === 403) {
      const errorMassage = String(error?.response?.data);
      console.log(errorMassage);
    } else if (status === 400) {
      const massage = error?.response?.data as Err;
      console.log(massage.message);
    }
    return Promise.reject(originalRequest);
  });
};

applyRequestInterceptor(instance);
applyResponseInterceptor(instance);

export default instance;
