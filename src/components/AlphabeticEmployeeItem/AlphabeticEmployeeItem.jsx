import React from 'react';
import PropTypes from 'prop-types';

import AlphabeticEmployeeSwitcher from '../AlphabeticEmployeeSwitcher';

import employeeShape from '../../shapes/employee';

import useStyles from './styles';

const AlphabeticEmployeeItem = ({ letter, employees = [] }) => {
  const classes = useStyles();
  const employeeSwitchers = employees.map(employee => (
    <AlphabeticEmployeeSwitcher key={employee.id} employee={employee} />
  ));

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
  employees: PropTypes.arrayOf(employeeShape)
};

export default AlphabeticEmployeeItem;
