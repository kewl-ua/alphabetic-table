import React, { useMemo } from 'react';

import AlphabeticEmployeeItem from '../AlphabeticEmployeeItem';

import useStyles from './styles';

import { getEmployeesAlphaEntries } from './helpers';

const AlphabeticEmployeeList = ({ employees = [] }) => {
  const classes = useStyles();
  const items = useMemo(
    () => {
      const employeesAlphaEntries = getEmployeesAlphaEntries(employees);

      return employeesAlphaEntries.map(([ letter, lEmployees ])=> (
        <AlphabeticEmployeeItem key={letter} letter={letter} employees={lEmployees} />
      ))
    },
    [employees]
  );

  return (
    <ul className={classes.root}>
      {items}
    </ul>
  );
};

export default AlphabeticEmployeeList;
