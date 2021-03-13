import React from 'react';
import { MENU_ITEMS } from '../../common';
import { MenuItem } from './MenuItem';

import classes from './styles/Menu.module.css';

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const MAX_WINDOW_WIDTH = 721;

  const windowWidth = document.documentElement.clientWidth;

  const shouldRenderMenu = windowWidth < MAX_WINDOW_WIDTH
    ? isOpen
    : true;

  const shouldRenderMenuButton = windowWidth < MAX_WINDOW_WIDTH;

  const closeMenuClickHandler = React.useCallback(() => setIsOpen(false), []);

  return (
    <nav className={classes.menu}>
      {shouldRenderMenuButton && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classes.menu__button}
          type="button"
        >
          {isOpen ? '...' : 'Menu'}
        </button>
      )}
      {shouldRenderMenu && (
        <ul className={classes.menu__list}>
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              description={item.description}
              link={item.link}
              onCloseMenu={closeMenuClickHandler}
            />
          ))}
        </ul>
      )}
    </nav>
  );
};
