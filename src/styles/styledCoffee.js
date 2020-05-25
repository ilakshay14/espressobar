import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledCoffee = styled.div`
    width: 100%;
    /* height: 100vh; */
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
        ${FlexRow}
        justify-content: space-evenly;
        margin: 0 auto;
        width: 75%;

    }

    .coffee-image{
        width: 300px;
        height: 300px;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
        /* margin-left: 1%; */
        color: #ffffff;
        width: 50%;

        :first-of-type{
            text-align: right;
        }
    }
`;

export default StyledCoffee;