import React from "react";

import './style.css';
import withRouteReady from "../App/withRouteReady";

const NotFound = () => (
  <section className="NotFound">
    <h1 className="NotFound__title">Not Found, sorry</h1>
  </section>
);

export default withRouteReady(NotFound);
