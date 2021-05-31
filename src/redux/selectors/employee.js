import { createSelector } from '@reduxjs/toolkit';
import {
  lastNamePredicate,
  createLettersMap,
  parseDateOfBirth,
} from '../../helpers';

// Selectors
export const employeesSelector = (state) => state.employee.employees;

export const selectedEmployeesIdsSelector = (state) =>
  state.employee.selectedEmployeesIds;

// Reselectors
export const selectedEmployeesSelector = createSelector(
  employeesSelector,
  selectedEmployeesIdsSelector,
  (employees, selectedEmployeesIds) =>
    employees.filter((employee) => selectedEmployeesIds.includes(employee.id))
);

export const alphabeticEmployeesSelector = createSelector(
  employeesSelector,
  (employees) => {
    const sortedEmployees = [...employees].sort(lastNamePredicate);
    const lettersMap = createLettersMap();

    for (const employee of sortedEmployees) {
      const letter = employee.lastName[0].toUpperCase();

      lettersMap[letter].push(employee);
    }

    return lettersMap;
  }
);

export const groupedByMonthEmployeesSelector = createSelector(
  selectedEmployeesSelector,
  (selectedEmployees) => {
    const monthEmployeesBirthdaysMap = {};

    for (const employee of selectedEmployees) {
      const month = parseDateOfBirth(employee.dob).month - 1;

      if (monthEmployeesBirthdaysMap[month]) {
        monthEmployeesBirthdaysMap[month].push(employee);
      } else {
        monthEmployeesBirthdaysMap[month] = [employee];
      }
    }

    return monthEmployeesBirthdaysMap;
  }
);
