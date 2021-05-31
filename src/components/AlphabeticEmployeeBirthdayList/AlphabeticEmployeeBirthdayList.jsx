import React, { useMemo } from 'react';

import AlphabeticEmployeeBirthdayItem from '../AlphabeticEmployeeBirthdayItem';

import employeesByMonthShape from '../../shapes/employeesByMonth';

import useStyles from './styles';

const AlphabeticEmployeeBirthdayList = ({ employeesByMonth }) => {
  const classes = useStyles();
  const items = useMemo(
    () =>
      Object.entries(employeesByMonth).map(([month, employees]) => (
        <AlphabeticEmployeeBirthdayItem
          key={month}
          month={month}
          employees={employees}
        />
      )),
    [employeesByMonth]
  );

  return <ul className={classes.root}>{items}</ul>;
};

AlphabeticEmployeeBirthdayList.propTypes = {
  employeesByMonth: employeesByMonthShape,
};

export default AlphabeticEmployeeBirthdayList;
