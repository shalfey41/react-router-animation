import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";

import './style.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { enterRoute, exitRoute } from "./timeline";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route render={({ location }) => {
        const { key } = location;

        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              timeout={{ enter: 200, exit: 1000 }}
              onEnter={(node) => enterRoute(node, location)}
              onExit={(node) => exitRoute(node, location)}
            >
              <Main location={location} />
            </Transition>
          </TransitionGroup>
        );
      }} />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
