import React from 'react';
import ReactDOM from 'react-dom';


import GlobalStyle from './theme/globalStyles';
import App from './App';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>,
    document.getElementById('root')
);
