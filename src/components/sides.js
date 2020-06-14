import React from 'react';

import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

// import Menu from '../utils/menu';

import { sides } from '../utils/menu.json';


const Sides = () => {

    return (
        <StyledSides>
            <div>
                <h2>Sides</h2>
            </div>
            <div className="sides-options">
                {
                    sides.map(item => {
                        return <FoodCard
                            key={item.name}
                            classname='food-card'
                            src={`https://cdn.lakshay.xyz/${item.image}`}
                            caption={item.name}
                            price={item.price}
                            buttonStyle='addToCart'
                        />
                    })
                }
            </div>


        </StyledSides>
    );
}

export default Sides;