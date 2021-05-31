import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const AlphabeticTable = ({ children }) => {
  const classes = useStyles();

  return <table className={classes.root}>{children}</table>;
};

AlphabeticTable.propTypes = {
  children: PropTypes.node,
};

export default memo(AlphabeticTable);
