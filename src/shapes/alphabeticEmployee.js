import PropTypes from 'prop-types';

import employeeShape from './employee';

const LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const shape = PropTypes.shape({
  0: PropTypes.oneOf(LETTERS),
  1: PropTypes.shape(employeeShape),
});

export default shape;
