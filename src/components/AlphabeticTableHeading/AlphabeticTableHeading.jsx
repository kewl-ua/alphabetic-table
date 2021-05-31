import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const AlphabeticTableHeading = ({ children }) => {
  const classes = useStyles();

  return <th className={classes.root}>{children}</th>;
};

AlphabeticTableHeading.propTypes = {
  children: PropTypes.node,
};

export default memo(AlphabeticTableHeading);
