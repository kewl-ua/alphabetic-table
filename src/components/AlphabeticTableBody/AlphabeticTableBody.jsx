import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

const AlphabeticTableBody = ({ children }) => {
  const classes = useStyles();

  return (
    <tbody className={classes.root}>
      <tr>{children}</tr>
    </tbody>
  );
};

AlphabeticTableBody.propTypes = {
  children: PropTypes.node,
};

export default memo(AlphabeticTableBody);
