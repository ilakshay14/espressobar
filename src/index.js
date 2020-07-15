import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './theme/globalStyles';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
