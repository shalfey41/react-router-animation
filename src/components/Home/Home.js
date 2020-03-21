import React, { useEffect } from "react";
import { gsap } from 'gsap';

import './style.css';

const Home = () => {
  useEffect(() => {
    gsap.from('.Home__title', { y: -40, opacity: 0, duration: 1 });
    gsap.from('.Home__text', { y: -40, opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="Home">
      <h1 className="Home__title">Go on Adventures You've Only Dreamt of…</h1>
      <p className="Home__text">Travel new lands and see magical landscapes with the wide 101° field of view through the large lens. The stable and precise head tracking via the built-in gyro sensor and accelerometer makes sure it's a smooth ride.</p>
    </section>
  );
};

export default Home;
