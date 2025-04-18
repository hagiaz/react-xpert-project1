import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './states';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>,
);
