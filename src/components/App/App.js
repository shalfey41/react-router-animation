import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import './style.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouteAnimation from "./RouteAnimation";

const Comp = ({ children }) => {
  const isLoggedIn = true;

  return (
    <div>
      {children(isLoggedIn)}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Header />

    <Comp>{(isLoggedIn) => isLoggedIn ? 'isLoggedIn' : 'Sign Up'}</Comp>

    <Route render={({ location }) => <RouteAnimation location={location} />} />

    <Footer />
  </BrowserRouter>
);

export default App;
