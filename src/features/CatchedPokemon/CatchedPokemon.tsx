import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from '../../store';
import { Pokemon } from '../PokemonPanel/types';
import { Wrapper } from '../Wrapper';
import { PokemonPanel } from '../PokemonPanel/PokemonPanel';

import classes from './styles/Catchedpokemon.module.css';
import { Loader } from '../Loader';

/** Страница пойманных покемонов */
export const CatchedPokemon = () => {
  const { catchedPokemonList } = useSelector((state: RootState) => state.pokemon);
  const { isLoading } = useSelector((state: RootState) => state.loader);
  const {
    headerOffsetHeight, fooretOffsetHeigth,
  } = useSelector((state: RootState) => state.metrics);

  React.useEffect(() => {
    if (catchedPokemonList.length) {
      return;
    }

    dispatch.pokemon.getCatchedPokemonList();
  }, [catchedPokemonList.length]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        paddingTop: `${(headerOffsetHeight ?? 0) + 20}px`,
        paddingBottom: `${(fooretOffsetHeigth ?? 0) + 20}px`,
      }}
    >
      <Wrapper classMix={classes['catche-pokemons__wrapper']}>
        {!catchedPokemonList.length && <h2>There are no pokemons here :(</h2>}
        {!!catchedPokemonList.length && catchedPokemonList.map((item: Pokemon) => (
          <PokemonPanel
            key={item.id}
            data={item}
            shouldButtonRender={false}
          />
        ))}
      </Wrapper>
    </div>
  );
};
