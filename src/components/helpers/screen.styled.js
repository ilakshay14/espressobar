import styled from 'styled-components';
import {FlexColumn} from '../../theme/defaultStyles';

const StyledScreen = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://cdn.lakshay.xyz/espresso-bar/screenA.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    ${FlexColumn}

    .screen__content{
        width: 50%;
        height: 40%;
        /* border: 1px solid white; */
        margin: auto;

        color: #ffffff;
        text-align: center;
        padding: 20px;

        .screen__content__heading{
            font-size: 300%;
            letter-spacing: 5px;
            padding: 20px;
        }

        .screen__content_text{
            font-size: 150%;
            letter-spacing: 3px;
            padding: 20px;
            margin-bottom: 20px;
        }

        button{
            margin-top: 10px;
            /* color: white; */
            font-size: 120%;
            border: 1px solid #ffffff;
            width: 150px;
            height: 50px;
            border-radius: 25px;
        }

    }
`;

export default StyledScreen;