import React from 'react';
import { useSelector } from 'react-redux';
import { scrollToTop } from '../../common/helpers';
import { dispatch, RootState } from '../../store';
import { PokemonPanel } from '../PokemonPanel';
import { Pokemon } from '../PokemonPanel/types';
import { Wrapper } from '../Wrapper';
import { Loader } from '../Loader';

import classes from './styles/MainPage.module.css';

export const MainPage = () => {
  const { pokemonList } = useSelector((state: RootState) => state.pokemon);
  const { isLoading } = useSelector((state: RootState) => state.loader);
  const {
    headerOffsetHeight, fooretOffsetHeigth,
  } = useSelector((state: RootState) => state.metrics);

  const loadMoreClickHandler = () => dispatch.pokemon.getPokemonList();
  const collapseClickHandler = () => dispatch.pokemon.collapsedPokemonList();
  const scrollUpClickHandler = () => scrollToTop();

  React.useEffect(() => {
    if (pokemonList.length) {
      return;
    }

    dispatch.pokemon.getPokemonList();
  }, [pokemonList.length]);

  if (isLoading && !pokemonList.length) {
    return <Loader />;
  }

  if (!pokemonList.length) {
    return null;
  }

  return (
    <div
      style={{
        paddingTop: `${(headerOffsetHeight ?? 0) + 20}px`,
        paddingBottom: `${(fooretOffsetHeigth ?? 0) + 20}px`,
      }}
    >
      <Wrapper classMix={classes.main__wrapper}>
        <button
          onClick={collapseClickHandler}
          className={classes.main__collapse}
          type="button"
        >
          Collapse
        </button>
        <button
          onClick={scrollUpClickHandler}
          className={classes.main__scroll}
          type="button"
        >
          Scroll Up
        </button>
        {!!pokemonList && pokemonList.map((item: Pokemon) => (
          <PokemonPanel
            key={item.id}
            data={item}
            shouldButtonRender
          />
        ))}
        <button
          onClick={loadMoreClickHandler}
          className={classes['main__load-more']}
          type="button"
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      </Wrapper>
    </div>
  );
};
