import React from "react";
import { Menu } from "../Menu";

import classes from './styles/Header.module.css';

export const Header = () => {
  console.log(classes)
  return (
    <header className={classes.header}>
      <h1>Pockemons</h1>
      <Menu />
    </header>
  );
}
