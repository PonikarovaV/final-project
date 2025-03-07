import React from 'react';

import classes from './styles/Wrapper.module.css';

interface WrapperProps {
  children: React.ReactNode,
  classMix: string,
}

/** Обертка для контента в блоках */
export const Wrapper = (props: WrapperProps) => {
  const { children, classMix } = props;

  return (
    <div className={`${classes.wrapper} ${classMix}`}>
      {children}
    </div>
  );
};
