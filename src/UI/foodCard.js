import React from 'react';
import Image from '../common/image';

const FoodCard = ({ src, caption, classname }) => {
    return (
        <div className={classname}>
            <Image src={src} />
            <h4>{caption}</h4>
        </div>
    );
}

export default FoodCard;