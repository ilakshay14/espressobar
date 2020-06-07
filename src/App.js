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
import SignUp from './components/signup';
import Dashboard from './user/dashboard';

const App = () => {
    return (
        <div>
            {/* <Navbar />


            <Switch>
                <Route path='/' exact render={() => (
                    <Login />

                )} />
                <Route path='/menu' component={Menu} />
                <Route path='/signup' component={SignUp} />
                <Route path='/home' exact render={() => (
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
            </Switch> */}

            <Dashboard />

        </div>
    );

}

export default App;