import React from 'react';
import { Wrapper } from '../Wrapper';

import classes from './styles/Footer.module.css';

export const Footer = () => (
  <footer className={classes.footer}>
    <Wrapper classMix={classes.footer__wrapper}>
      <span>&copy; Vanda Ponikarova</span>
    </Wrapper>
  </footer>
);
