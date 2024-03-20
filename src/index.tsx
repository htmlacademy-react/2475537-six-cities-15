import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppSettings = {
  cardsCount: 6
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cardsCount={AppSettings.cardsCount} reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
