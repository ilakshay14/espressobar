import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../theme/defaultStyles';
import FoodCard from '../../UI/FoodCard/FoodCardContainer';
import { connect } from 'react-redux';
const StyledBookmarks = styled.div`
    margin-top: 10%;
    width: 80%;
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
        
        border-radius: 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        transition: all 0.25s linear;

        :hover{
            box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.25);
        }

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

const mapStateToProps = state => {
    return { userBookmarks: state.user.bookmarks }
};

const Bookmarks = ({userBookmarks}) => {

    const toRender = userBookmarks?.length > 0 ? (
        <>
        {
                userBookmarks.map(item => {
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
        </>
    ):<h1>You haven't bookmarked anythng yet.</h1>;

    return (
        <StyledBookmarks>
            {toRender}
        </StyledBookmarks>
    );
}

const UserBookmarks = connect(mapStateToProps)(Bookmarks);

export default UserBookmarks;