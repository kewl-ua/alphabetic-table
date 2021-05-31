import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { EmployeeService } from '../../services';

// Async thunks
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    try {
      const employees = await EmployeeService.list();

      return { employees };
    } catch (e) {
      console.log('Failed to fetch employees: ', e);
    }
  }
);

const slice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    selectedEmployeesIds: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload.employees;
    },
    selectEmployee: (state, action) => {
      state.selectedEmployeesIds.push(action.payload.id);
    },
    unselectEmployee: (state, action) => {
      state.selectedEmployeesIds = state.selectedEmployeesIds.filter(
        (seId) => seId !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchEmployees.fulfilled]: (state, action) => {
      state.employees = action.payload.employees;
    },
  },
});

// Actions
export const { setEmployees, selectEmployee, unselectEmployee } = slice.actions;

export const reducer = slice.reducer;
