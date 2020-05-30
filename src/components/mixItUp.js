import React from 'react';
import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

import JD from '../assets/mix/jd.jpg';
import Jameson from '../assets/mix/jameson.jpg';
import Coke from '../assets/mix/coke.jpg';

const Mix = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>Mix it Up</h2>
            </div>
            <div className="sides-options">
                <FoodCard
                    classname='food-card'
                    src={Coke}
                    caption='Coke'
                    price='70 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Jameson}
                    caption='Jameson Irish whiskey'
                    price='150 INR/shot'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={JD}
                    caption='Jack Daniels'
                    price='220 INR/shot'
                    buttonStyle='addToCart'
                />

            </div>
        </StyledSides>
    );
}

export default Mix;