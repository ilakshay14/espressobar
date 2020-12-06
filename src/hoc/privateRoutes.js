import React, { Suspense, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { fetchUserFromCookie } from '../components/helpers/cookie.operations';
import Loader from '../components/Loader/loader';

const PrivateRoute = ({path, component}) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const userToken = fetchUserFromCookie() || null;
        console.log(userToken);
        if(!userToken){
            setRedirect(true);
            return;
        }

        const tokenExp = JSON.parse(atob(userToken.accessToken.split('.')[1])).exp * 1000;
        console.log(tokenExp);

        if(Date.now() > tokenExp){
            setRedirect(true);
        }
    }, [path]);

    if(redirect)
        return <Redirect to='/login'/>

    return (
        <Suspense fallback={<Loader/>}>
            <Route path={path} component={component}/>
        </Suspense>
    );
}

export default PrivateRoute;