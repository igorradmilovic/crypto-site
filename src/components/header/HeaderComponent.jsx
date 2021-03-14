import React from 'react';

import "./header.styles.scss";

import HomeSVG from "../../assets/img/icons/home.svg";
import MarketSVG from "../../assets/img/icons/market.svg";
import ProfileSVG from "../../assets/img/icons/profile.svg";
import SettingsSVG from "../../assets/img/icons/settings.svg";
import FungiPNG from "../../assets/img/fungi.png";
import { Link } from 'react-router-dom';


const headerItems = [
    {
        name: "Home",
        url: "/home",
        image: HomeSVG,
    },
    {
        name: "Market",
        url: "/market",
        image: MarketSVG,
    },
    {
        name: "Profile",
        url: "/profile",
        image: ProfileSVG,
    },
    {
        name: "Settings",
        url: "/settings",
        image: SettingsSVG,
    },
]

const Header = () => {
    return (
        <div className="header-section">
            <div className="header-top-section">
                <div className="header-logo-section">
                    <img className="header-logo" src={FungiPNG} />
                    <div className="header-brand">Funger</div>
                </div>
                {
                    headerItems.map((nav, indx) => {
                        return (
                            <Link key={indx} to={nav.url}>
                                <div className="header-item">
                                    <div className="button header-sub-items">
                                        <img
                                            className="header-img"
                                            src={nav.image}
                                            alt={"header-" + nav.name}
                                            width="40px"
                                            height="40px"
                                        />
                                        <span className="header-title">{nav.name}</span>
                                    </div>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
            <div className="header-bottom-section">
                <div className="header-item header-footer">
                    Learn More
                </div>
                <div className="header-item header-footer">
                    About
                </div>
            </div>
        </div>
    );
};

export default Header;