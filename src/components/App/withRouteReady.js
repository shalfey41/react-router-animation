import React, { useEffect } from "react";
import { onReadyNewRoute } from "./animation";

const withRouteReady = (Component, hasData = false) => () => {
  useEffect(() => {
    if (!hasData) {
      onReadyNewRoute();
    }
  },[]);

  return <Component onReadyNewRoute={onReadyNewRoute} />;
};

export default withRouteReady;
