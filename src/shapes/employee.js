import PropTypes from 'prop-types';

const shape = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dob: PropTypes.string,
});

export default shape;
