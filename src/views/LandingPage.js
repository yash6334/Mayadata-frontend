import React, { useState } from 'react';
import NavigationDrawer from '../components/Navigation/NavigationDrawer';
import NavigationDrawerSmall from '../components/Navigation/NavigationDrawerSmall';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import css from "./LandingPage.css";

const LandingPage = () => {
    const [page, setpage] = useState(0);
    const [toggle, settoggle] = useState(0);

    return (
        <div className="landingPage">
            {
                toggle == 0 ?
                    <div className="drawer">
                        <NavigationDrawer page={page} setpage={setpage} toggle={toggle} settoggle={settoggle} />
                    </div> :
                    <div className="smalldrawer">
                        <NavigationDrawerSmall page={page} setpage={setpage} toggle={toggle} settoggle={settoggle} />
                    </div>
            }
            <div className="mainPage">
                {page == 0 ? <HomePage /> : <AboutPage />}
            </div>
        </div>
    );
}

export default LandingPage
