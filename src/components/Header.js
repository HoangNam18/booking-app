import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header-container">            
            <div className="header__title">
                <h1>Booking app</h1>              
                <NavLink className="header__subtitle" to="/" activeClassName="is-active" >Home</NavLink>
                <NavLink className="header__subtitle" to="/about" activeClassName="is-active" >About</NavLink>
                <NavLink className="header__subtitle" to="/room-list" activeClassName="is-active" >Room List</NavLink>                         
            </div>           
        </div>
    </header>
);

export default Header;