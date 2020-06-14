import React from 'react';
import StyledCoffeehouse from '../styles/styledcoffeehouse';

const Coffeehouse = () => {
    return (
        <StyledCoffeehouse id="coffeehouse">
            <div className="ch-image">
                <img src='https://cdn.lakshay.xyz/espresso-bar/coffeehouse.jpeg' />
            </div>
            <div className="ch-content">
                <h1>Our Commitment</h1>
                <div className="social-icons">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <p className="ch-text">
                    We are committed to make every sip of
                    your coffee count in a way that it touches
                    your soul and makes you feel awesome
                    like you have never felt before.
                    <br /><br />
                    Our coffeehouse is equipped with everything that you need to network, code, read
                    and be productive.
                    <br /><br />
                    With that fresh aroma of coffee beans being brewed, that smooth jazz in the background
                    and a touch of happiness around you, we
                    are committed to make your visit
                    worthy of everything!
                </p>
            </div>
        </StyledCoffeehouse>
    );
}

export default Coffeehouse;