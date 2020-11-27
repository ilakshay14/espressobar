import React, { useState, useEffect } from 'react';
import Image from '../../common/image';
import axios from 'axios';
import { fetchUserFromCookie } from '../../components/helpers/cookie.operations';
import { HTTP_POST } from '../../components/helpers/axios.config';

const Card = ({ id, src, caption, classname, buttonStyle, price, bookmark, updateCart, cart }) => {

    const [icon, changeIcon] = useState(false);

    useEffect(() => {
        if (cart?.find(item => item.itemid === id)) {
            changeIcon(true);
        }
    }, [id]);

    const addToCart = () => {
        let user = fetchUserFromCookie();
        //TODO: can we move this user in state?
        
        const helper = async(data) => {
            HTTP_POST('updatecart', data)
            .then(response => {
                if (response.status === 200) {
                    changeIcon(true);
                    updateCart(response.data.cart);
                }
            })
            .catch(error => console.log(error));
        }

        helper({ "itemid": id, "_id": user.id });
    }

    const removeFromCart = () => {
        let user = fetchUserFromCookie();

        const helper = async(data) => {
            HTTP_POST('removeitem', data)
            .then(response => {
                if (response.status === 200) {
                    changeIcon(true);
                    updateCart(response.data.cart);
                }
            })
            .catch(error => console.log(error));
        }

        helper({ "itemid": id, "_id": user.id });
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
            <button className={buttonStyle} onClick={icon ? removeFromCart : addToCart}>
                <ion-icon name={icon ? "trash-outline" : "cart-outline"}></ion-icon>
            </button>
            
            {/* <div className="foodcard-footer">
                <div>
                    
                </div>
                <div>
                    
                </div>v
                <div>
                    
                </div>



            </div> */}
        </div>
    );
}

export default Card;