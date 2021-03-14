import React from 'react';
import { push } from 'connected-react-router';

import { dispatch } from '../../store';
import { Pokemon } from './types';
import { URL } from '../../common/constants';

import classes from './styles/pokemonPanel.module.css';

interface PokemonPanelProps {
  data: Pokemon,
  shouldButtonRender: boolean,
}

/** Панель с информацией о покемоне */
export const PokemonPanel = (props: PokemonPanelProps) => {
  const { data: { name, id, catched }, shouldButtonRender } = props;

  const redirectUrl = `${URL.pokemonInfo}?id=${id.toString()}`;

  const handleCatchClick = (ev: { stopPropagation: () => void }) => {
    ev.stopPropagation();

    dispatch.pokemon.catchPokemon(props.data);
  };

  const handleRedirectClick = () => dispatch(push(redirectUrl));

  return (
    <div
      className={classes['pokemon-panel']}
      onClick={handleRedirectClick}
    >
      <p className={classes['pokemon-panel__name']}>{name}</p>
      {shouldButtonRender && (
      <button
        className={`${classes['pokemon-panel__button']} ${!catched ? classes['pokemon-panel__button_active'] : ''}`}
        onClick={handleCatchClick}
        type="button"
        disabled={!!catched}
      >
        Catch!
      </button>
      )}
      <div
        className={classes['pokemon-panel__icon']}
        style={{
          backgroundImage: `url('../../../pokemons/${id
            ? `${id}.png`
            : 'default_image.jpg'}')`,
        }}
      />
    </div>
  );
};
