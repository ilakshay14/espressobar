import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';


const StyledMenu = styled.div`
    height: 85vh;
    margin-top: 5%;
    ${FlexRow};

    .menubar{
        width: 100%;
        flex: 0 0 15%;
        /* border: 1px solid black; */
        height: 100%;
        padding: 2%;
        ${FlexColumn}
        justify-content: space-evenly;

        .menubar-options {
            letter-spacing: 0.05rem;
            font-size: initial;

            :last-of-type{
                cursor: pointer;
                transition: transform 0.2s;
            }

            :last-of-type:hover{
                transform: translateX(5px);
            }
            
        
            h2{
                
                line-height: 45px;
                color: rgba(0, 0, 0, 0.75);
                font-weight: 900;
            }

            h4, h4 a{
                line-height: 30px;
                color: rgba(0, 0, 0, 0.5);
                font-weight: 700;
                cursor: pointer;
                transition: transform 0.2s;

                :hover{
                    transform: translateX(5px);
                }
            }
        }
    }

    .menudisplay{
        height: 100%;
        padding: 2%;
        flex: 0 0 75%;

        ${FlexColumn}
        /* justify-content: space-evenly; */
        align-items: center;

        h1{
            margin-top: -10%;
            font-weight: bold;
            font-size: 64px;
            line-height: 80px;
            letter-spacing: 0.25em;
        }

        h2{
            margin-top: 5%;
            font-weight: bold;
            font-size: 250%;
            line-height: 60px;
            text-align: center;
            letter-spacing: 0.05em;
        }
    }

`;

export default StyledMenu;