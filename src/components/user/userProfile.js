import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../theme/defaultStyles';

const StyledProfile = styled.div`
    
    margin-top: 10%;
    width: 50%;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

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
            width: 95%;
            height: 90%;
            
            ${FlexColumn}
            justify-content: space-evenly;
            
            .user-details{
                
                width: 90%;
                ${FlexRow}
                justify-content: space-between;
                
                p{
                    
                    width: 48%;
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
                            Lorem Ipsum is simply dummy text 
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