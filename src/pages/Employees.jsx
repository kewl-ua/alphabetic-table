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

import { fetchEmployees } from '../redux/slices/employee';
import {
  alphabeticEmployeesSelector,
  groupedByMonthEmployeesSelector,
} from '../redux/selectors/employee';

const useStyles = createUseStyles({
  root: {
    padding: 30,
  },
  alphaSection: {
    width: '75%',
  },
  birthdaySection: {
    width: '25%',
    borderLeft: '2px solid #666',
  },
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
          <AlphabeticTableHeading>Employees</AlphabeticTableHeading>
          <AlphabeticTableHeading>Employees birthday</AlphabeticTableHeading>
        </AlphabeticTableHead>

        <AlphabeticTableBody>
          <AlphabeticTableSection>
            <AplhabeticEmployeeList alphabeticEmployees={alphabeticEmployees} />
          </AlphabeticTableSection>

          <AlphabeticTableSection className={classes.birthdaySection}>
            <AlphabeticEmployeeBirthdayList
              employeesByMonth={groupedByMonthEmployees}
            />
          </AlphabeticTableSection>
        </AlphabeticTableBody>
      </AlphabeticTable>
    </div>
  );
};

export default Employees;
