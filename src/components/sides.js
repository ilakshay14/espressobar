import React from 'react';

import Cake from '../assets/sides/cake.jpg';
import Eggs from '../assets/sides/eggs.jpg';
import Fries from '../assets/sides/fries.jpg';
import Marble from '../assets/sides/marble.jpg';
import Sandwich from '../assets/sides/sandwich.jpg';
import Wings from '../assets/sides/wings.jpg';

import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

// import Menu from '../utils/menu';


const Sides = () => {
    return (
        <StyledSides>
            <div>
                <h2>Sides</h2>
            </div>
            <div className="sides-options">

                <FoodCard
                    classname='food-card'
                    src={Fries}
                    caption='Salted Fries'
                    price='60 INR'
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Eggs}
                    caption={'Classic Scrambled Eggs'}
                    price={'50 INR'}
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Sandwich}
                    caption={'Egg Chicken Sandwich'}
                    price={'120 INR'}
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Wings}
                    caption={'Chicken Wings'}
                    price={'150 INR'}
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Cake}
                    caption={'Blueberry Cheese Cake'}
                    price={'100 INR'}
                    buttonStyle='addToCart'
                />
                <FoodCard
                    classname='food-card'
                    src={Marble}
                    caption={'Vanilla Marble Cake'}
                    price={'80 INR'}
                    buttonStyle='addToCart'
                />

            </div>


        </StyledSides>
    );
}

export default Sides;