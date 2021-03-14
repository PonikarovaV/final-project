/** url страниц */
export const URL = {
  mainPage: '/',
  pokemonInfo: '/pokemons',
  catchedpokemon: '/pokemons/catched',
};

/** Пункты меню */
export const MENU_ITEMS = [
  {
    id: 1,
    description: 'Main',
    link: URL.mainPage,
  },
  {
    id: 2,
    description: 'Catched pokemons',
    link: URL.catchedpokemon,
  },
];

/** Количество покемонов для подгрузки на страницу */
export const POKEMONS_ON_PAGE = 10;
