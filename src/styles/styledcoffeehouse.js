import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../theme/defaultStyles';

const StyledCoffeehouse = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FAF7F7;
    
    .ch-image{
        width: 100%;
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
        width: 90%;
        height: 700px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0 auto;
        margin-top: -20%;
        margin-bottom: 5%;

        h1 {
            font-weight: bold;
            font-size: 250%;
            line-height: 45px;
            letter-spacing: 0;
            text-align: center;
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
            width: 90%;
            text-align: center;
            font-size: 18px;
            line-height: 30px;
            letter-spacing: 0;
        }
        
    }

    @media screen and (min-width: 768px) {
        height: auto;

        .ch-image{
            width: 90%;
        }

        .ch-content{
            width: 70%;

            h1 {
                font-size: 300%;
                letter-spacing: 0.25em;
            }

            .ch-text{
                width: 500px;
                font-size: 24px;
                letter-spacing: 0.05em;
            }
        }

        
    }
`;

export default StyledCoffeehouse;