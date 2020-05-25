import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledFooter = styled.footer`
    width: 100%;
    height: 10vh;
    background: rgba(45, 41, 38, 0.7);
    ${FlexColumn}
    text-align: center;

    p{
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.05em;

        color: #FFFFFF;

        ion-icon{
            vertical-align: middle;
            color: red;
            font-size: 150%;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>designed and developed with <ion-icon name="heart"></ion-icon></p>
            <p>Disclaimer - this is just a demo site built for demonstration of skills. The coffeehouse image was clicked in Starbucks in DLF Promenade, New Delhi by me. Coffee images belong to Starbucks
and were taken from Google. I am an espresso enthusiast and this website is just to demonstrate my skills and my interests. </p>
        </StyledFooter>
    );
}

export default Footer;