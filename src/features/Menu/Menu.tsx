import React from 'react';
import { MENU_ITEMS } from '../../common';
import { MenuItem } from './MenuItem';

import classes from './styles/Menu.module.css';

export const Menu = () => (
  <nav className={classes.menu}>
    <ul className={classes.menu__list}>
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.id}
          description={item.description}
          link={item.link}
        />
      ))}
    </ul>
  </nav>
);
