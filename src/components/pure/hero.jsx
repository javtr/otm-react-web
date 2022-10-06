import React from "react";
import mockup from "../../assets/img/mockup.png"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__img">
        <img src={mockup} alt="Logo" />
        </div>
        <div className="hero__text">
          <div className="hero__text--title">Analysis Software For Volume and Delta</div>
          <div className="hero__text--subTitle">Easily analyze the buying and selling strength of the futures market.</div>
          <button className="hero__text--button">Read more</button>
        </div>
      </div>
    </div>
  );
}
