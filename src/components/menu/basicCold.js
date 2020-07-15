import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/foodCard';

import { cold } from '../../utils/menu.json';

const Cold = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Cold</h2>
            </div>
            <div className="sides-options">
                {
                    cold.map(item => {
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

export default Cold;