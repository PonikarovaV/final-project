import { createModel } from '@rematch/core';
import { getDateString } from '../../common/helpers/getDateString';
import { POKEMONS_ON_PAGE } from '../../common/constants';
import { getState } from '../../store';
import { RootModel } from '../../store/models';
import { Pokemon } from '../PokemonPanel/types';

export interface PokemonState {
  pokemonList: Pokemon[],
  currentPokemon: Pokemon| null,
  catchedPokemonList: Pokemon[],
}

export const pokemon = createModel<RootModel>()({
  state: {
    pokemonList: [],
    currentPokemon: null,
    catchedPokemonList: [],
  } as PokemonState,
  reducers: {
    setPokemonList: (state, payload: Pokemon[]) => ({
      ...state,
      pokemonList: [...state.pokemonList, ...payload],
    }),
    setCurrentPokemon: (state, payload: Pokemon) => ({
      ...state,
      currentPokemon: payload,
    }),
    collapsedPokemonList: (state) => ({
      ...state,
      pokemonList: state.pokemonList.slice(0, (POKEMONS_ON_PAGE - 1)),
    }),
    setCatchedPokemon: (state, payload: Pokemon) => ({
      ...state,
      pokemonList: state.pokemonList.map((item) => (
        item.id === payload.id ? payload : item
      )),
    }),
    setCatchedPokemonList: (state, payload: Pokemon[]) => ({
      ...state,
      catchedPokemonList: payload,
    }),
  },
  effects: (dispatch) => ({
    getPokemonList: async () => {
      dispatch.loader.setIsLoading(true);

      const { pokemonList } = getState().pokemon;

      const start = pokemonList.length
        ? pokemonList.length + 1
        : 0;

      const end = start + POKEMONS_ON_PAGE;

      fetch(`http://localhost:3000/pokemons?_start=${start}&_end=${end}`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Что-то пошло не так');
        })
        .then((data) => {
          dispatch.pokemon.setPokemonList(data);
        })
        .catch((error) => {
          dispatch.modal.setError(error.message);
        })
        .finally(() => {
          dispatch.loader.setIsLoading(false);
        });
    },
    getCatchedPokemonList: async () => {
      dispatch.loader.setIsLoading(true);
      fetch('http://localhost:3000/pokemons?catched=true', {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Что-то пошло не так');
        })
        .then((data) => {
          dispatch.pokemon.setCatchedPokemonList(data);
        })
        .catch((error) => {
          dispatch.modal.setError(error.message);
        })
        .finally(() => {
          dispatch.loader.setIsLoading(false);
        });
    },
    getCurrentPokemon: async (id: number) => {
      dispatch.loader.setIsLoading(true);

      if (!id) {
        return;
      }

      fetch(`http://localhost:3000/pokemons/${id}`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Что-то пошло не так');
        })
        .then((data) => {
          dispatch.pokemon.setCurrentPokemon(data);
        })
        .catch((error) => {
          dispatch.modal.setError(error.message);
        })
        .finally(() => {
          dispatch.loader.setIsLoading(false);
        });
    },
    catchPokemon: async (pokemonData: Pokemon) => {
      dispatch.loader.setIsLoading(true);

      if (!pokemonData) {
        return;
      }

      const { id } = pokemonData;

      const date = getDateString();

      fetch(`http://localhost:3000/pokemons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...pokemonData,
          catched: true,
          catchDate: date,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Что-то пошло не так');
        })
        .then((data) => {
          dispatch.pokemon.setCatchedPokemon(data);
        })
        .catch((error) => {
          dispatch.modal.setError(error.message);
        })
        .finally(() => {
          dispatch.loader.setIsLoading(false);
        });
    },
  }),
});
