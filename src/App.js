import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { ADD_MENU, UPDATE_USER, USER_LOGIN } from './constants/action.constants';
import { useDispatch } from 'react-redux';

import Header from './components/header/header';
import StyledSection from './theme/styledSection';
import Navbar from './components/nav/nav';
import Coffeehouse from './components/coffeehouse/coffeehouse';
import Coffee from './components/coffee/coffee';
import { HTTP_GET, HTTP_POST } from './components/helpers/axios.config';
import { fetchUserFromCookie } from './components/helpers/fetchFromCookie';
import Axios from 'axios';
import Loader from './components/Loader/loader';

const Menu = React.lazy(() => import('./components/menu/menu'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/signup'));
const Dashboard = React.lazy(() => import('./components/user/dashboard'));
const MessageScreen = React.lazy(() => import('./components/helpers/message.screen'));
const ErrorScreen = React.lazy(() => import('./components/helpers/404.screen'));

const fetchMenu = async () => {
    let response = await HTTP_GET('menu');
    return response.data.menu;
}

const fetchUserItems = async (dispatch) => {
    const existingUser = fetchUserFromCookie();
    if (existingUser) {
        // Axios.post('http://localhost:8080/getuseritems',
        //     { _id: existingUser.id },
        //     {
        //         headers: {
        //             "x-access-token": existingUser.accessToken
        //         }
        //     }
        // )
        await HTTP_POST('getuseritems', { _id: existingUser.id})
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: {
                    id: existingUser.id,
                    firstname: existingUser.firstname,
                    lastname: existingUser.lastname,
                    cart: response.data.cart,
                    bookmarks: response.data.bookmarks
                }
            });
        });
    }
}

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMenu().then(response => {
            dispatch({
                type: ADD_MENU,
                payload: response
            })
        });

        fetchUserItems(dispatch);




    }, []);


    return (
        <div>
            {/* <Redirect from="/" to="/signup" /> */}

            <Switch>

                <Route path='/' exact render={() => (
                    <>
                        {/* <MessageScreen/> */}
                        {/* <ErrorScreen/> */}
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
                    <Suspense fallback={<Loader/>}>
                        <Menu />
                    </Suspense>
                )} />

                <Route path='/login' render={() => (
                    <Suspense fallback={<Loader/>}>
                        <Navbar />
                        <Login />
                    </Suspense>
                )} />

                <Route path='/signup' render={() => (
                    <Suspense fallback={<Loader/>}>
                        <Navbar />
                        <SignUp />
                    </Suspense>
                )} />

                <Route path='/user' render={() => (
                    <Suspense fallback={<Loader/>}>
                        <Dashboard />
                    </Suspense>
                )} />

                <Route path='/newuser' render={() => (
                    <Suspense fallback={<Loader/>}>
                        <ErrorScreen />
                    </Suspense>
                )} />

                <Route path='/error' render={() => (
                    <Suspense fallback={<h1>loading...</h1>}>
                        <MessageScreen />
                    </Suspense>
                )} />

            </Switch>
        </div>
    );

}

export default withRouter(App);
