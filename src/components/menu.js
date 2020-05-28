import React from 'react';
import StyledMenu from '../styles/syledMenu';
import { Route, Link, Switch } from 'react-router-dom'
import Sides from './sides';

const Menu = () => {
    return (
        <StyledMenu id="menu">
            <div className="menubar">

                <div className="menubar-options">
                    <h2>The Basic - Cold</h2>
                    <h4><a>Iced Espresso</a></h4>
                    <h4><a>Cold Brew</a></h4>
                    <h4><a>Iced Americano</a></h4>
                </div>

                <div className="menubar-options">
                    <h2>The Basic - Hot</h2>
                    <h4><a>Espresso - Single</a></h4>
                    <h4><a>Espresso - Double</a></h4>
                    <h4><a>Americano</a></h4>
                </div>

                <div className="menubar-options">
                    <h2>Mix it Up</h2>
                    <h4><a>Coke</a></h4>
                    <h4><a>Irish Whiskey</a></h4>
                    <h4><a>Bourbon</a></h4>
                </div>
                <div className="menubar-options">
                    <h2>
                        <Link to="/menu/sides">Sides</Link>
                    </h2>
                </div>
            </div>
            <div className="menudisplay">

                <Switch>
                    <Route path='/menu/sides' exact component={Sides} />
                    <Route path='/menu' exact render={() => (
                        <div className="menu-home">
                            <h1>MENU</h1>
                            <h2>Have a look at our delicious menu,<br />before you hop over!</h2>
                        </div>
                    )} />

                </Switch>
            </div>
        </StyledMenu>
    );
}

export default Menu;