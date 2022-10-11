import React from "react";
import mockup from "../../assets/img/mockup.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <div className="global__tx-lg hero__text--title">
            Analysis Software For Volume and Delta
          </div>
          <div className="global__tx-md hero__text--subTitle">
            Easily analyze the buying and selling strength of the futures
            market.
          </div>

          <button className="global__btp hero__text--button">Read more</button>
        
        </div>

        <div className="hero__img">
          <img src={mockup} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
