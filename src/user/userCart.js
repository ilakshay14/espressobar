import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const initialState = [
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    }
]

const StyledCart = styled.div`
    margin-top: 2%;
    width: 85%;
    height: 80vh;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${FlexRow};

    .cart-A, .cart-B{
        width: 45%;
        height: 90%;
        /* border: 1px solid black; */
        padding: 10px;
    }

    .cart-A{
        border-right: 1px solid #DBE0E6;
        ${FlexColumn}
        justify-content: space-evenly;
        flex-wrap: nowrap;
        overflow-y: scroll;

        .cart-item{
            width: 90%;
            height: 100px;
            /* border: 1px solid black; */
            margin: 2% auto;
            ${FlexRow}
            justify-content: space-between;
            align-content: center;

            p{
                margin: auto;
            }

            .item-name{
                width: 30%;
            }

            .item-price{
                color: #C4C4C4;
            }

            .cart-item-img{
                width: 90px;
                height: 90px;
                
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            }
        }
    }

    .cart-B{
        ${FlexColumn}

        .cart-wrapper{
            
            width: 80%;
            height: 80%;
            ${FlexColumn}
            justify-content: space-evenly;
            
            .pickup-time{
                ${FlexColumn}
                justify-content: space-evenly;

                color: white;
                width: 90%;
                height: 150px;
                background: #39486C;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 25px;

                p{
                    font-size: 18px;
                    text-align: center;
                }

                .time{
                    ${FlexRow}
                    justify-content: space-evenly;
                    width: 50%;

                    p{
                        margin-top: auto;
                        margin-bottom: auto;
                    }

                    button{
                        width: 50px;
                        height: 50px;
                        background: #9B3605;
                        border: none;
                        border-radius: 10px;
                        color: white;
                        font-size: 220%;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                        ${FlexColumn}
                        ion-icon{
                            vertical-align: unset;
                            
                        }
                    }
                }
            }

            .final-price{
                ${FlexRow}
                justify-content: space-evenly;
                width: 90%;

                .total-label{
                    margin-top: auto;
                    margin-bottom: auto;
                }

                .total-price{
                    font-size: 24px;
                    font-weight: bold;
                }
            }

            .checkout-button{
                align-self: center;
                border: none;
                width: 150px;
                height: 60px;

                background: #9B3605;
                border-radius: 100px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                ${FlexRow}
                justify-content: space-evenly;
                color: white;
                font-size: 18px;
            }
        }
    }
`;

const UserCart = () => {
    return (
        <StyledCart>
            <div className="cart-A">

                {
                    initialState.map(item => {
                        return <div className="cart-item">
                            <div className="cart-item-img">
                                <img src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
                            </div>
                            <p>1 x</p>
                            <p className="item-name">Classic Scrambled Eggs</p>
                            <p className="item-price">100 INR</p>

                        </div>
                    })
                }
            </div>
            <div className="cart-B">
                <div className="cart-wrapper">
                    <div className="pickup-time">
                        <p>Pick up Time</p>
                        <div className="time">
                            <button>
                                <ion-icon name="time-outline"></ion-icon>
                            </button>
                            <p>35 min</p>
                        </div>
                    </div>
                    <div className="final-price">
                        <p className="total-label">Total:</p>
                        <p className="total-price">300 INR</p>
                    </div>
                    <button className="checkout-button">
                        Checkout
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </StyledCart>
    );
}

export default UserCart;