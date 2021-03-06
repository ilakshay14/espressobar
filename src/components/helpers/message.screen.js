import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import StyledScreen from './screen.styled';

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