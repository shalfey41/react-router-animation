import React from "react";

import './style.css';

const Logo = ({ className = '' }) => {
  return <a href="#" className={`Logo ${className}`}>Mimini</a>;
};

export default Logo;
