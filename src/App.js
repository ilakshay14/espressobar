import React from 'react';

import Header from './components/header';
import StyledSection from './theme/styledSection';
import Navbar from './components/nav';
import Coffeehouse from './components/coffeehouse';

const App = () => {
    return (
        <div>
            <Navbar />
            <StyledSection>
                <Header />
            </StyledSection>
            <StyledSection>
                <Coffeehouse />
            </StyledSection>
        </div>
    );

}

export default App;