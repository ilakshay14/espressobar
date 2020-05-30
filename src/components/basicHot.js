import React from 'react';
import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

import EspressoSingle from '../assets/hot/espresso_single.jpg'
import EspressoDouble from '../assets/hot/espresso_double.jpg'
import Americano from '../assets/hot/americano.jpg'

const Hot = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Hot</h2>
            </div>
            <div className="sides-options">
                <FoodCard
                    classname='food-card'
                    src={EspressoSingle}
                    caption='Espresso - Single'
                    price='150 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={EspressoDouble}
                    caption='Espresso Double'
                    price='200 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Americano}
                    caption='Americano'
                    price='100 INR'
                    buttonStyle='addToCart'
                />

            </div>
        </StyledSides>
    );
}

export default Hot;