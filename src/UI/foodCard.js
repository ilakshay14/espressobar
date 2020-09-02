import React from 'react';
import Image from '../common/image';
import axios from 'axios';

const FoodCard = ({ id, src, caption, classname, buttonStyle, price, bookmark }) => {
    const addToCart = () => {
        
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(`key = ${id}
        caption = ${caption}
        user = ${user.id}
        `);

        axios.post('http://localhost:3000/updatecart',
        {
            "itemid": id,
            "qty": 1,
            "_id": user.id
        }).then(response => console.log(response))
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

            <p>{price}</p>
            <button className={buttonStyle} onClick={addToCart}>
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    );
}

export default FoodCard;