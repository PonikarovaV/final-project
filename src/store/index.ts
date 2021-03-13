import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { models, RootModel } from './models';
import { history } from './history';

const router = connectRouter(history);

export const store = init({
  models,
  redux: {
    reducers: {
      router,
    },
    middlewares: [routerMiddleware(history)],
  },
});

export const { dispatch, getState } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
