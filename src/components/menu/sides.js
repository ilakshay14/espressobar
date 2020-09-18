import React from 'react';

import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/FoodCard/FoodCardContainer';
import { connect } from 'react-redux';
import extractMenuItems from './helpers';

const mapStateToProps = state => {
    return { sidesMenu: extractMenuItems('sides', state.menu) }
};

const SidesItems = ({sidesMenu}) => {

    return (
        <StyledSides>
            <div>
                <h2>Sides</h2>
            </div>
            <div className="sides-options">
                {
                    sidesMenu.map(item => {
                        return <FoodCard
                            key={item._id}
                            id = {item._id}
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

const Sides = connect(mapStateToProps)(SidesItems);

export default Sides;