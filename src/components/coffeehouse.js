import React from 'react';
import CoffeehouseImage from '../assets/coffeehouse.jpeg';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../theme/defaultStyles';

const StyledCoffeehouse = styled.div`
    width: 100%;
    /* height: 100%; */
    background-color: #FAF7F7;
    
    .ch-image{
        width: 90%;
        margin: 0 auto;
        
    }

    .ch-image img {
        margin-top: 5%;
        width: 100%;
    }

    .ch-content{
        position: relative;
        ${FlexColumn}
        justify-content: space-evenly;
        width: 70%;
        height: 700px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0 auto;
        margin-top: -20%;

        h1 {
            font-weight: bold;
            font-size: 300%;
            line-height: 45px;
            letter-spacing: 0.25em;
        }

        .social-icons{
            ${FlexRow}
            align-self: center;
            font-size: 150%;
            width: 200px;
            justify-content: space-evenly;
            /* border: 1px solid black; */
            
        }

        .ch-text{
            align-self: center;
            width: 500px;
            text-align: center;
            font-size: 24px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.05em;
        }
        
    }
`;


const Coffeehouse = () => {
    return (
        <StyledCoffeehouse>
            <div className="ch-image">
                <img src={CoffeehouseImage} />
            </div>
            <div className="ch-content">
                <h1>Our Commitment</h1>
                <div className="social-icons">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <p className="ch-text">
                    We are committed to make every sip of
                    your coffee count in a way that it touches
                    your soul and makes you feel awesome
                    like you have never felt before.
                    <br /><br />
                    Our coffeehouse is equipped with everything that you need to network, code, read
                    and be productive.
                    <br /><br />
                    With that fresh aroma of coffee beans being brewed, that smooth jazz in the background
                    and a touch of happiness around you, we
                    are committed to make your visit
                    worthy of everything!
                </p>
            </div>
        </StyledCoffeehouse>
    );
}

export default Coffeehouse;