import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../theme/defaultStyles';

const StyledSides = styled.div`
    width: 100%;
    max-width: 1200px;
    ${FlexColumn}
    align-items: center;
    /* border: 1px solid black; */
    
    h2{
        font-weight: bold;
        font-size: 48px;
        line-height: 80px;
        letter-spacing: 0.25em;
    }

    h4{
        font-weight: bold;
        font-size: 120%;
        line-height: 80px;
        letter-spacing: 0.05em;
        text-align: center;
        
    }

    .menu-margin{
        margin-bottom: 50px;
    }

    .sides-options{
        ${FlexRow}
        
        .food-card{
            flex: 0 0 320px;
            height: 500px;
            margin: 3% auto;
            text-align: center;
            ${FlexColumn}
            justify-content: space-evenly;
            

            img{
                width: 250px;
                border-radius: 50%;
                align-self: center;
            }

            p {
                margin-top: -5%;
                margin-bottom: 5%;
                font-size: 120%;
            }

            .foodcard-header{
                ${FlexRow}

                /* border: 1px solid black; */
                align-content: center;
                width: 100%;

                ion-icon{
                    vertical-align: middle;
                    cursor: pointer;
                    margin-left: 5px;
                }
            }

            .hidden{
                /* display: none !important; */
                visibility: hidden;
            }

            .qty{
                /* border: 1px solid black; */
                ${FlexRow}

                width: 50%;
                align-self: center;
                justify-content: space-evenly;

                button{
                    width: 30px;
                    cursor: pointer;
                }

                p{
                    margin: auto;
                }
            }
        }
    }

    .addToCart{
        align-self: center;

        width: 80px;
        height: 40px;

        background: rgba(155, 54, 5, 0.9);
        border: 1px solid rgba(155, 54, 5, 0.9);
        box-sizing: border-box;
        border-radius: 40px;

        color: #ffffff;
        font-size: 25px;
        text-align: center;
        cursor: pointer;
        outline: none;
        transition: box-shadow 0.2s linear;
        
        :hover{
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        }


        ion-icon{
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 480px) {
        h2{
            margin-top: 50px;
            font-size: 36px;
            line-height: 80px;
            letter-spacing: 0.05em;
        }


    }
`;

export default StyledSides;