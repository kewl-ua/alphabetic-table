import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

import { EmployeeService } from '../../services';

import { getEmployeesAlphaEntries } from '../../helpers/employee';

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
    selectedEmployees: []
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload.employees;
    },
    selectEmployee: (state, action) => {
      state.selectedEmployees.push(action.payload.employeeId);
    }
  },
  extraReducers: {
    [fetchEmployees.fulfilled]: (state, action) => {
      state.employees = action.payload.employees;
    }
  }
});

// Selectors
export const employeesSelector = state => state.employee.employees;
export const selectedEmployeesSelector = state => state.employee.selectedEmployees;
export const alphabeticEmployeesSelector = createSelector(
  employeesSelector,
  employees => getEmployeesAlphaEntries(employees)
);
  
// Actions
export const { setEmployees } = slice.actions;

export const reducer = slice.reducer;
