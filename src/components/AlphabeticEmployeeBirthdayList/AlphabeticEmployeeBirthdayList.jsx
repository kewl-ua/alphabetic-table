import React from 'react';

import useStyles from './styles';

import { getEmployeesMonthEntries } from '../../helpers/employee';

const AlphabeticEmployeeBirthdayList = ({ employees = [] }) => {
  const classes = useStyles();
  const employeeMonthsEntries = getEmployeesMonthEntries(employees);

  return (
    <div className={classes.root}>
      asdf
    </div>
  );
};

export default AlphabeticEmployeeBirthdayList;
