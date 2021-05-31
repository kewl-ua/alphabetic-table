import { LETTERS } from '../constants';

export const createLettersMap = () =>
  Object.fromEntries(LETTERS.map((letter) => [letter, []]));
