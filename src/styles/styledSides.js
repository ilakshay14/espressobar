import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledSides = styled.div`
    width: 100%;
    height: 100%;
    ${FlexColumn}
    align-items: center;
    height: 100%;
    /* border: 1px solid black; */
    overflow-y: scroll;

    h2{
        margin-top: 5%;
        font-weight: bold;
        font-size: 48px;
        line-height: 80px;
        letter-spacing: 0.25em;
    }

    h4{
        font-weight: bold;
        font-size: 120%;
        line-height: 80px;
        letter-spacing: 0.05em;
        text-align: center;
    }

    .sides-options{
        ${FlexRow}
        justify-content: center;
        
        .food-card{
            flex: 0 0 33%;
            margin: 3% auto;
            text-align: center;
            

            img{
                width: 200px;
                border-radius: 50%;
                
            }
        }
    }
`;

export default StyledSides;