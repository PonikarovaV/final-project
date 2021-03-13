import { createModel } from '@rematch/core';
import { RootModel } from '../../store/models';

export interface LoaderState {
  error: Error | null,
}

export const modal = createModel<RootModel>()({
  state: {
    error: null,
  } as LoaderState,
  reducers: {
    setError: (state, payload: Error | null) => ({
      ...state,
      error: payload,
    }),
  },
});
