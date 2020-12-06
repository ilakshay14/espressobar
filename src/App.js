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
import { fetchUserFromCookie } from './components/helpers/cookie.operations';
import Loader from './components/Loader/loader';

const Menu = React.lazy(() => import('./components/menu/menu'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/signup'));
const Dashboard = React.lazy(() => import('./components/user/dashboard'));
const MessageScreen = React.lazy(() => import('./components/helpers/message.screen'));
const ErrorScreen = React.lazy(() => import('./components/helpers/404.screen'));

import PrivateRoute from './hoc/privateRoutes';

const fetchMenu = async () => {
    let response = await HTTP_GET('menu');
    //console.log(response);
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
                )} />


                <Suspense fallback={<Loader/>}>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/login" render={()=>(
                        <>
                            <Navbar />
                            <Login />
                        </>
                    )}/>
                    <Route path="/signup" render={() => (
                        <>
                            <Navbar />
                            <SignUp />
                        </>
                    )}/>
                    <Route path="/newuser" component={ErrorScreen}/>
                    <Route path="/error" component={MessageScreen}/>
                    <PrivateRoute path="/user" component={Dashboard}/>
                </Suspense>

            </Switch>
        </div>
    );

}

export default withRouter(App);
