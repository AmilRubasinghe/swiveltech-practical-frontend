import { createSlice } from "@reduxjs/toolkit";

type TBody = {
  isShow: boolean;
};

const initialState = {
  isShow: false,
} as TBody;

export const LoaderReducer = createSlice({
  name: "loader",
  initialState,
  reducers: {
    ToggleLoader: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const { ToggleLoader } = LoaderReducer.actions;
export default LoaderReducer.reducer;
