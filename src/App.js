import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import Header from './components/header';
import StyledSection from './styles/styledSection';
import Navbar from './components/nav';
import Coffeehouse from './components/coffeehouse';
import Coffee from './components/coffee';
import Menu from './components/menu';
import Footer from './components/footer';
import Login from './components/login';

const App = () => {
    return (
        <div>
            {/* <Navbar />


            <Switch>
                <Route path='/' exact render={() => (
                    <>
                        <StyledSection>
                            <Header />
                        </StyledSection>
                        <StyledSection>
                            <Coffeehouse />
                        </StyledSection>
                        <StyledSection>
                            <Coffee />
                        </StyledSection>
                    </>
                )} />
                <Route path='/menu' component={Menu} />
            </Switch> */}

            <Login />
        </div>
    );

}

export default App;