import { DO_SWAP, DO_NOT_SWAP } from '../constants/sort';
import { MONTHS } from '../constants/date';
import { LETTERS } from '../constants/letters';

const lastNamePredicate = (a, b) =>
  a.lastName.toUpperCase() > b.lastName.toUpperCase() ? DO_SWAP : DO_NOT_SWAP;

export const getEmployeesAlphaEntries = (employees) => {
  const sortedEmployees = [...employees].sort(lastNamePredicate);
  const lettersMap = {};

  for (const l of LETTERS) {
    lettersMap[l] = [];
  }

  for (const employee of sortedEmployees) {
    const letter = employee.lastName[0].toUpperCase();

    lettersMap[letter].push(employee);
  }

  return Object.entries(lettersMap);
};

// Date of birth
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

export const getMonthName = (monthNumber) => MONTHS[monthNumber - 1];

export const parseDateOfBirth = (dob) => dob.match(datePattern)?.groups;

export const getEmployeesMonthEntries = (employees) => {
  const monthEmployeesBirthdaysMap = {};

  for (const employee of employees) {
    const month = Number(parseDateOfBirth(employee.dob).month) - 1;

    if (monthEmployeesBirthdaysMap[month]) {
      monthEmployeesBirthdaysMap[month].push(employee);
    } else {
      monthEmployeesBirthdaysMap[month] = [employee];
    }
  }

  return Object.entries(monthEmployeesBirthdaysMap);
};
