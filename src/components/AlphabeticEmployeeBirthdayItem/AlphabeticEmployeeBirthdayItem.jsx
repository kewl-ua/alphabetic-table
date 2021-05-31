import React, { memo } from 'react';

import useStyles from './styles';

import { parseDateOfBirth, getMonthName } from '../../helpers/employee';

const AlphabeticEmployeeBirthdayItem = ({ employeeByMonth }) => {
  const classes = useStyles();
  const [month, employees] = employeeByMonth;
  const items = employees.map((employee) => {
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
    <li className={classes.root} key={month}>
      <h3 className={classes.month}>
        {getMonthName(month)}
      </h3>

      <ul className={classes.dobList}>  
        {items}
      </ul>
    </li>
  );
};

export default memo(AlphabeticEmployeeBirthdayItem);
