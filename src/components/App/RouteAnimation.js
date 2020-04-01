import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";

import './style.css';
import Main from "../Main/Main";
import { hideNextPage, showLoader } from "./animation";

const RouteAnimation = ({ location }) => {
  const { key } = location;

  return (
    <TransitionGroup component={null}>
      <Transition
        key={key}
        timeout={{ enter: 200, exit: 1000 }}
        onEnter={hideNextPage}
        onExit={showLoader}
      >
        <Main location={location} />
      </Transition>
    </TransitionGroup>
  );
};

export default RouteAnimation;
