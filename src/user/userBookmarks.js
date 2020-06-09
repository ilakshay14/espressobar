import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';
import Eggs from '../assets/sides/eggs.jpg';
import FoodCard from '../UI/foodCard';

const StyledBookmarks = styled.div`
margin-top: 5%;
    width: 85%;
    height: 100%;

    ${FlexRow};

    .food-card{
        flex: 0 0 270px;
        height: 400px;
        margin: 2% auto;
        text-align: center;
        ${FlexColumn}
        justify-content: space-evenly;
        background: #fff;
        border-radius: 25px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        img{
            width: 200px;
            border-radius: 50%;
            align-self: center;
            object-fit: center;
        }

        p {
            margin-top: -5%;
            margin-bottom: 5%;
            font-size: 120%;
        }

        .foodcard-header{
            ${FlexRow}

            
            align-content: center;
            width: 100%;

            ion-icon{
                vertical-align: middle;
                cursor: pointer;
                margin-left: 5px;
            }
        }

        .addToCart{
            align-self: center;

            width: 80px;
            height: 40px;

            background: rgba(155, 54, 5, 0.9);
            border: 1px solid rgba(155, 54, 5, 0.9);
            box-sizing: border-box;
            border-radius: 40px;

            color: #ffffff;
            font-size: 25px;
            text-align: center;
            cursor: pointer;
            outline: none;
            transition: box-shadow 0.2s linear;
            
            :hover{
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            }
        }
    }
    
`;

const initialState = [
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
    {
        "name": "scrambled eggs",
        "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        "price": "100 INR"
    },
]

const UserBookmarks = () => {
    return (
        <StyledBookmarks>
            {
                initialState.map(item => {
                    return <FoodCard
                        classname='food-card'
                        src={item.image}
                        caption={item.name}
                        price={item.price}
                        buttonStyle='addToCart'
                        bookmark='bookmark'
                    />

                })
            }
            {/* <FoodCard
                classname='food-card'
                src={Eggs}
                caption='Salted Fries'
                price='60 INR'
                buttonStyle='addToCart'
            /> */}
        </StyledBookmarks>
    );
}

export default UserBookmarks;