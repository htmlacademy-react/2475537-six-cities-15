import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from '../services/token';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

export type ErrorType = {
  errorType: string;
  message: string;
  details: ErrorDetailType[];
}

type ErrorDetailType = {
  property: string;
  value: string;
  messages: string[];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];
const getErrorMessage = (error: ErrorType): string => {
  if (error.details?.length > 0) {
    return error.details[0].messages?.[0] ?? error.message;
  }
  return error.message;
};

const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token && config?.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = getErrorMessage(error.response.data);
        toast.error(detailMessage);
      }
      throw error;
    }
  );

  return api;
};
