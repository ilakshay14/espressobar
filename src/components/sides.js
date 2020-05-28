import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';
import Cake from '../assets/sides/cake.jpg';
import Eggs from '../assets/sides/eggs.jpg';
import Fries from '../assets/sides/fries.jpg';
import Marble from '../assets/sides/marble.jpg';
import Sandwich from '../assets/sides/sandwich.jpg';
import Wings from '../assets/sides/wings.jpg';


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

const Sides = () => {
    return (
        <StyledSides>
            <div>
                <h2>Sides</h2>
            </div>
            <div className="sides-options">
                <div className='food-card'>
                    <img src={Cake} />
                    <h4>blueberry cheese cake</h4>
                </div>
                <div className='food-card'>
                    <img src={Marble} />
                    <h4>vanilla marble cake</h4>
                </div>
                <div className='food-card'>
                    <img src={Fries} />
                    <h4>salted fries</h4>
                </div>
                <div className='food-card'>
                    <img src={Sandwich} />
                    <h4>egg, chicken and cheese sandwich</h4>
                </div>
                <div className='food-card'>
                    <img src={Eggs} />
                    <h4>classic scrambled eggs</h4>
                </div>
                <div className='food-card'>
                    <img src={Wings} />
                    <h4>chicken wings</h4>
                </div>
            </div>


        </StyledSides>
    );
}

export default Sides;