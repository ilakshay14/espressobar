import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';


ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>,
    document.getElementById('root'));