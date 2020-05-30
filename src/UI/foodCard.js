import React from 'react';
import Image from '../common/image';

const FoodCard = ({ src, caption, classname, buttonStyle, price }) => {
    return (
        <div className={classname}>
            <Image src={src} />
            <h4>{caption}</h4>
            <p>{price}</p>
            <button className={buttonStyle}>
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    );
}

export default FoodCard;