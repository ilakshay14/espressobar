import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../../theme/defaultStyles';

const StyledCoffeeLoader = styled.div`
    width:100%;
    height:100%;
    box-sizing:border-box;
    .wrapper{
        ${FlexColumn}
        justify-content: center;
        align-content: center;

        vertical-align:middle;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        text-align:center;

        .spanned{

            .coffee_cup {
                width:100px;
                height:104px;
                border:5px rgba(0,0,0,1) solid;
                border-radius: 0px 0px 40px 40px;
                /* background-color: black; */
                background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1));
                
                /* animation: fill 2.5s ease-in-out infinite alternate; */
                transition: all 2.5s ease-in-out infinite alternate;
                position:relative;
                margin:36px auto;

                @keyframes fill{
                        0% { background-position: 0% 0%; }
                        100% { background-position: 0% 100%; }            
                    }

                ::after,
                ::before{
                    position:absolute;
                    content:"";
                }
                ::after{
                    width:20px;
                    height:50px;
                    border:7px #000 solid;
                    border-left:none;
                    border-radius:0px 30px 30px 0px;
                    left:105px;
                }

                ::before{
                    width:2px;
                    height:20px;
                    background-color:rgba(0,0,0,0.5);
                    top: -30px;
                    left:20px;
                    box-shadow: 10px 0px 0px 0px rgba(0,0,0,0.5), 5px -25px 0px 0px rgba(0,0,0,0.5), 15px 0px 0px 0px rgba(0,0,0,0.5);
                    animation:steam 2.5s ease-in-out infinite alternate;

                    @keyframes steam{
                        0% { height: 20px }
                        100% { height: 0px; }            
                    }
                }
            }
        }
    }
`;

const Loader = () => {
    return (
        <StyledCoffeeLoader>
            <div className="wrapper">
                <div className="spanned">
                    <div className="coffee_cup"></div>
                </div>
            </div>
        </StyledCoffeeLoader>
    );
}

export default Loader;