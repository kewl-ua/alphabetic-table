import { DO_SWAP, DO_NOT_SWAP, MONTHS, LETTERS } from '../constants';

export const lastNamePredicate = (a, b) =>
  a.lastName.toUpperCase() > b.lastName.toUpperCase() ? DO_SWAP : DO_NOT_SWAP;

export const createLettersMap = () => {
  const lettersMap = {};

  for (const l of LETTERS) {
    lettersMap[l] = [];
  }

  return lettersMap;
};

export const getEmployeesAlphaMap = (employees) => {
  const sortedEmployees = [...employees].sort(lastNamePredicate);
  const lettersMap = createLettersMap();

  for (const employee of sortedEmployees) {
    const letter = employee.lastName[0].toUpperCase();

    lettersMap[letter].push(employee);
  }

  return lettersMap;
};

// Date of birth
const datePattern = /(?<year>\d\d\d\d)-(?<month>\d\d)-(?<day>\d\d)/;

export const getMonthName = (monthNumber) => MONTHS[monthNumber - 1];

export const parseDateOfBirth = (dob) => dob.match(datePattern)?.groups;

export const getEmployeesMonthsMap = (employees) => {
  const monthEmployeesBirthdaysMap = {};

  for (const employee of employees) {
    const month = Number(parseDateOfBirth(employee.dob).month) - 1;

    if (monthEmployeesBirthdaysMap[month]) {
      monthEmployeesBirthdaysMap[month].push(employee);
    } else {
      monthEmployeesBirthdaysMap[month] = [employee];
    }
  }

  return monthEmployeesBirthdaysMap;
};
