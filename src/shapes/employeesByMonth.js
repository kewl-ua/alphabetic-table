import PropTypes from 'prop-types';

import employeeShape from './employee';

import { MONTHS } from '../constants';

const monthsShapeEntries = MONTHS.map((month) => [
  month,
  PropTypes.arrayOf(employeeShape),
]);

const shape = PropTypes.shape(Object.fromEntries(monthsShapeEntries));

export default shape;
