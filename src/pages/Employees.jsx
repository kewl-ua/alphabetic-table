import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AlphabeticTable from '../components/AlphabeticTable';

import { fetchEmployees } from '../redux/slices/employee';
 
const Employees = () => {
  const { employees } = useSelector(state => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="Employees">
      {employees && (
        <AlphabeticTable items={employees} />
      )}
    </div>
  );
};

export default Employees;
