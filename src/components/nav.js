import React from 'react';
import StyledNav from '../theme/styledNav';

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