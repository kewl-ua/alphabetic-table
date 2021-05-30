import React from 'react';

import AlphabeticTableHead from '../AlphabeticTableHead';
import AlphabeticTableHeading from '../AlphabeticTableHeading';
import AlphabeticTableBody from '../AlphabeticTableBody';
import AlphabeticTableSection from '../AlphabeticTableSection';
import AlphabeticEmployeeList from '../AlphabeticEmployeeList';

import useStyles from './styles';
import AplhabeticEmployeeList from '../AlphabeticEmployeeList';

const AlphabeticTable = ({ items = [] }) => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      <AlphabeticTableHead>
        <AlphabeticTableHeading>
          Employees
        </AlphabeticTableHeading>

        <AlphabeticTableHeading>
          Employees birthday
        </AlphabeticTableHeading>
      </AlphabeticTableHead>

      <AlphabeticTableBody>
        <AlphabeticTableSection>
          <AplhabeticEmployeeList employees={items} />
        </AlphabeticTableSection>

        <AlphabeticTableSection>
          Employee birthday
        </AlphabeticTableSection>
      </AlphabeticTableBody>
    </table>
  );
};

export default AlphabeticTable;
