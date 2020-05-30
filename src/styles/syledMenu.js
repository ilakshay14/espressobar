import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';


const StyledMenu = styled.div`
    margin-top: 85px;
    ${FlexColumn};

    .menu-content{
        ${FlexRow};
        height: auto;
   

    .menubar{
        width: 100%;
        height: 90vh;
        flex: 0 0 15%;
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
                font-weight: 500;
                cursor: pointer;
                transition: transform 0.2s;

                :hover{
                    transform: translateX(5px);
                    
                }
            }
        }
    }

    .menudisplay{
        height: auto;
        padding: 2%;
        flex: 0 0 75%;

        ${FlexRow}
        
        .menu-home{
            ${FlexColumn}
            align-items:center;
            justify-content: space-evenly;

            h1{
                margin-top: -50%;
                font-weight: bold;
                font-size: 64px;
                line-height: 80px;
                letter-spacing: 0.25em;
            }

            h2{
                margin-top: 5%;
                font-weight: bold;
                font-size: 200%;
                line-height: 60px;
                text-align: center;
                letter-spacing: 0.05em;
            }
        }
    }
}

`;

export default StyledMenu;