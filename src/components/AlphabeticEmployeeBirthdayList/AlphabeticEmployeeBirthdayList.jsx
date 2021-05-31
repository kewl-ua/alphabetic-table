import React, { useMemo } from 'react';

import AlphabeticEmployeeBirthdayItem from '../AlphabeticEmployeeBirthdayItem';

import useStyles from './styles';

const AlphabeticEmployeeBirthdayList = ({ employeesByMonth = [] }) => {
  const classes = useStyles();
  const items = useMemo(
    () =>
      employeesByMonth.map((employeeByMonth) => (
        <AlphabeticEmployeeBirthdayItem
          key={employeeByMonth[0]}
          employeeByMonth={employeeByMonth}
        />
      )),
    [employeesByMonth]
  );

  return <ul className={classes.root}>{items}</ul>;
};

export default AlphabeticEmployeeBirthdayList;
