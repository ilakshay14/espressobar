import React, { useEffect, useState } from 'react';
import StyledSideNav from './styles/styledSideNave';
import { NavLink, Redirect } from 'react-router-dom'
import Gravatar from 'react-gravatar';

const DashboardNav = () => {

    const [chevPos, setChevPos] = useState(1);
    const [redirect, setRedirect] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setEmail(user.email);
    },[]);

    const logout=()=>{
        localStorage.removeItem("user");
        setRedirect('/');
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }
    
    return (
        <StyledSideNav>
            <div className="nav-head">
                <div className="user-image">
                    <Gravatar email={email}
                    size={200}
                    default="monsterid"
                    className="image"/>
                </div>
            </div>
            <div className="nav-body">
                <ul>
                    <li>
                        <NavLink activeClassName="active-item" to="/user/profile" onClick={(e) => setChevPos(1)}>
                            <p>
                                <ion-icon name="person-circle-outline"></ion-icon>
                                Profile
                            </p>
                            {
                                chevPos === 1 ? (<ion-icon name="chevron-forward-outline"></ion-icon>) : null
                            }

                        </NavLink>

                    </li>
                    <li>
                        <NavLink activeClassName="active-item" to="/user/bookmarks" onClick={(e) => setChevPos(2)}>
                            <p>
                                <ion-icon name="bookmark-outline"></ion-icon>
                                Bookmarked
                            </p>
                            {
                                chevPos === 2 ? (<ion-icon name="chevron-forward-outline"></ion-icon>) : null
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-item" to="/user/cart" onClick={(e) => setChevPos(3)}>
                            <p>
                                <ion-icon name="cart-outline"></ion-icon>
                                Cart
                            </p>
                            {
                                chevPos === 3 ? (<ion-icon name="chevron-forward-outline"></ion-icon>) : null
                            }
                        </NavLink>
                    </li>
                    <li>
                        {/* <Link to="/home"></Link> */}
                        <p onClick={logout}>
                            <ion-icon name="log-out-outline"></ion-icon>
                            Logout
                        </p>
                    </li>
                </ul>
            </div>
        </StyledSideNav>
    );
}

export default DashboardNav;