import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './theme/globalStyles';


ReactDOM.render(
    <React.Fragment>

        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root')
);
