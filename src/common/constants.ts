export const URL = {
  mainPage: '/',
  pockemonInfo: '/pockemon/:id',
  catchedPockemon: '/pockemon/catched',
};

export const MENU_ITEMS = [
  {
    id: 1,
    description: 'Main',
    link: URL.mainPage,
  },
  {
    id: 2,
    description: 'Catched Pockemons',
    link: URL.catchedPockemon,
  },
];
