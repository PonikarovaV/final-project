import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { history } from './store/history';
import { App } from './App';
import { store } from './store';
import { ErrorBoundary } from './features/ErrorHandling/ErrorBoundary';

const element = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
