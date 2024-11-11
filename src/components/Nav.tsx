import { Outlet, Link } from "react-router-dom";
import * as React from 'react';

const Nav = () => {

    return (

      <nav className="navbar">
        <div className="navbar-container container">
              <input type="checkbox" name="" id=""/>
              <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
              </div>
              <ul className="menu-items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">Restaurant impression</Link>
                </li>
                <li>
                  <Link to="/about">Our Menu</Link>
                </li>
                <li>
                  <Link to="/reservetable">Reserve a table</Link>
                </li>
              </ul>
            </div>
        </nav>
      );
};

export default Nav;