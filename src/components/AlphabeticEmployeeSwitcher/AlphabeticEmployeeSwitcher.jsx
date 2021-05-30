import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import useStyles from './styles';

const SPACE_KEY_CODE = 32;

const AlphabeticEmployeeSwitcher = ({ employee }) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  const handleActivateClick = useCallback(() => {
    console.log('Activating...');
    setIsActive(true);
  }, []);

  const handleDisactivateClick = useCallback(() => {
    console.log('Disactivating...');
    setIsActive(false);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === SPACE_KEY_CODE) {
      event.preventDefault();
      setIsActive(prev => !prev);
    }
  }, []);

  return (
    <fieldset className={classes.root}>
      <legend className={clsx(classes.legend, { [classes.legendActive]: isActive })}>
        {employee.firstName} {employee.lastName}
      </legend>

      <div className={classes.inputWrapper}>
        <input
          type="radio"
          checked={isActive}
          className={classes.input}
          onChange={handleActivateClick}
          id={`${employee.id}-activate`}
        />

        <label
          tabIndex="0"
          role="radio"
          aria-checked={isActive}
          className={classes.label}
          onKeyDown={handleKeyDown}
          htmlFor={`${employee.id}-activate`}
        />

        <span className={classes.labelText}>active</span>
      </div>

      <div className={classes.inputWrapper}>
        <input
          type="radio"
          checked={!isActive}
          className={classes.input}
          id={`${employee.id}-disactivate`}
          onChange={handleDisactivateClick}
        />
        
        <label
          tabIndex="0"
          role="radio"
          aria-checked={!isActive}
          className={classes.label}
          onKeyDown={handleKeyDown}
          htmlFor={`${employee.id}-disactivate`}
        />
        <span className={classes.labelText}>not active</span>
      </div>
    </fieldset>
  );
};

export default AlphabeticEmployeeSwitcher;