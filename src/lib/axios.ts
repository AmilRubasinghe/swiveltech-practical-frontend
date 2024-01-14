"use client";

import { ToggleLoader } from "@/providers/redux/features/loader";
import { store } from "@/providers/redux/store";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.BASE_URL;

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosAuth.interceptors.request.use(
  (config) => {
    store.dispatch(ToggleLoader(true));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosAuth.interceptors.response.use(
  (response) => {
    store.dispatch(ToggleLoader(false));
    return response;
  },
  (error) => {
    store.dispatch(ToggleLoader(false));

    let errMessage = "";

    const { status } = error.response;

    const { message } = error.response?.data;

    if (status === 400) {
      errMessage = message || "Bad Request";
    } else if (status === 404) {
      errMessage = message || "Not Found";
    } else if (status === 403) {
      errMessage = message || "Forbidden";
    } else if (status === 500) {
      errMessage = message || "Internal Server Error";
    } else {
      errMessage = message || "Internal Server Error";
    }
    toast.error(errMessage);
    return Promise.reject({ code: status, message: errMessage });
  }
);

export default axiosAuth;
