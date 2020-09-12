import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/foodCard';

import { mix } from '../../utils/menu.json';

import { connect } from 'react-redux';
import extractMenuItems from './helpers';

const mapStateToProps = state => {
    return { mixMenu: extractMenuItems('mix', state.menu) }
};

const MixItems = ({mixMenu}) => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>Mix it Up</h2>
            </div>
            <div className="sides-options">
                {
                    mixMenu.map(item => {
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

const Mix = connect(mapStateToProps)(MixItems);

export default Mix;