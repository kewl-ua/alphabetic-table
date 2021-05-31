import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useStyles from './styles';

const AlphabeticTableSection = ({ className = '', children, ...props }) => {
  const classes = useStyles();

  return (
    <td className={clsx(classes.root, className)} {...props}>
      {children}
    </td>
  );
};

AlphabeticTableSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default memo(AlphabeticTableSection);
