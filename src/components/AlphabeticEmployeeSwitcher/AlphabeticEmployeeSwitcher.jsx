import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { selectEmployee, unselectEmployee } from '../../redux/slices/employee';

import employeeShape from '../../shapes/employee';

import useStyles from './styles';

const SPACE_KEY_CODE = 32;

const AlphabeticEmployeeSwitcher = ({ employee }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    dispatch(selectEmployee({ id: employee.id }));
  };

  const deactivate = () => {
    dispatch(unselectEmployee({ id: employee.id }));
  };

  const handleActivateClick = () => {
    activate();
    setIsActive(true);
  };

  const handleDeactivateClick = () => {
    deactivate();
    setIsActive(false);
  };

  const handleKeyDown = (event, cb) => {
    if (event.keyCode === SPACE_KEY_CODE) {
      event.preventDefault();
      cb();
      setIsActive((prev) => !prev);
    }
  };

  const handleActivateKeyDown = (event) => {
    handleKeyDown(event, activate);
  };

  const handleDeactivateKeyDown = (event) => {
    handleKeyDown(event, deactivate);
  };

  return (
    <fieldset className={classes.root}>
      <legend
        className={clsx(classes.legend, { [classes.legendActive]: isActive })}
      >
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
          onKeyDown={handleActivateKeyDown}
          htmlFor={`${employee.id}-activate`}
        />

        <span className={classes.labelText} onClick={handleActivateClick}>
          active
        </span>
      </div>

      <div className={classes.inputWrapper}>
        <input
          type="radio"
          checked={!isActive}
          className={classes.input}
          id={`${employee.id}-deactivate`}
          onChange={handleDeactivateClick}
        />

        <label
          tabIndex="0"
          role="radio"
          aria-checked={!isActive}
          className={classes.label}
          onKeyDown={handleDeactivateKeyDown}
          htmlFor={`${employee.id}-deactivate`}
        />

        <span className={classes.labelText} onClick={handleDeactivateClick}>
          not active
        </span>
      </div>
    </fieldset>
  );
};

AlphabeticEmployeeSwitcher.propTypes = {
  employee: employeeShape,
};

export default AlphabeticEmployeeSwitcher;
