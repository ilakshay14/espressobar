import { connect } from 'react-redux';
import { UPDATE_CART } from '../../constants/action.constants';
import Card from './Card';

const mapDispatchToProps = (dispatch) => {
    return({
        updateCart: (id) => { dispatch({
            type: UPDATE_CART,
            payload: id
        })}
    })
};

const mapStateToProps = state => {
    return { cart: state.user.cart }
};

const FoodCard = connect(mapStateToProps, mapDispatchToProps)(Card)

export default FoodCard;