import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledProfile = styled.div`
margin-top: 2%;
    width: 85%;
    height: 80vh;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${FlexRow};

    .profile-header{
        border-bottom: 1px solid #DBE0E6;
        width: 100%;
        max-height: 20%;
        padding: 20px;
        font-size: 24px;
        letter-spacing: 0.05em;
        
        ${FlexRow};

        .profile-header-wrapper{
            width: 85%;
            ${FlexRow};
            justify-content: space-between;
            
            p{
                font-size: 120%;
            }
        }

        ion-icon{
            color: #DBE0E6;
            cursor: pointer;
        }
        
    }

    .profile-body{
        width: 100%;
        height: 80%;
        ${FlexRow};

        .profile-body-wrapper{
            width: 85%;
            height: 70%;
            /* border: 1px solid black; */
            ${FlexColumn}
            justify-content: space-evenly;
            
            .user-details{
                width: 70%;
                /* padding: 10px; */
                /* border: 1px solid black; */
                ${FlexRow}
                justify-content: space-evenly;
                /* text-align: left;
                word-wrap: break-word; */
                p{
                    width: 49%;
                    text-align: left;
                    word-wrap: break-word;
                    letter-spacing: 0.05em;
                    font-size: 18px;

                    padding: 3px;
                }
            }
        }

    }
`;

const UserProfile = () => {
    return (
        <StyledProfile>
            <div className="profile-header">
                <div className="profile-header-wrapper">
                    <p>Lakshay Malhotra</p>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
            <div className="profile-body">
                <div className="profile-body-wrapper">
                    <div className="user-details">
                        <p>phone</p>
                        <p>+001111111111</p>
                    </div>
                    <div className="user-details">
                        <p>house, society</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="user-details">
                        <p>area, street, sector</p>
                        <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <div className="user-details">
                        <p>city</p>
                        <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <div className="user-details">
                        <p>state</p>
                        <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <div className="user-details">
                        <p>pincode</p>
                        <p>111111</p>
                    </div>
                </div>
            </div>
        </StyledProfile>
    );
}

export default UserProfile;