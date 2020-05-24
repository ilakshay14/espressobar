import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import classes from './Layout.css';

const Layout = () => {

    function timeChange(event) {
        console.log(event.target.value);

    }


    return (
        <>
            <div className="row parentDiv">
                <input type="time" min="00:00" max="23:59" onChange={timeChange} value />
            </div>
            <div className="span-1-of-2 divRight">

            </div>


        </>
    );

}

export default Layout;