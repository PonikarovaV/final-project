import React from 'react';
import { useLocation } from 'react-router-dom';

import { scrollToTop } from '../../common/helpers';
import { dispatch } from '../../store';
import { Wrapper } from '../Wrapper';
import { URL } from '../../common/constants';

import classes from './styles/Footer.module.css';

export const Footer = () => {
  const { pathname } = useLocation();

  const isMainPage = pathname === URL.mainPage;

  const collapseClickHandler = () => dispatch.pokemon.collapsedPokemonList();
  const scrollUpClickHandler = () => scrollToTop();

  const footerElement = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!footerElement.current) {
      return;
    }

    const currentHeight = footerElement.current?.offsetHeight;

    dispatch.metrics.setMetrics({
      name: 'fooretOffsetHeigth',
      value: currentHeight,
    });
  }, []);

  return (
    <footer className={classes.footer} ref={footerElement}>
      <Wrapper classMix={classes.footer__wrapper}>
        <span className={classes.footer__copyright}>&copy; Vanda Ponikarova</span>
        <div className={classes.footer__buttons}>
          {isMainPage && (
            <>
              <button
                onClick={scrollUpClickHandler}
                className={classes.footer__button}
                type="button"
              >
                Scroll Up
              </button>
              <button
                onClick={collapseClickHandler}
                className={classes.footer__button}
                type="button"
              >
                Collapse
              </button>
            </>
          )}
        </div>
      </Wrapper>
    </footer>
  );
};
