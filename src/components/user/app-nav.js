import React from 'react';
import StyledAppNav from './styles/styledAppNav';
import { Link } from 'react-router-dom'

const AppNavbar = () => {
    return (
        <StyledAppNav>
            <div className="navbrand">
                <a href="/"><p>ES<br />PR</p></a>
            </div>
            <div className="navmenu">
                <ul>
                    <li><Link to="/">coffeehouse</Link></li>
                    {/* <li><a href="#coffee">coffee</a></li> */}
                    <li><Link to="/menu">menu</Link></li>
                </ul>
            </div>

        </StyledAppNav>
    );
}

export default AppNavbar;