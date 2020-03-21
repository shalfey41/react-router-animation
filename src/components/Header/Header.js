import React from "react";
import { NavLink } from "react-router-dom";

import './style.css';
import Logo from "../Logo/Logo";
import {page} from "../../router";

const Link = ({ children, ...rest }) => (
  <NavLink className="Header__navLink" exact activeClassName="Header__navLink--active" {...rest}>{children}</NavLink>
);

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <Logo className="Header__logo" />

        <ul className="Header__mainNav">
          <li className="Header__navItem"><Link to={page.home}>Home</Link></li>
          <li className="Header__navItem"><Link to={page.features}>Features</Link></li>
        </ul>

        <ul className="Header__secondaryNav">
          <li className="Header__navItem"><Link to={page.signUp}>Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
