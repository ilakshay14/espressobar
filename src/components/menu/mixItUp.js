import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/foodCard';

import { mix } from '../../utils/menu.json';

const Mix = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>Mix it Up</h2>
            </div>
            <div className="sides-options">
                {
                    mix.map(item => {
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

export default Mix;