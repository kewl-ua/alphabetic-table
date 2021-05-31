import PropTypes from 'prop-types';

import employeeShape from './employee';

import { MONTHS } from '../constants';

const monthsShapeEntries = MONTHS.map((month) => [
  month,
  PropTypes.arrayOf(employeeShape),
]);
const monthsShapeMap = Object.fromEntries(monthsShapeEntries);
const shape = PropTypes.shape(monthsShapeMap);

export default shape;
