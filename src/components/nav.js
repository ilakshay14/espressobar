import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../theme/defaultStyles';

const StyledNav = styled.nav`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;

    ${FlexRow}
    justify-content:space-between;
    
    box-shadow: 0px 4px 5px rgba(255, 255, 255, 0.25);

    .navbrand{
        margin-left: 2%;
        ${FlexRow}
        
    }

    .navbrand p {
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.5em;
    }

    .navmenu {
        width: 500px;
        ${FlexRow}
        margin-right: 2%;
    }

    .navmenu ul {
        width: 100%;
        ${FlexRow};
        justify-content: space-between;
        list-style: none;
    }

    .navmenu li {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.02em;
        padding: 3px;
        cursor: pointer;
        

        a {
            padding: 15px;
            transition: box-shadow 0.2s, padding-bottom 0.2s;
            /* border-radius: 15px; */
            /* border: 1px solid black; */
        }

        a:hover{
            /* box-shadow: 0px 2px 5px -5px rgba(0,0,0,.2); */
            /* padding-bottom: 15px; */
            box-shadow: 0 8px 6px -6px black;
        }
    }




`;

const Navbar = () => {
    return (<StyledNav>
        <div className="navbrand">
            <p>ES<br />PR</p>
        </div>
        <div className="navmenu">
            <ul>
                <li><a>coffeehouse</a></li>
                <li><a>coffee</a></li>
                <li><a>menu</a></li>
            </ul>
        </div>

    </StyledNav>);
}

export default Navbar;