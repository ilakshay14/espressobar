import React from 'react';
import StyledNav from './styles/styledNav';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <StyledNav>
            <div className="navbrand">
                <a href="#home"><p>ES<br />PR</p></a>
            </div>
            <div className="navmenu">
                <ul>
                    <li><Link to="/">coffeehouse</Link></li>
                    {/* <li><a href="#coffee">coffee</a></li> */}
                    <li><Link to="/menu">menu</Link></li>
                </ul>
            </div>

        </StyledNav>
    );
}

export default Navbar;