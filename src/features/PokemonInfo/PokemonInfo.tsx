import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from '../../store';
import { Wrapper } from '../Wrapper';
import { Loader } from '../Loader';

import { useParsedQuery } from '../../common/hooks/useParsedQuery';

import classes from './styles/pokemonInfo.module.css';

export const PokemonInfo = () => {
  const { currentPokemon } = useSelector((state: RootState) => state.pokemon);
  const { isLoading } = useSelector((state: RootState) => state.loader);
  const {
    headerOffsetHeight, fooretOffsetHeigth,
  } = useSelector((state: RootState) => state.metrics);

  const parsedQuery = useParsedQuery();
  const pokemonId = parsedQuery.id;

  React.useEffect(() => {
    if (!pokemonId) {
      return;
    }

    const numberId = Array.isArray(pokemonId)
      ? Number(pokemonId[0])
      : Number(pokemonId);

    dispatch.pokemon.getCurrentPokemon(numberId);
  }, [pokemonId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!currentPokemon) {
    return null;
  }

  return (
    <div
      style={{
        paddingTop: `${(headerOffsetHeight ?? 0) + 20}px`,
        paddingBottom: `${(fooretOffsetHeigth ?? 0) + 20}px`,
      }}
    >
      <Wrapper classMix={classes['pokemon-info__wrapper']}>
        <div>
          <p className={classes['pokemon-info__name']}>{currentPokemon.name || 'Unknown'}</p>
          <p className={classes['pokemon-info__id']}>{`id: ${currentPokemon.id || 'Oops! No IDea'}`}</p>
          <p
            className={classes['pokemon-info__status']}
          >
            {`status: ${currentPokemon.catched ? 'Catched!' : "It's free pokemon!"}`}
          </p>
          {!!currentPokemon.catchDate && (
          <p
            className={classes['pokemon-info__status']}
          >
            {`date: ${currentPokemon.catchDate}`}
          </p>
          )}
        </div>
        <div
          className={classes['pokemon-info__image']}
          style={{
            backgroundImage: `url('../../../pokemons/${currentPokemon.id
              ? `${currentPokemon.id}.png`
              : 'default_image.jpg'}')`,
          }}
        />
      </Wrapper>
    </div>
  );
};
