import React, { useState, useEffect } from 'react';
import Image from '../common/image';
import axios from 'axios';
import { connect } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART } from '../constants/action.constants';

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

const Card = ({ id, src, caption, classname, buttonStyle, price, bookmark, updateCart, cart }) => {
    
    const [icon, changeIcon] = useState(false);

    useEffect(() => {
        // console.log(cart);
        cart.find( item => {
            if(item.id === id){
                changeIcon(true);
            }
        });
    },[]);
    
    const addToCart = () => {
        let user = JSON.parse(localStorage.getItem('user'));

        axios.post('http://localhost:3000/updatecart',
        {
            "itemid": id,
            "qty": 10,
            "_id": user.id
        }).then(response => {
            console.log(response);
            if(response.status === 200){
                changeIcon(true);
                console.log(response.data.cart);
                updateCart(response.data.cart);
            }
        })
        .catch(error => console.log(error));
    }

    const removeFromCart = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        axios.post('http://localhost:3000/removeitem',
        {
            "itemid": id,
            "_id": user.id
        }).then(response => {
            //console.log(response);
            if(response.status === 200){
                changeIcon(false);
                //console.log(response.data.cart);
                updateCart(response.data.cart);
            }
        })
        .catch(error => console.log(error));
    }
    
    return (
        <div className={classname}>
            <Image src={src} />
            <div className="foodcard-header">
                <h4>
                    {caption}
                    <ion-icon name={bookmark || "bookmark-outline"}></ion-icon>

                </h4>
            </div>

            <p>{price} INR</p>
            <button className={buttonStyle} onClick={icon? removeFromCart : addToCart}>
                <ion-icon name={ icon?"trash-outline" :"cart-outline"}></ion-icon>
            </button>
        </div>
    );
}

const FoodCard = connect(mapStateToProps, mapDispatchToProps)(Card)

export default FoodCard;