import { Models } from '@rematch/core';
import { pokemon } from '../features/Pokemon';
import { loader } from '../features/Loader';
import { modal } from '../features/Modals';
import { metrics } from '../features/Metrics';

export interface RootModel extends Models<RootModel> {
  pokemon: typeof pokemon,
  loader: typeof loader,
  modal: typeof modal,
  metrics: typeof metrics,
}

export const models: RootModel = {
  pokemon,
  loader,
  modal,
  metrics,
};
