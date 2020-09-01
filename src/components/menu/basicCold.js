import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/foodCard';

import { connect } from 'react-redux';
import extractMenuItems from './helpers';



const mapStateToProps = state => {
    return { coldMenu: extractMenuItems('cold', state.menu) }
};

const ColdItems = ({coldMenu}) => {
    
    // const addToCart = () => {

    // }

    return (
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Cold</h2>
            </div>
            <div className="sides-options">
                {
                    coldMenu.map(item => {
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

const Cold = connect(mapStateToProps)(ColdItems);

export default Cold;