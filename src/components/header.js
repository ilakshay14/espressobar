import React from 'react';
import styled from 'styled-components';
import coffee from '../assets/coffee.webp';
import { FlexRow } from '../theme/defaultStyles';

import Navbar from './nav';

const StyledMain = styled.main`
    width: 100%;
    height: 90vh;
    background: rgba(155, 54, 5, 0.9);
    margin-top: 5%;
    ${FlexRow}

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
        align-self: center;
        margin-left: 1%;
        color: #ffffff;
    }

    img{
        height: 500px;
        width: 500px;
        border-radius: 50%;
    }
    
`;

const Header = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <StyledMain>
                <div className="header-hero">
                    <img src={coffee} />
                    <div className="header-hero-text">
                        <h1>Espresso bar</h1>
                        <h4>coffee. network. code.</h4>
                    </div>

                </div>
            </StyledMain>
        </React.Fragment>);
}

export default Header;