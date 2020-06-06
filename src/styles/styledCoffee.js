import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledCoffee = styled.div`
    /* margin-top: 5%; */
    width: 100%;
    margin: 0 auto;
    background: rgba(155, 54, 5, 0.9);
    ${FlexColumn}

    .coffee-heading{
        align-self: center;
        font-size: 48px;
        line-height: 60px;
        letter-spacing: 0.25em;
        color: white;
        margin: 3% auto;
    }

    .coffee-content{
        width: 100%;
        margin-bottom: 5%;
    }

    .coffee{
        ${FlexColumn}

        justify-content: space-evenly;
        margin: 10% auto;
        width: 90%;
        /* border: 1px solid black; */
        
    }

    .coffee:last-of-type{
        flex-direction: column-reverse;
    }

    .coffee-image{
        width: 300px;
        height: 300px;
        align-self: center;
        margin-bottom: 20px;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin: auto;
        
    }

    .coffee-hero-text h1{
        font-size: 200%;
        letter-spacing: 0.15em;

    }
    .coffee-hero-text p{
        font-size: 120%;
        letter-spacing: 0.05em;

    }

    .coffee-hero-text{
        align-self: center;
        color: #ffffff;
        width: 80%;
        text-align: center;

        h1 {
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 768px) {
        .coffee{
            ${FlexRow}
            justify-content: space-evenly;
            margin: 0 auto;
            width: 75%;
            
        }

        .coffee:last-of-type{
            flex-direction: initial;
        }

        .coffee-hero-text{
            width: 50%;
            text-align: left;
            
            h1 {
                margin-bottom: 10px;
            }
        }

        .coffee-hero-text:first-of-type{
            text-align: right;
        }
    }
`;

export default StyledCoffee;