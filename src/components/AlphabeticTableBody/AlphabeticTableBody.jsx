import React from 'react';

import useStyles from './style';

const AlphabeticTableBody = ({ children }) => {
  const classes = useStyles();

  return (
    <tbody className={classes.root}>
      <tr>
        {children}
      </tr>
    </tbody>
  );
};

export default AlphabeticTableBody;
