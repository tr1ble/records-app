import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import { render } from 'react-dom';

import App from './App';
import './index.css';

const rootElement = document.getElementById("root");

render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootElement
);

