import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../theme/defaultStyles';

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

export default StyledCart;