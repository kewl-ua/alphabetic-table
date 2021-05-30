const DO_SWAP = 1;
const DO_NOT_SWAP = -1;
const LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const lastNamePredicate = (a, b) => a.lastName.toUpperCase() > b.lastName.toUpperCase()
  ? DO_SWAP
  : DO_NOT_SWAP;

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