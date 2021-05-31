import { createSelector } from '@reduxjs/toolkit';
import {
  getEmployeesAlphaEntries,
  getEmployeesMonthEntries,
} from '../../helpers/employee';

// Selectors
export const employeesSelector = (state) => state.employee.employees;
export const selectedEmployeesIdsSelector = (state) =>
  state.employee.selectedEmployeesIds;

// Reselectors
export const alphabeticEmployeesSelector = createSelector(
  employeesSelector,
  (employees) => getEmployeesAlphaEntries(employees)
);
export const selectedEmployeesSelector = createSelector(
  employeesSelector,
  selectedEmployeesIdsSelector,
  (employees, selectedEmployeesIds) =>
    employees.filter((employee) => selectedEmployeesIds.includes(employee.id))
);

export const groupedByMonthEmployeesSelector = createSelector(
  selectedEmployeesSelector,
  (selectedEmployees) => getEmployeesMonthEntries(selectedEmployees)
);
