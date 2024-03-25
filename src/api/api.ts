import axios, { AxiosInstance, AxiosRequestConfig  } from 'axios';
import { getToken } from '../services/token';

const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config?.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  return api;
};
