import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import classes from './styles/Loader.module.css';

/** Элемент индикации загрузки */
export const Loader = () => {
  const { isLoading } = useSelector((state: RootState) => state.loader);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={classes.loader}>
      <div className={classes['lds-ellipsis']}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
