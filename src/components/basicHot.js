import React from 'react';
import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

import { hot } from '../utils/menu.json';

const Hot = () => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Hot</h2>
            </div>
            <div className="sides-options">
                {
                    hot.map(item => {
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

export default Hot;