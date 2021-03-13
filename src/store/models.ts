import { Models } from '@rematch/core';
import { pokemon } from '../features/Pokemon';
import { loader } from '../features/Loader';
import { modal } from '../features/Modals';

export interface RootModel extends Models<RootModel> {
  pokemon: typeof pokemon,
  loader: typeof loader,
  modal: typeof modal,
}

export const models: RootModel = {
  pokemon,
  loader,
  modal,
};
