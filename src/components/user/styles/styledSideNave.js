import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../theme/defaultStyles';

const StyledSideNav = styled.div`
    /* margin-top: 3%; */
    position: fixed;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: #1F3933;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    .nav-head{
        width: 100%;
        height: 250px;
        border-bottom: 1px solid #DBE0E6;

        ${FlexColumn}

        .user-image{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: #ccc;

            img{
                width: 100%;
                border-radius: 50%;
            }
        }

    }

    .nav-body {
        height: calc(100% - 300px);
        width: 100%;

        ${FlexColumn}
        
        ul {
            
            margin-top: -40%;
            list-style: none;
            font-size: 20px;
            width: 100%;
            
            li{
                margin-top: 15px;
                width: 90%;
                padding: 5%;
                margin-left: 15%;
                cursor: pointer;
                transition: all 0.2s linear;
                ${FlexRow}
                justify-content: space-between;

                :first-of-type{
                    margin-top: 0;
                }

                :last-of-type{
                    position: absolute;
                    bottom: 10%;
                    margin-left: 15%;
                    color: #ffffff;
                    /* width: auto; */
                    
                }

                a{
                    color: #ffffff;
                    transition: all 0.2s linear;
                }

                ion-icon {
                    margin-right: 5px;
                    font-size: 24px;
                }

                :hover{
                    /* transform: translateX(5px); */
                }
            }

            .active-item{
                ${FlexRow}
                justify-content: space-between;
                width: 110%;
                margin-left: -40px;
                padding: 7%;
                background-color: #39486C;
                border-radius: 35px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                :hover{
                    transform: none;
                }
            }
        }
    }

`;

export default StyledSideNav;