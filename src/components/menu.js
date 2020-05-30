import React from 'react';
import StyledMenu from '../styles/syledMenu';
import { Route, Link, Switch } from 'react-router-dom'
import Sides from './sides';
import Anchor from '../common/anchor';
import Footer from '../components/footer';
import Cold from './basicCold';
import Mix from './mixItUp';
import Hot from './basicHot';

const Menu = () => {
    return (
        <StyledMenu id="menu">
            <div className="menu-content">
                <div className="menubar">

                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/cold">The Basic - Cold</Link>
                        </h2>
                        <h4><Anchor>Iced Espresso</Anchor></h4>
                        <h4><Anchor>Cold Brew</Anchor></h4>
                        <h4><Anchor>Iced Americano</Anchor></h4>
                    </div>

                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/hot">The Basic - Hot</Link>
                        </h2>
                        <h4><Anchor>Espresso - Single</Anchor></h4>
                        <h4><Anchor>Espresso - Double</Anchor></h4>
                        <h4><Anchor>Americano</Anchor></h4>
                    </div>

                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/mix">Mix it Up</Link>
                        </h2>
                        <h4><Anchor>Coke</Anchor></h4>
                        <h4><Anchor>Irish Whiskey</Anchor></h4>
                        <h4><Anchor>Bourbon</Anchor></h4>
                    </div>
                    <div className="menubar-options">
                        <h2>
                            <Link to="/menu/sides">Sides</Link>
                        </h2>
                    </div>
                </div>
                <div className="menudisplay">

                    <Switch>
                        <Route path='/menu/mix' exact component={Mix} />
                        <Route path='/menu/hot' exact component={Hot} />
                        <Route path='/menu/cold' exact component={Cold} />
                        <Route path='/menu/sides' exact component={Sides} />
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