import React from 'react';

import useStyles from './styles';

const AlphabeticTableHeading = ({ children }) => {
  const classes = useStyles();

  return (
    <th className={classes.root}>
      {children}
    </th>
  );
};

export default AlphabeticTableHeading;
