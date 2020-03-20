import React from "react";

import './style.css';

const SignUp = () => {
  return (
    <section className="SignUp">
      <div className="SignUp__content">
        <h1 className="SignUp__title">Sign Up Now</h1>
        <p className="SignUp__text">Use the Minini VR controller as a remote control to navigate your virtual reality with ease or use it as a gamepad.</p>

        <form>
          <input className="SignUp__input" type="text" placeholder="Name" required />
          <input className="SignUp__input" type="email" placeholder="Email" required />
          <button className="SignUp__button">Sign Up Now</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
