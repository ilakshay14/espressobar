import React from 'react';
import Image from '../common/image';

const FoodCard = ({ src, caption, classname, buttonStyle, price }) => {
    return (
        <div className={classname}>
            <Image src={src} />
            <div className="foodcard-header">
                <h4>
                    {caption}
                    <ion-icon name="bookmark-outline"></ion-icon>

                </h4>



            </div>

            <p>{price}</p>
            <button className={buttonStyle}>
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    );
}

export default FoodCard;