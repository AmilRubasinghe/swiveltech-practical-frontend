import { createSlice } from "@reduxjs/toolkit";

export const EmployeeReducer = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    AddEmployee(state, action) {
      state.employees = action.payload;
    },
  },
});

export const { AddEmployee } = EmployeeReducer.actions;
export default EmployeeReducer.reducer;
