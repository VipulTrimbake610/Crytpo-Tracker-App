


import React from "react";
import './style.css';
import TemporaryDrawer from './drawer.js'
// import Button from "../Button";
import MyButton from "../Button";

import { NavLink } from "react-router-dom";
import MaterialUISwitch from "./mySwitchCompo";

const Header = () => {

    // Handled Theme Switch 
    function handleTheme(){
        var root = document.documentElement;
        if(root.style.cssText.includes('--white: #111;')){
            root.style.cssText = '--white: #fff; --black: #111; --darkgrey:#1b1b1b;';
        }else if(root.style.cssText.includes('--white: #fff;')){
            root.style.cssText = '--white: #111; --black: #fff; --darkgrey:#f3f3f3;'
        }else{
            root.style.cssText = '--white: #111; --black: #fff; --darkgrey:#f3f3f3;'
        }
    }

    return (
        <div className="navbar">
            <NavLink to="/">
            <h1 className="logo">CryptoTracker <span style={{ color: "var(--blue)" }}>.</span></h1>
            </NavLink>
            <div className="links">
                
                <MaterialUISwitch onClick={handleTheme}/>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/compare">
                    Compare
                </NavLink>
                <NavLink to="/watchlist">
                    WatchList
                </NavLink>
                <NavLink to="/dashboard">
                    <MyButton text="Dashboard" outlined={false}  />
                </NavLink>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    );
}

export default Header;