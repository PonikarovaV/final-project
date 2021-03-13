import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from '../../store';

import classes from './styles/ErrorModal.module.css';

export const ErrorModal = () => {
  const { error } = useSelector((state: RootState) => state.modal);

  const closeClickHandler = () => dispatch.modal.setError(null);

  if (!error) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes['error-modal']}>
        <p className={classes['error-modal__description']}>Error</p>
        <p className={classes['error-modal__message']}>{error}</p>
        <button
          className={classes['error-modal__button']}
          type="button"
          onClick={closeClickHandler}
        >
          Close
        </button>
      </div>
    </div>
  );
};
