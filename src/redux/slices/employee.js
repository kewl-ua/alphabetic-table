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
    employees: []
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload.employees;
    }
  },
  extraReducers: {
    [fetchEmployees.fulfilled]: (state, action) => {
      state.employees = action.payload.employees;
    }
  }
});

export const { setEmployees } = slice.actions;

export const reducer = slice.reducer;
