import React, { useEffect, useMemo, useState } from 'react';
import StyledNav from './styles/styledNav';
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const [redirect, setRedirect] = useState(null);
    const [username, setUserName] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const existingUser = JSON.parse(localStorage.getItem('user'));
        if(existingUser){
            setUserName(existingUser.firstname);
        }
    },[]);

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <StyledNav>
            <div className="navbrand">
                <a href="#home"><p>ES<br />PR</p></a>
            </div>
            <div className="navmenu">
                <ul>
                    <li><Link to="/">coffeehouse</Link></li>
                    
                    <li><Link to="/menu">menu</Link></li>
                    <li>
                        <Link to="/login">
                            <ion-icon name="person-circle"></ion-icon>
                            { username }
                        </Link>
                    </li>
                </ul>
            </div>

        </StyledNav>
    );
}

export default Navbar;