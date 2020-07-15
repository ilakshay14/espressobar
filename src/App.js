import React from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

import Header from './components/header/header';
import StyledSection from './theme/styledSection';
import Navbar from './components/nav/nav';
import Coffeehouse from './components/coffeehouse/coffeehouse';
import Coffee from './components/coffee/coffee';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Dashboard from './components/user/dashboard';

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}

            {/* <Redirect from="/" to="/home" /> */}
            <Switch>
                <Route path='/' exact render={() => (
                    <>
                        <Navbar />
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

                    // <Dashboard/>
                )} />
                <Route path='/menu' component={Menu} />
                <Route path='/signup' component={SignUp} />
                <Route path='/user' component={Dashboard} />

            </Switch>

            {/* <Dashboard /> */}
        </div>
    );

}

export default withRouter(App);