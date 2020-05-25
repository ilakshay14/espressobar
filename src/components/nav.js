import React from 'react';
import StyledNav from '../styles/styledNav';

const Navbar = () => {
    return (<StyledNav>
        <div className="navbrand">
            <a href="#home"><p>ES<br />PR</p></a>
        </div>
        <div className="navmenu">
            <ul>
                <li><a href="#coffeehouse">coffeehouse</a></li>
                <li><a>coffee</a></li>
                <li><a>menu</a></li>
            </ul>
        </div>

    </StyledNav>);
}

export default Navbar;