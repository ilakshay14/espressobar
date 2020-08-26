import styled from "styled-components";
import { FlexRow, FlexColumn } from '../../../theme/defaultStyles';

const StyledSignUp = styled.div`
    width: 100%;
    height: calc(100vh - 81px);
    margin-top: 80px;

    ${FlexRow}
    justify-content: space-evenly;
    background-color: #ffffff;

    .login-context{
        ${FlexColumn}
        z-index: 999;

        height: 100%;
        width: 40%;
        color: #ffffff;
        background-color: #1F3933;
        text-align: center;

        p{
            font-size: 150%;
            max-width: 500px;

            :first-of-type{
                font-size: 250%;
                margin-bottom: 20px;
                font-weight: bold;
            }
        }

        
    }

    .login-form{
        ${FlexColumn}
        width: 60%;

        form {
            width: 440px;
            height: 550px;
            margin: auto;

            background-color: #1F3933;
            border-radius: 15px;


            ${FlexColumn}


            .formError {
                color: red;
                margin: 3% auto;
                font-size: 18px;
            }

            .login-link{
                color: #ffffff;
                margin: auto;
                
                a{
                    color: white;
                    :hover{
                        text-decoration: underline;
                    }
                }
            }

            .new-user{
                color: white;
                margin: 0% auto;

                a{
                    color: white;
                    margin-left: 5px;
                }

            }

            input {
                margin: 3% auto;
                width: 300px;
                height: 60px;
                background: #FFFFFF;
                border: 1px solid #C4C4C4;
                box-sizing: border-box;
                border-radius: 30px;

                padding: 5%;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                font-size: 100%;

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
                background: #9B3605; 
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
    }
`;


export default StyledSignUp;