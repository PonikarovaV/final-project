import { createModel } from '@rematch/core';
import { RootModel } from '../../store/models';

export interface LoaderState {
  headerOffsetHeight: null | number,
  fooretOffsetHeigth: null | number,
}

export const metrics = createModel<RootModel>()({
  state: {
    headerOffsetHeight: null,
    fooretOffsetHeigth: null,
  } as LoaderState,
  reducers: {
    setMetrics: (state, { name, value }: { name: string, value: number | null }) => ({
      ...state,
      [name]: value,
    }),
  },
});
