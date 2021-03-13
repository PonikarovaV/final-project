import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './styles/MenuItem.module.css';

interface MenuItemProps {
  description: string,
  link: string,
}

export const MenuItem = (props: MenuItemProps) => {
  const { description, link } = props;

  const { pathname } = useLocation();

  const linkClasses = React.useMemo(() => (
    pathname === link
      ? `${classes.menu__link} ${classes.menu__link_active}`
      : classes.menu__link
  ), [link, pathname]);

  return (
    <li className={classes.menu__item}>
      <a className={linkClasses} href={link}>{description}</a>
    </li>
  );
};
