import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledCart = styled.div`
    width: 85%;
    height: 90%;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${FlexRow};
`;

const UserCart = () => {
    return (
        <StyledCart>
            cart
        </StyledCart>
    );
}

export default UserCart;