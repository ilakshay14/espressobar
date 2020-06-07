import styled from "styled-components";
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    ${FlexColumn}

    background-color: #DBE0E6;

    form {
        width: 460px;
        height: 550px;
        border: 1px solid #000000;
        margin: auto;

        background-color: #39486C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        border: none;

        ${FlexColumn}

        p {
            margin: 3% auto;
            color: red;
            font-size: 18px;
        }

        .new-user{
            color: white;
            margin: 0% auto;
        }

        input {
            margin: 3% auto;
            width: 300px;
            height: 60px;
            background: #FFFFFF;
            border: 1px solid #C4C4C4;
            box-sizing: border-box;
            border-radius: 20px;

            padding: 5%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            transition: all 0.3s linear;

            ::placeholder{
                line-height: 30px;
                letter-spacing: 0.1em;

                color: #C4C4C4;
            }

            :focus{
                border-radius: 0;
            }
        }

        button {
            margin: 10% auto;
            width: 300px;
            height: 60px;
            background-image: linear-gradient(to right top, #9b3605, #9f2d1f, #9f2732, #9b2543, #932952, #943263, #923d73, #8f4782, #94589b, #976ab3, #977ccc, #938fe3);
            border: none;
            border-radius: 50px;

            color: white;
            font-size: 120%;
            line-height: 30px;
            letter-spacing: 0.1em;

            transition: all 0.1s linear;
            outline: none;

            :hover{
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    }
`;


export default StyledLogin;