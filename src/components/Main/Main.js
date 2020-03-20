import React from "react";

import './style.css';
import Home from "../Home/Home";
import Features from "../Features/Features";
import SignUp from "../SignUp/SignUp";

const Main = () => {
  return (
    <main className="Main">
      <Home />
      <Features />
      <SignUp />
    </main>
  );
};

export default Main;
