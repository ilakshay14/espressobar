import React, { useEffect, Suspense } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios';

import Header from './components/header/header';
import StyledSection from './theme/styledSection';
import Navbar from './components/nav/nav';
import Coffeehouse from './components/coffeehouse/coffeehouse';
import Coffee from './components/coffee/coffee';

// import Menu from './components/menu/menu';
const Menu = React.lazy(() => import('./components/menu/menu'));

import Footer from './components/footer/footer';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Dashboard from './components/user/dashboard';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root';
import { ADD_MENU } from './constants/action.constants';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    useEffect(()=> {
        axios.get('http://localhost:3000/menu')
            .then(response => {
                console.log(response.data.menu);
                store.dispatch({
                    type: ADD_MENU,
                    payload: response.data.menu
                })
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <Provider store={store}>
            <div>

                {/* <Redirect from="/" to="/signup" /> */}
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
                    <Route path='/menu' render={() => (
                        <Suspense fallback={<h1>loading...</h1>}>
                            <Menu/>
                        </Suspense>
                    )} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/user' component={Dashboard} />

                </Switch>

                {/* <Dashboard /> */}
            </div>
        </Provider>
    );

}

export default withRouter(App);