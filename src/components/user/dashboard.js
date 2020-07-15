import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../theme/defaultStyles';
import { Route, Switch, Redirect } from 'react-router-dom'
import DashboardNav from './sideNav';
import UserProfile from './userProfile';
import UserBookmarks from './userBookmarks';
import UserCart from './userCart';
import AppNavbar from './app-nav';


const StyledDashboard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F7FB;
    
    /* ${FlexRow} */

    .dashboard-content{
        margin-left: 300px;
        width: 80%;
        height: auto;
        ${FlexRow}
    }

`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <DashboardNav />
            <div className="dashboard-content">
                <AppNavbar/>
                <Redirect from="/user" to="/user/profile" />
                <Switch>

                    <Route path='/user/profile' exact component={UserProfile} />
                    <Route path='/user/bookmarks' exact component={UserBookmarks} />
                    <Route path='/user/cart' exact component={UserCart} />

                </Switch>
            </div>
        </StyledDashboard>
    );
}

export default Dashboard;