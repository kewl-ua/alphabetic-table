import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';

import AlphabeticTable from '../components/AlphabeticTable';
import AlphabeticTableHead from '../components/AlphabeticTableHead';
import AlphabeticTableHeading from '../components/AlphabeticTableHeading';
import AlphabeticTableBody from '../components/AlphabeticTableBody';
import AlphabeticTableSection from '../components/AlphabeticTableSection';
import AplhabeticEmployeeList from '../components/AlphabeticEmployeeList';
import AlphabeticEmployeeBirthdayList from '../components/AlphabeticEmployeeBirthdayList';

import {
  fetchEmployees,
  employeesSelector,
  selectedEmployeesSelector,
  alphabeticEmployeesSelector
} from '../redux/slices/employee';

const useStyles = createUseStyles({
  root: {
    padding: 30
  }
});

const Employees = () => {
  const dispatch = useDispatch();
  const alphabeticEmployees = useSelector(alphabeticEmployeesSelector);
  const employees = useSelector(employeesSelector);
  const selectedEmployees = useSelector(selectedEmployeesSelector);
  const classes = useStyles();

  console.log('Selected employees: ', selectedEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AlphabeticTable>
        <AlphabeticTableHead>
          <AlphabeticTableHeading>
            Employees
          </AlphabeticTableHeading>

          <AlphabeticTableHeading>
            Employees birthday
          </AlphabeticTableHeading>
        </AlphabeticTableHead>

        <AlphabeticTableBody>
          <AlphabeticTableSection className={classes.employeeSection}>
            <AplhabeticEmployeeList alphabeticEmployees={alphabeticEmployees} />
          </AlphabeticTableSection>

          <AlphabeticTableSection>
            <AlphabeticEmployeeBirthdayList employees={employees} />
          </AlphabeticTableSection>
        </AlphabeticTableBody>
      </AlphabeticTable>
    </div>
  );
};

export default Employees;
