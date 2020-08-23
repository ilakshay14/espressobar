import React from 'react';
import StyledSides from './styles/styledSides';
import FoodCard from '../../UI/foodCard';

import { cold } from '../../utils/menu.json';
import { connect } from 'react-redux';

const extractMenuItems = (type, menu) => {
    return menu.filter(item => item.type === type);
}


const mapStateToProps = state => {
    return { coldMenu: extractMenuItems('cold', state.menu) }
};

const ColdItems = ({coldMenu}) => {
    console.log(coldMenu);
    return (
        /*<StyledSides>
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
        </StyledSides>*/
        <StyledSides>
            <div className="menu-margin">
                <h2>The Basic - Cold</h2>
            </div>
            <div className="sides-options">
                {
                    coldMenu.map(item => {
                        return <FoodCard
                            key={item._id}
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