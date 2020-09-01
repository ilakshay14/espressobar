import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import StyledScreen from './screen.styled';
import styled from 'styled-components';

const Screen = styled(StyledScreen)`
    background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://cdn.lakshay.xyz/espresso-bar/userna.jpg');
`;

const ErrorScreen = () => {

    const [redirect, setRedirect] = useState(false);

    const redirectToHome = () => {
        setRedirect(true)
    }

    if(redirect){
        return <Redirect to="/signup"/>
    }
    return ( 
        <Screen>
            <div className="screen__content">
                {/* <p className="screen__content__heading">Page not found</p> */}
                <p className="screen__content__heading">Is this your first visit?</p>
                <p className="screen__content_text">
                    Uh oh! We couldn't find you. Seems like this is your first visit, we would like to know more about you.
                </p>
                <button onClick={redirectToHome}>
                    sign up
                </button>
                
            </div>
        </Screen>
    );
}
export default ErrorScreen;