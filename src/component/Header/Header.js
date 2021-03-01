import React from 'react';
import logo from '../../image/main_logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="logo">
               <img src={logo} alt=""/>
           </div>
           <div className="title">
               <h1>Women's BasketBall </h1>
           </div>

        </div>
    );
};

export default Header;
