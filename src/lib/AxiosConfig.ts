import axios, { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// const API_URL = global.api_url || 'default url api';
const API_URL = "http://localhost:3003";

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
