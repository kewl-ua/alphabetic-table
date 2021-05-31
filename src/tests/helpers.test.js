import { DO_NOT_SWAP } from '../constants';
import {
  lastNamePredicate,
  getMonthName,
  parseDateOfBirth,
} from '../helpers/employee';

test('Providing a month number gives the month name', () => {
  expect(getMonthName(1)).toBe('January');
  expect(getMonthName(12)).toBe('December');
});

test('Parses date of birth', () => {
  const mockDOB = '2019-09-19T09:34:32.083Z';
  const { day, month, year } = parseDateOfBirth(mockDOB);

  expect(day).toBe('19');
  expect(month).toBe('09');
  expect(year).toBe('2019');
});

test('Artem is alphabetically lower than Bruce', () => {
  const employeesMock = [{ lastName: 'Artem' }, { lastName: 'Bruce' }];

  expect(lastNamePredicate(...employeesMock)).toBe(DO_NOT_SWAP);
});
