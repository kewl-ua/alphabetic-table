import PropTypes from 'prop-types';

import employeeShape from './employee';

import { LETTERS } from '../constants';

const lettersEmployeesEntries = LETTERS.map((letter) => [
  letter,
  PropTypes.arrayOf(employeeShape),
]);

const shape = PropTypes.shape(Object.fromEntries(lettersEmployeesEntries));

export default shape;
