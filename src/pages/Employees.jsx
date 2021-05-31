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
  alphabeticEmployeesSelector,
  groupedByMonthEmployeesSelector
} from '../redux/slices/employee';

const useStyles = createUseStyles({
  root: {
    padding: 30
  }
});

const Employees = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alphabeticEmployees = useSelector(alphabeticEmployeesSelector);
  const groupedByMonthEmployees = useSelector(groupedByMonthEmployeesSelector);

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
          <AlphabeticTableSection width="75%">
            <AplhabeticEmployeeList alphabeticEmployees={alphabeticEmployees} />
          </AlphabeticTableSection>

          <AlphabeticTableSection width="25%">
            <AlphabeticEmployeeBirthdayList employeesByMonth={groupedByMonthEmployees} />
          </AlphabeticTableSection>
        </AlphabeticTableBody>
      </AlphabeticTable>
    </div>
  );
};

export default Employees;
