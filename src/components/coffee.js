import React from 'react';

import StyledCoffee from '../styles/styledCoffee';
import coffee1 from '../assets/coffee.webp';
import coffee2 from '../assets/coffee1.webp';




//TODO create common styles for images

const Coffee = () => {
    return (
        <StyledCoffee id="coffee">
            <h1 className="coffee-heading">The Basic</h1>
            <div className="coffee-content">
                <div className="coffee">
                    <div className="coffee-image">
                        <img src={coffee1} />
                    </div>
                    <div className="coffee-hero-text">
                        <h1>Iced Espresso</h1>
                        <p>Our strongest and smoothest blend - brewed in boiling water - french pressed and then cold brewed overnight to make your soul feel alive and strong.</p>
                    </div>

                </div>
                <div className="coffee">
                    <div className="coffee-hero-text">
                        <h1>Cold Brew</h1>
                        <p>Strong and smooth, slow steeped in cool water for 24 hours before it is french pressed and served with ice.</p>
                    </div>
                    <div className="coffee-image">
                        <img src={coffee2} />
                    </div>

                </div>
            </div>
        </StyledCoffee>
    );
}

export default Coffee;