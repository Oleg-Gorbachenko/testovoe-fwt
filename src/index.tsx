import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.sass';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import { App } from 'components/App';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();