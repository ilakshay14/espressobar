import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../theme/defaultStyles';
import { connect } from 'react-redux';

const StyledCart = styled.div`
    margin-top: 5%;
    width: 100%;
    height: 100vh;

    ${FlexRow};

    .cart-A, .cart-B{
        width: 40%;
        height: 80%;
        
        padding: 10px;
    }

    .cart-A{
        border-right: 1px solid #DBE0E6;

        ${FlexColumn}
        justify-content: start;
        flex-wrap: nowrap;
        overflow-y: scroll;

        .cart-item{
            width: 90%;
            height: 100px;
            margin: 2% auto;
            background-color: #ffffff;
            ${FlexRow}
            justify-content: space-between;
            align-content: center;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
            transition: all 0.25s linear;
            border-radius: 15px;

            :hover{
                box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
            }

            p{
                margin: auto;
            }

            .item-name{
                width: 30%;
            }

            .item-price{
                color: #C4C4C4;
            }

            a {
                margin: auto;
                font-size: 120%;
            }

            .cart-item-img{
                width: 100px;
                height: 100px;
                
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
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
                border-radius: 15px;
                box-shadow: 0px 5px 70px rgba(0, 0, 0, 0.25);

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

            .checkout{
                width: 70%;
                height: 200px;
                align-self: center;

                ${FlexRow}
                align-content: space-evenly;
                background: #FFFFFF;
                box-shadow: 0px 5px 70px rgba(0, 0, 0, 0.25);
                border-radius: 20px;

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

                .checkout-line{
                    border-bottom: 1px solid #DBE0E6;
                    width: 200px;
                }

                .checkout-button{
                    align-self: center;
                    border: none;
                    width: 150px;
                    height: 50px;

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
    }
`;

const mapStateToProps = state => {
    return { userCart: state.user.cart }
};

const Cart = ({ userCart }) => {
    // const toRender = userCart?.length > 0 ?
    //     (<>
    //         <div className="cart-A">

    //             {
    //                 initialState.map(item => {
    //                     return <div className="cart-item">
    //                         <div className="cart-item-img">
    //                             <img src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
    //                         </div>
    //                         <p>1 x</p>
    //                         <p className="item-name">Classic Scrambled Eggs</p>
    //                         <p className="item-price">100 INR</p>
    //                         <a><ion-icon name="trash-outline"></ion-icon></a>

    //                     </div>
    //                 })
    //             }
    //         </div>
    //         <div className="cart-B">
    //             <div className="cart-wrapper">
    //                 <div className="pickup-time">
    //                     <p>Pick up Time</p>
    //                     <div className="time">
    //                         <button>
    //                             <ion-icon name="time-outline"></ion-icon>
    //                         </button>
    //                         <p>35 min</p>
    //                     </div>
    //                 </div>
    //                 <div className="checkout">
    //                     <div className="final-price">
    //                         <p className="total-label">Total:</p>
    //                         <p className="total-price">300 INR</p>
    //                     </div>
    //                     <div className="checkout-line"></div>
    //                     <button className="checkout-button">
    //                         Checkout
    //                         <ion-icon name="chevron-forward-outline"></ion-icon>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    //     ) : <h1>Your Cart is Empty.</h1>;

    return <StyledCart>
        {/* {toRender} */}
        <h1>Online orders are coming soon!</h1>
    </StyledCart>

}

const UserCart = connect(mapStateToProps)(Cart);

export default UserCart;