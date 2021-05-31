import React, { useMemo } from 'react';

import AlphabeticEmployeeItem from '../AlphabeticEmployeeItem';

import { alphabeticEmployee as alphabeticEmployeesShape } from '../../shapes';

import useStyles from './styles';

const AlphabeticEmployeeList = ({ alphabeticEmployees }) => {
  const classes = useStyles();
  const items = useMemo(
    () =>
      Object.entries(alphabeticEmployees).map(([letter, lEmployees]) => (
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
  alphabeticEmployees: alphabeticEmployeesShape,
};

export default AlphabeticEmployeeList;
