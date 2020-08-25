import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './theme/globalStyles';
import { Provider } from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
