import React, { memo } from 'react';
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

export default memo(AlphabeticTableSection);
