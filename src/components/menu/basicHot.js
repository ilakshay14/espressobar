import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/FoodCard/FoodCardContainer';

import { connect } from 'react-redux';
import extractMenuItems from './helpers';

const mapStateToProps = state => {
    return { hotMenu: extractMenuItems('hot', state.menu) }
};

const HotItems = ({hotMenu}) => {
    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Hot</h2>
            </div>
            <div className="sides-options">
                {
                    hotMenu.map(item => {
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

const Hot = connect(mapStateToProps)(HotItems);

export default Hot;