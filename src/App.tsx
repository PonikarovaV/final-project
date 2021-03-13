import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { URL } from './common/constants';

import { CatchedPokemon } from './features/CatchedPokemon';
import { Footer } from './features/Footer';
import { Header } from './features/Header';
import { MainPage } from './features/MainPage';
import { ErrorModal } from './features/Modals';
import { PokemonInfo } from './features/PokemonInfo';

export const App = (): React.ReactElement => (
  <>
    <Header />
    <ErrorModal />
    <Switch>
      <Route exact path={URL.mainPage}>
        <MainPage />
      </Route>
      <Route exact path={URL.pokemonInfo}>
        <PokemonInfo />
      </Route>
      <Route exact path={URL.catchedpokemon}>
        <CatchedPokemon />
      </Route>
    </Switch>
    <Footer />
  </>
);
