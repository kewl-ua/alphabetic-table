import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const AlphabeticTableHead = ({ children }) => {
  const classes = useStyles();

  return (
    <thead className={classes.root}>
      <tr className={classes.inner}>{children}</tr>
    </thead>
  );
};

AlphabeticTableHead.propTypes = {
  children: PropTypes.node,
};

export default memo(AlphabeticTableHead);
