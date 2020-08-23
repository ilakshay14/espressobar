import React, { useState, useEffect, Suspense } from 'react';
import StyledMenu from './styles/styledMenu';
import { Route, Link, Switch } from 'react-router-dom'

import Anchor from '../../common/anchor';
import Footer from '../footer/footer';

const Cold = React.lazy(() => import('./basicCold'));
const Hot = React.lazy(() => import('./basicHot'));
const Mix = React.lazy(() => import('./mixItUp'));
// import Mix from './mixItUp';
// import Sides from './sides';
const Sides = React.lazy(() => import('./sides'));
import Navbar from '../nav/nav';

const Menu = () => {

    const [showMenu, setDisplayState] = useState(false);

    const displayMenu = () => {
        setDisplayState(!showMenu);
    }

    const hideMenu = () => {
        setDisplayState(false);
    }

    return (
        <StyledMenu id="menu" showMenu={showMenu}>
            <Navbar/>
            <div className="menu-content">
                <button className="menu-button" onClick={displayMenu}>
                    <ion-icon name="cafe-outline"></ion-icon>
                </button>
                <div className="menubar">


                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/cold" onClick={hideMenu} >The Basic - Cold</Link>
                        </h2>
                        <h4><Anchor>Iced Espresso</Anchor></h4>
                        <h4><Anchor>Cold Brew</Anchor></h4>
                        <h4><Anchor>Iced Americano</Anchor></h4>
                    </div>

                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/hot" onClick={hideMenu} >The Basic - Hot</Link>
                        </h2>
                        <h4><Anchor>Espresso - Single</Anchor></h4>
                        <h4><Anchor>Espresso - Double</Anchor></h4>
                        <h4><Anchor>Americano</Anchor></h4>
                    </div>

                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/mix" onClick={hideMenu} >Mix it Up</Link>
                        </h2>
                        <h4><Anchor>Coke</Anchor></h4>
                        <h4><Anchor>Irish Whiskey</Anchor></h4>
                        <h4><Anchor>Bourbon</Anchor></h4>
                    </div>
                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/sides" onClick={hideMenu} >Sides</Link>
                        </h2>
                    </div>
                </div>
                <div className="menudisplay">

                    <Switch>
                        {/* <Route path='/menu/mix' exact component={Mix} /> */}
                        <Route path='/menu/mix' render={() => (
                            <Suspense fallback={<h1>loading...</h1>}>
                                <Mix/>
                            </Suspense>
                        )} />
                        <Route path='/menu/hot' render={() => (
                            <Suspense fallback={<h1>loading...</h1>}>
                                <Hot/>
                            </Suspense>
                        )} />
                        <Route path='/menu/cold' render={() => (
                            <Suspense fallback={<h1>loading...</h1>}>
                                <Cold/>
                            </Suspense>
                        )} />
                        <Route path='/menu/sides' render={() => (
                            <Suspense fallback={<h1>loading...</h1>}>
                                <Sides/>
                            </Suspense>
                        )} />
                        {/* <Route path='/menu/sides' exact component={Sides} /> */}
                        <Route path='/menu' exact render={() => (
                            <div className="menu-home">
                                <h1>MENU</h1>
                                <h2>Have a look at our delicious menu,<br />before you hop over!</h2>
                            </div>
                        )} />

                    </Switch>
                </div>
            </div>
            <Footer />
        </StyledMenu>
    );
}

export default Menu;