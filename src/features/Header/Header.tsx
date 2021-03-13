import React from 'react';
import { Menu } from '../Menu';
import { URL } from '../../common';
import { Wrapper } from '../Wrapper';

import classes from './styles/Header.module.css';

export const Header = () => (
  <header className={classes.header}>
    <Wrapper classMix={classes.header__wrapper}>
      <a className={classes.header__link} href={URL.mainPage}>
        <h1 className={classes.header__title}>pokemons</h1>
      </a>
      <Menu />
    </Wrapper>
  </header>
);
