import { createModel } from '@rematch/core';
import { RootModel } from '../../store/models';

export interface LoaderState {
  /** Ошибки запросов/ иные ошибки */
  error: Error | null,
}

/** Данные для модальных окон */
export const modal = createModel<RootModel>()({
  state: {
    error: null,
  } as LoaderState,
  reducers: {
    /** Записать в стор ошибку */
    setError: (state, payload: Error | null) => ({
      ...state,
      error: payload,
    }),
  },
});
