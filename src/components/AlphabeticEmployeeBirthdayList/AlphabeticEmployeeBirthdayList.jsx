import React, { useMemo } from 'react';

import useStyles from './styles';

import { parseDateOfBirth, getMonthName } from '../../helpers/employee';

const AlphabeticEmployeeBirthdayList = ({ employeesByMonth = [] }) => {
  const classes = useStyles();
  const items = useMemo(
    () => employeesByMonth.map(([month, employees]) => {
      const employeeBirthdayItems = employees.map((employee) => {
        const { day: bDay, month: bMonth, year: bYear } = parseDateOfBirth(employee.dob);

        return (
          <li className={classes.dobItem} key={employee.id}>
            <span className={classes.name}>
              {employee.firstName} {employee.lastName}
            </span>
            &nbsp;-&nbsp;
            <span className={classes.dob}>
              {Number(bDay)} {getMonthName(bMonth)}, {bYear} year
            </span>
          </li>
        );
      });

      return (
        <li className={classes.item} key={month}>
          <h3 className={classes.month}>
            {getMonthName(month)}
          </h3>

          <ul className={classes.dobList}>  
            {employeeBirthdayItems}
          </ul>
        </li>
      );
    },
    [employeesByMonth]
  ));

  console.log('Employees:', employeesByMonth);

  return (
    <ul className={classes.root}>
      {items}
    </ul>
  );
};

export default AlphabeticEmployeeBirthdayList;
