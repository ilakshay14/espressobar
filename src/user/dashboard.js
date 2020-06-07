import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledDashboard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #DBE0E6;

    .dash-nav{
        width: 20%;
        height: 100%;
        background-color: #ffffff;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;

        .nav-head{
            width: 100%;
            height: 30%;
            border-bottom: 1px solid #DBE0E6;
            
            ${FlexColumn}

            .user-image{
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background-color: #ccc;
            }

        }

        .nav-body {
            height: calc(100% - 30%);
            width: 100%;

            ${FlexColumn}
            
            ul {
                /* border: 1px solid black; */
                margin-top: -20%;
                list-style: none;
                font-size: 20px;
                width: 100%;

                li{
                    margin-top: 41px;
                    width: 70%;
                    padding: 5%;
                    margin-left: 30%;
                    cursor: pointer;
                    transition: all 0.2s linear;


                    :first-of-type{
                        margin-top: 0;
                    }

                    :last-of-type{
                        position: absolute;
                        bottom: 5%;
                        margin-left: 7%;
                        width: auto;
                        padding: 0;
                    }


                    ion-icon {
                        margin-right: 5px;
                        font-size: 24px;
                    }

                    :hover{
                        transform: translateX(5px);
                    }
                }

                .active-item{
                    ${FlexRow}
                    justify-content: space-between;
                    background-color: #39486C;
                    color: white;
                    border-radius: 35px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                    :hover{
                        transform: none;
                    }
                }
            }
        }
    }
`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <div className="dash-nav">
                <div className="nav-head">
                    <div className="user-image"></div>
                </div>
                <div className="nav-body">
                    <ul>
                        <li className="active-item">
                            <p>
                                <ion-icon name="person-circle-outline"></ion-icon>
                                Profile
                            </p>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </li>
                        <li>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            Bookmarked
                        </li>
                        <li>
                            <ion-icon name="cart-outline"></ion-icon>
                            Cart
                        </li>
                        <li>
                            <ion-icon name="log-out-outline"></ion-icon>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </StyledDashboard>
    );
}

export default Dashboard;