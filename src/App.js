import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios';

import Header from './components/header/header';
import StyledSection from './theme/styledSection';
import Navbar from './components/nav/nav';
import Coffeehouse from './components/coffeehouse/coffeehouse';
import Coffee from './components/coffee/coffee';

const Menu = React.lazy(() => import('./components/menu/menu'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/signup'));
const Dashboard = React.lazy(() => import('./components/user/dashboard'));

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
                    <Route path='/login' render={() => (
                        <Suspense fallback={<h1>loading...</h1>}>
                            <Login/>
                        </Suspense>
                    )} />
                    <Route path='/signup' render={() => (
                        <Suspense fallback={<h1>loading...</h1>}>
                            <SignUp/>
                        </Suspense>
                    )} />
                    <Route path='/user' render={() => (
                        <Suspense fallback={<h1>loading...</h1>}>
                            <Dashboard/>
                        </Suspense>
                    )} />

                </Switch>

                {/* <Dashboard /> */}
            </div>
        </Provider>
    );

}

export default withRouter(App);
