import { createModel } from '@rematch/core';
import { RootModel } from '../../store/models';

export interface LoaderState {
  isLoading: boolean,
}

export const loader = createModel<RootModel>()({
  state: {
    isLoading: false,
  } as LoaderState,
  reducers: {
    setIsLoading: (state, payload: boolean) => ({
      ...state,
      isLoading: payload,
    }),
  },
});
