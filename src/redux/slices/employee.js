import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

import { EmployeeService } from '../../services';

import { getEmployeesAlphaEntries, getEmployeesMonthEntries } from '../../helpers/employee';

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
    selectedEmployeesIds: []
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload.employees;
    },
    selectEmployee: (state, action) => {
      state.selectedEmployeesIds.push(action.payload.id);
    },
    unselectEmployee: (state, action) => {
      state.selectedEmployeesIds = state.selectedEmployeesIds
        .filter(seId => seId !== action.payload.id);
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
export const selectedEmployeesIdsSelector = state => state.employee.selectedEmployeesIds;

// Reselectors
export const alphabeticEmployeesSelector = createSelector(
  employeesSelector,
  employees => getEmployeesAlphaEntries(employees)
);
export const selectedEmployeesSelector = createSelector(
  employeesSelector,
  selectedEmployeesIdsSelector,
  (employees, selectedEmployeesIds) => employees
    .filter(employee => selectedEmployeesIds.includes(employee.id))
);

export const groupedByMonthEmployeesSelector = createSelector(
  selectedEmployeesSelector,
  selectedEmployees => getEmployeesMonthEntries(selectedEmployees)
);

// Actions
export const { setEmployees, selectEmployee, unselectEmployee } = slice.actions;

export const reducer = slice.reducer;
