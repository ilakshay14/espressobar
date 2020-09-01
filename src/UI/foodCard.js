import React from 'react';
import Image from '../common/image';

const FoodCard = ({ id, src, caption, classname, buttonStyle, price, bookmark }) => {
    const addToCart = () => {
        console.log(`key = ${key} caption = ${caption}`);
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

            <p>{price}</p>
            <button className={buttonStyle} onClick={addToCart}>
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    );
}

export default FoodCard;