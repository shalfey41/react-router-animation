import React from "react";
import { useRouteMatch } from "react-router-dom";

import './style.css';
import Logo from "../Logo/Logo";
import { page } from "../../router";

const Footer = () => {
  const match = useRouteMatch(page.signUp);

  if (match) {
    return null;
  }

  return (
    <footer className="Footer">
      <Logo className="Footer__logo" />
    </footer>
  );
};

export default Footer;
