import { DO_SWAP, DO_NOT_SWAP, MONTHS, LETTERS } from '../constants';

export const lastNamePredicate = (a, b) =>
  a.lastName.toUpperCase() > b.lastName.toUpperCase() ? DO_SWAP : DO_NOT_SWAP;

export const createLettersMap = () =>
  Object.fromEntries(LETTERS.map((l) => [l, []]));

export const datePattern = /(?<year>\d\d\d\d)-(?<month>\d\d)-(?<day>\d\d)/;

export const getMonthName = (monthNumber) => MONTHS[monthNumber - 1];

export const parseDateOfBirth = (dob) => dob.match(datePattern)?.groups;
