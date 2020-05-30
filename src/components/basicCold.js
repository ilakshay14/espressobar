import React from 'react';
import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

import ColdBrew from '../assets/coffee.webp';
import IcedEspresso from '../assets/coffee1.webp';
import IcedAmericano from '../assets/icedamericano.jpg';

const Cold = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Cold</h2>
            </div>
            <div className="sides-options">
                <FoodCard
                    classname='food-card'
                    src={ColdBrew}
                    caption='Cold Brew'
                    price='250 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={IcedEspresso}
                    caption='Iced Espresso'
                    price='200 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={IcedAmericano}
                    caption='Iced Americano'
                    price='150 INR'
                    buttonStyle='addToCart'
                />

            </div>
        </StyledSides>
    );
}

export default Cold;