import React from 'react';

import Header from './components/header';
import StyledSection from './theme/styledSection';

const App = () => {
    console.log('hello');

    return (
        <div>
            <StyledSection>
                <Header />
            </StyledSection>
        </div>
    );

}

export default App;