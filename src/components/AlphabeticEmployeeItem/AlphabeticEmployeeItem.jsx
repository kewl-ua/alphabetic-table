import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import AlphabeticEmployeeSwitcher from '../AlphabeticEmployeeSwitcher';

import { employee as employeeShape } from '../../shapes';

import useStyles from './styles';

const AlphabeticEmployeeItem = ({ letter, employees = [] }) => {
  const classes = useStyles();
  const employeeSwitchers = useMemo(
    () =>
      employees.map((employee) => (
        <AlphabeticEmployeeSwitcher key={employee.id} employee={employee} />
      )),
    [employees]
  );

  return (
    <li className={classes.root}>
      <h5 className={classes.title}>{letter}</h5>

      <div className={classes.switchers}>
        {employees.length > 0 ? employeeSwitchers : <b>-----</b>}
      </div>
    </li>
  );
};

AlphabeticEmployeeItem.propTypes = {
  letter: PropTypes.string.isRequired,
  employees: PropTypes.arrayOf(employeeShape),
};

export default AlphabeticEmployeeItem;
