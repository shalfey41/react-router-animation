import React from "react";

import './style.css';
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <Logo className="Header__logo" />

        <ul className="Header__mainNav">
          <li className="Header__navItem"><a className="Header__navLink Header__navLink--active" href="#">Home</a></li>
          <li className="Header__navItem"><a className="Header__navLink" href="#">Features</a></li>
        </ul>

        <ul className="Header__secondaryNav">
          <li className="Header__navItem"><a className="Header__navLink" href="#">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
