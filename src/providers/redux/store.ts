"use client";
import { configureStore } from "@reduxjs/toolkit";

import LoaderReducer from "./features/loader";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import EmployeeReducer from "./features/employes";

export const store = configureStore({
  reducer: {
    loader: LoaderReducer,
    employee: EmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
