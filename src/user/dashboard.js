import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import DashboardNav from './sideNav';
import UserProfile from './userProfile';
import UserBookmarks from './userBookmarks';
import UserCart from './userCart';

const StyledDashboard = styled.div`
    margin-top: 85px;
    width: 100%;
    height: auto;
    min-height: 90vh;
    background-color: #DBE0E6;

    ${FlexRow}

    .dashboard-content{
        margin-left: 20%;
        width: 80%;
        height: 100%;
        ${FlexRow}
    }

`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <DashboardNav />
            <div className="dashboard-content">
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