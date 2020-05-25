import React from 'react';

import Header from './components/header';
import StyledSection from './styles/styledSection';
import Navbar from './components/nav';
import Coffeehouse from './components/coffeehouse';
import Coffee from './components/coffee';

const App = () => {
    return (
        <div>
            <Navbar />
            {/* <StyledSection>
                <Header />
            </StyledSection>
            <StyledSection>
                <Coffeehouse />
            </StyledSection> */}
            <StyledSection>
                <Coffee />
            </StyledSection>
        </div>
    );

}

export default App;