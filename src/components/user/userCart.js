import React, { useState, useEffect } from 'react';
import StyledCart from './styles/styledCart';
import { connect } from 'react-redux';
import { resolveCart } from '../helpers/resolve.cart';
import { removeFromCart } from '../helpers/cart.operations';
import { UPDATE_CART } from '../../constants/action.constants';

const mapStateToProps = state => {
    let {cartFromHelper, amount} = resolveCart(state.user.cart, state.menu)
    return {cartFromHelper, amount}
};

const mapDispatchToProps = (dispatch) => {
    return({
        updateCart: (cart) => { dispatch({
            type: UPDATE_CART,
            payload: cart
        })}
    })
};

const Cart = ({ cartFromHelper, amount, updateCart }) => {

    useEffect(()=>{
    }, []);

    const removeItemFromCart = (id) => {
        removeFromCart(id).then(response => {
            updateCart(response.data.cart);

        })
    }
 
    const toRender = cartFromHelper?.length > 0 ?
        (<>
            <div className="cart-A">

                {
                    cartFromHelper?.map(item => {
                        return <div className="cart-item" key={item._id}>
                            <div className="cart-item-img">
                                <img src={`https://cdn.lakshay.xyz/${item.image}`} />
                            </div>
                            <p>1 x</p>
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">{item.price} INR</p>
                            <a onClick={()=> removeItemFromCart(item._id)}><ion-icon name="trash-outline"></ion-icon></a>

                        </div>
                    })
                }
            </div>
            <div className="cart-B">
                <div className="cart-wrapper">
                    <div className="pickup-time">
                        <p>Pick up Time</p>
                        <div className="time">
                            <button>
                                <ion-icon name="time-outline"></ion-icon>
                            </button>
                            <p>35 min</p>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="final-price">
                            <p className="total-label">Total:</p>
                            <p className="total-price">{amount} INR</p>
                        </div>
                        <div className="checkout-line"></div>
                        <button className="checkout-button">
                            Checkout
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </>
        ) : <h1>Your Cart is Empty.</h1>;

    return <StyledCart>
        {toRender}
        {/* <h1>Online orders are coming soon!</h1> */}
    </StyledCart>

}

const UserCart = connect(mapStateToProps,mapDispatchToProps)(Cart);

export default UserCart;