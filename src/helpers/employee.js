import { DO_SWAP, DO_NOT_SWAP } from '../constants';

const datePattern = /(?<year>\d\d\d\d)-(?<month>\d\d)-(?<day>\d\d)/;

export const lastNamePredicate = (a, b) =>
  a.lastName.toUpperCase() > b.lastName.toUpperCase() ? DO_SWAP : DO_NOT_SWAP;

export const parseDateOfBirth = (dob) => dob.match(datePattern)?.groups;
