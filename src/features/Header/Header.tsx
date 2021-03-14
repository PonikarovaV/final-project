import React from 'react';
import { dispatch } from '../../store';
import { Menu } from '../Menu';
import { URL } from '../../common';
import { Wrapper } from '../Wrapper';

import classes from './styles/Header.module.css';

/** Header страницы */
export const Header = () => {
  const headerElement = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!headerElement.current) {
      return;
    }

    const currentHeight = headerElement.current?.offsetHeight;

    dispatch.metrics.setMetrics({
      name: 'headerOffsetHeight',
      value: currentHeight,
    });
  }, []);

  return (
    <header
      className={classes.header}
      ref={headerElement}
    >
      <Wrapper classMix={classes.header__wrapper}>
        <a className={classes.header__link} href={URL.mainPage}>
          <h1 className={classes.header__title}>pokemons</h1>
        </a>
        <Menu />
      </Wrapper>
    </header>
  );
};
