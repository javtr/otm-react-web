import React from "react";
import logoNinja from "../../assets/img/logo_ninja.png";

export default function BuyButton() {
  return (
    <div className="buybutton global__cont">

        <div className="buybutton__title">
          {" "}
          Trade simple and smart using OTM indicators!
        </div>
        <div className="buybutton__subTitle">
          {" "}
          Are you ready to take your trading to the next level?
        </div>
        <div className="buybutton__button">
          <button className="global__btp">Buy now</button>
        </div>
        <div className="buybutton__img">
          <img src={logoNinja}></img>
        </div>
    </div>
  );
}
