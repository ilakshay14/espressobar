import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';


const StyledMenu = styled.div`
    margin-top: 85px;
    ${FlexColumn};

    .menu-content{
        ${FlexRow};
        height: auto;

    .menu-button{
        display: none;
    }
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
            }

        h2{
            
            line-height: 45px;
            color: rgba(0, 0, 0, 0.75);
            font-weight: 900;
            cursor: pointer;
            transition: transform 0.2s;

            :hover{
                transform: translateX(5px);  
            }
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

    .menudisplay{
        height: auto;
        padding: 2%;
        flex: 0 0 75%;
        text-align: center;

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


    @media screen and (max-width: 480px) {

        ${FlexColumn}


        .menu-button{
            z-index: 4;
            display: block;
            position: fixed;
            top: 100px;
            left: 20px;
            width: 60px;
            height: 60px;
            border: none;
            border-radius: 50%;
            background-color: #39486C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            outline: none;

            font-size: 30px;
            color: white;
            text-align: center;

            ion-icon{
                vertical-align: middle;
            }
            
        }
        
        .menubar{
            /* display: none; */
            display: ${props => props.showMenu ? 'initial' : 'none'};
            position: fixed;
            top: 85px;
            left: 0;
            width: 100%;
            height: 100%;
            
            z-index: 3;
            background-color: #FFFAFA;
            text-align: center;

            .menubar-options{   
                margin:0 auto;  
                height: 200px;              
            }
            
            h2{
                font-size: 200%;
                margin-top: 0px;
            }

            h4{
                font-size: 150%;
                margin-top: 10px;
            }


            
        }

        .menudisplay{
            z-index: 1;
            flex: 0 0 100%;
            height: auto;
            min-height: 100vh;
        }


    }
}
`;

export default StyledMenu;