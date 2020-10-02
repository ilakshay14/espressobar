import React, { useState, useEffect } from 'react';
import Image from '../../common/image';
import axios from 'axios';

const Card = ({ id, src, caption, classname, buttonStyle, price, bookmark, updateCart, cart }) => {

    const [icon, changeIcon] = useState(false);

    useEffect(() => {
        if (cart?.find(item => item.itemid === id)) {
            changeIcon(true);
        }
    }, [id]);

    const addToCart = () => {
        let user = JSON.parse(localStorage.getItem('user'));

        axios.post('http://192.168.29.66:8080/updatecart',
            {
                "itemid": id,
                "_id": user.id
            }).then(response => {
                if (response.status === 200) {
                    changeIcon(true);
                    updateCart(response.data.cart);
                }
            })
            .catch(error => console.log(error));
    }

    const removeFromCart = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        axios.post('http://192.168.29.66:8080/removeitem',
            {
                "itemid": id,
                "_id": user.id
            }).then(response => {
                if (response.status === 200) {
                    changeIcon(false);
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
                </h4>
            </div>
            <div className="foodcard-footer">
                <div>
                    <button className={buttonStyle} onClick={icon ? removeFromCart : addToCart}>
                        <ion-icon name={icon ? "trash-outline" : "cart-outline"}></ion-icon>
                    </button>
                </div>
                <div>
                    <p>{price} INR</p>
                </div>
                <div>
                    <ion-icon name={bookmark || "bookmark-outline"}></ion-icon>
                </div>



            </div>
        </div>
    );
}

export default Card;