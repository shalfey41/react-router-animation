import React, { useState } from "react";

import './style.css';
import image1 from './assets/1.jpeg';
import image2 from './assets/2.svg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.webp';
import image5 from './assets/5.jpg';
import Modal from "../Modal/Modal";
import withRouteReady from "../App/withRouteReady";

const Features = () => {
  const [canShowModal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <section className="Features">
      <h1 className="Features__title">A Fitting Design</h1>
      <p className="Features__text">If you want to spend hours with your Mimini VR, you can: the Mimini VR is engineered with your comfort in mind and is designed to feel comfortable when you’re wearing it.</p>
      <button onClick={showModal} className="Features__button">Нажми меня</button>

      {canShowModal && <Modal onClose={closeModal} />}

      <div className="Features__imageGrid">
        <div className="Features__imageMain">
          <img src={image1} alt="Interior 1" width="300" className="Features__image" />
        </div>
        <div className="Features__imageGridRow">
          <div className="Features__imageGridColumn">
            <img src={image4} alt="Interior 2" width="300" className="Features__image Features__image2" />
            <img src={image3} alt="Interior 3" width="300" className="Features__image Features__image3" />
          </div>
          <div className="Features__imageGridColumn">
            <img src={image2} alt="Interior 4" width="300" className="Features__image Features__image4" />
            <img src={image5} alt="Interior 5" width="300" className="Features__image Features__image5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouteReady(Features);
