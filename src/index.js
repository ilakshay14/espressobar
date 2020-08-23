import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './theme/globalStyles';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root';


ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
