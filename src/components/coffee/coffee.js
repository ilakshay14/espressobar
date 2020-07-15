import React from 'react';

import StyledCoffee from './styles/styledCoffee';
import Footer from '../footer/footer';



//TODO create common styles for images


const Coffee = () => {
    return (
        <StyledCoffee id="coffee">
            <h1 className="coffee-heading">The Basic</h1>
            <div className="coffee-content">
                <div className="coffee">
                    <div className="coffee-image">
                        <img src='https://cdn.lakshay.xyz/espresso-bar/cold/icedespresso.webp' />
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
                        <img src='https://cdn.lakshay.xyz/espresso-bar/cold/coldbrew.webp' />
                    </div>

                </div>
            </div>
            <Footer />
        </StyledCoffee>
    );
}

export default Coffee;