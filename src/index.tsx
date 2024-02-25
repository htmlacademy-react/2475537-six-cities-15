import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppSettings = {
  cardsCount: 6
} as const;

root.render(
  <React.StrictMode>
    <App cardsCount={AppSettings.cardsCount} />
  </React.StrictMode>
);
