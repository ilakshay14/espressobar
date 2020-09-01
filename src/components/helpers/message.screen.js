import React, { useState } from 'react';
import styled from 'styled-components';
import {FlexColumn} from '../../theme/defaultStyles';
import { Link, Redirect } from 'react-router-dom';

const StyledScreen = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://cdn.lakshay.xyz/espresso-bar/screenA.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    ${FlexColumn}

    .screen__content{
        width: 50%;
        height: 40%;
        /* border: 1px solid white; */
        margin: auto;

        color: #ffffff;
        text-align: center;
        padding: 20px;

        .screen__content__heading{
            font-size: 300%;
            letter-spacing: 5px;
            padding: 20px;
        }

        .screen__content_text{
            font-size: 150%;
            letter-spacing: 3px;
            padding: 20px;
            margin-bottom: 20px;
        }

        button{
            margin-top: 10px;
            /* color: white; */
            font-size: 120%;
            border: 1px solid #ffffff;
            width: 150px;
            height: 50px;
            border-radius: 25px;
        }

    }
`;


const MessageScreen = () => {

    const [redirect, setRedirect] = useState(false);

    const redirectToHome = () => {
        setRedirect(true)
    }

    if(redirect){
        return <Redirect to="/menu"/>
    }
    return ( 
        <StyledScreen>
            <div className="screen__content">
                {/* <p className="screen__content__heading">Page not found</p> */}
                <p className="screen__content__heading">Coffee mug is empty</p>
                <p className="screen__content_text">
                    Uh oh! Coffee didn't brew peroperly. Let's try again, and we'll brew a delicious coffee.
                </p>
                <button onClick={redirectToHome}>
                    home
                </button>
                
            </div>
        </StyledScreen>
    );
}
export default MessageScreen;