import { createModel } from '@rematch/core';
import { RootModel } from '../../store/models';

export interface LoaderState {
  /** Высота header */
  headerOffsetHeight: null | number,
  /** Высота footer */
  fooretOffsetHeigth: null | number,
}

/** Метрики элементов */
export const metrics = createModel<RootModel>()({
  state: {
    headerOffsetHeight: null,
    fooretOffsetHeigth: null,
  } as LoaderState,
  reducers: {
    /** Записать в стор метрики */
    setMetrics: (state, { name, value }: { name: string, value: number | null }) => ({
      ...state,
      [name]: value,
    }),
  },
});
