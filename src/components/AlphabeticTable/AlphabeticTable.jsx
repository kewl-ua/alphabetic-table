import React, { memo } from 'react';

import useStyles from './styles';

const AlphabeticTable = ({ children }) => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      {children}
    </table>
  );
};

export default memo(AlphabeticTable);
