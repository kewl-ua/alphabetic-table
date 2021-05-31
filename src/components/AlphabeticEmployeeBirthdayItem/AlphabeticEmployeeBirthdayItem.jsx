import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

import { MONTHS } from '../../constants';

import { parseDateOfBirth, getMonthName } from '../../helpers';

import { employee as employeeShape } from '../../shapes';

const AlphabeticEmployeeBirthdayItem = ({ month, employees }) => {
  const classes = useStyles();
  const items = employees.map((employee) => {
    const {
      day: bDay,
      month: bMonth,
      year: bYear,
    } = parseDateOfBirth(employee.dob);
    const bMonthName = getMonthName(bMonth);

    return (
      <li className={classes.dobItem} key={employee.id}>
        <span className={classes.name}>
          {employee.firstName} {employee.lastName}
        </span>
        &nbsp;-&nbsp;
        <span className={classes.dob}>
          {Number(bDay)} {bMonthName}, {bYear} year
        </span>
      </li>
    );
  });

  return (
    <li className={classes.root} key={month}>
      <h3 className={classes.month}>{MONTHS[month]}</h3>
      <ul className={classes.dobList}>{items}</ul>
    </li>
  );
};

AlphabeticEmployeeBirthdayItem.propTypes = {
  month: PropTypes.oneOf(Object.keys(MONTHS)).isRequired,
  employees: PropTypes.arrayOf(employeeShape),
};

export default memo(AlphabeticEmployeeBirthdayItem);
