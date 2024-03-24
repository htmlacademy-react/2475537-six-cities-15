import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { checkAuthorization } from './api/api-actions';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/errorMessage/errorMessage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppSettings = {
  cardsCount: 6
} as const;

store.dispatch(checkAuthorization());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App cardsCount={AppSettings.cardsCount} />
    </Provider>
  </React.StrictMode>
);
