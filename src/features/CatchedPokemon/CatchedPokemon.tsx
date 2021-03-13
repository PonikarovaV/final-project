import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from '../../store';
import { Pokemon } from '../PokemonPanel/types';
import { Wrapper } from '../Wrapper';
import { PokemonPanel } from '../PokemonPanel/PokemonPanel';

import classes from './styles/Catchedpokemon.module.css';
import { Loader } from '../Loader';

export const CatchedPokemon = () => {
  const { catchedPokemonList } = useSelector((state: RootState) => state.pokemon);
  const { isLoading } = useSelector((state: RootState) => state.loader);

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
    <div className={classes['catche-pokemons']}>
      <Wrapper classMix={classes['catche-pokemons__wrapper']}>
        {!!catchedPokemonList && catchedPokemonList.map((item: Pokemon) => (
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
