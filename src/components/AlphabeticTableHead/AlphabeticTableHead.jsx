import React from 'react';

import useStyles from './styles';

const AlphabeticTableHead = ({ children }) => {
  const classes = useStyles();

  return (
    <thead className={classes.root}>
      <tr className={classes.inner}>
        {children}
      </tr>
    </thead>
  );
};

export default AlphabeticTableHead;
