import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import AlphabeticEmployeeItem from '../AlphabeticEmployeeItem';

import useStyles from './styles';

const AlphabeticEmployeeList = ({ alphabeticEmployees = [] }) => {
  const classes = useStyles();
  const items = useMemo(
    () =>
      alphabeticEmployees.map(([letter, lEmployees]) => (
        <AlphabeticEmployeeItem
          key={letter}
          letter={letter}
          employees={lEmployees}
        />
      )),
    [alphabeticEmployees]
  );

  return <ul className={classes.root}>{items}</ul>;
};

AlphabeticEmployeeList.propTypes = {
  alphabeticEmployees: PropTypes.array,
};

export default AlphabeticEmployeeList;
