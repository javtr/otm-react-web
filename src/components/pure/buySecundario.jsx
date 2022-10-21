import React from "react";
const images = require.context("../../assets/img", true);


const BuySecundario = ({ prod }) => {
  return (
      <div className="buySecundario__card">
        <div className="buySecundario__card--imgSec">
          <img src={images(prod.img)}></img>
        </div>
        <h3 className="buySecundario__card--tit">{prod.tit}</h3>
        <h3 className="buySecundario__card--price">
          $ {prod.pre} <div>lifetime</div>{" "}
        </h3>
        <div className="buySecundario__card--button ">
          <button className="global__btp">Buy now</button>
        </div>
      </div>
  );
};

export default BuySecundario;
