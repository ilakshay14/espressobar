import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../theme/defaultStyles';


const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    background: rgba(155, 54, 5, 0.9);
    margin-top: 5%;
    ${FlexRow}
    
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, #000000 100%), url('https://cdn.lakshay.xyz/espresso-bar/cold/icedespresso.webp');
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    .header-hero{
        width: 100%;
        ${FlexColumn}
    }

    .header-hero h1{
        font-size: 400%;
    }
    .header-hero h4{
        font-size: 150%;
    }

    .header-hero-text{
        align-self: center;
        margin-left: 1%;
        color: #ffffff;
        text-align: center;
    }

    img{
        display:none;    
    }


    @media screen and (min-width: 768px) {
        height: 90vh;
        background-image: none;
        background-size: cover;
        background-position: top;
        background-attachment: fixed;

        .break{
            display: none;
        }

        .header-hero{
            width: 75%;
            ${FlexRow}
        }

        .header-hero h1{
            font-size: 600%;
        }

        .header-hero h4{
            font-size: 200%;
        }

        .header-hero-text{
            text-align: left;
        }

        img{
            display: initial;
            height: 500px;
            width: 500px;
            border-radius: 50%;
        }
    }
    
`;

const icedEspresso = 'https://cdn.lakshay.xyz/espresso-bar/cold/icedespresso.webp';

const Header = () => {
    return (
        <React.Fragment>
            <StyledMain id="home" coffee={icedEspresso}>
                <div className="header-hero">
                    <img src={icedEspresso} />
                    <div className="header-hero-text">
                        <h1>Espresso <br className="break" />bar</h1>
                        <h4>coffee. network. code.</h4>
                    </div>

                </div>
            </StyledMain>
        </React.Fragment>);
}

export default Header;