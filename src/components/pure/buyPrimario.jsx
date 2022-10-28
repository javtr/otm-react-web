import React from "react";
const images = require.context("../../assets/img", true);
import { useNavigate } from "react-router-dom";
import { Products } from "../../assets/info/products";


const BuyPrimario = () => {
  const navigate = useNavigate();

  function toOrder() {
    navigate("/order/" + 0);
  }

  return (
    <div className="buyPrimario  global__cont">
      <h2 className="buyPrimario__titulo">SAVE 50% WITH OTM PACK</h2>
      <p className="buyPrimario__subTitulo">
        You can save by purchasing the complete OTM indicator package
      </p>
      <div className="buyPrimario__card">
        <div className="buyPrimario__card--img">
          <img src={images(Products[0].img)}></img>
        </div>
        <h3 className="buyPrimario__card--tit">All-in-one OTM Pack</h3>
        <div className="buyPrimario__card--itm">Delta Swing</div>
        <div className="buyPrimario__card--itm">Delta Micro</div>
        <div className="buyPrimario__card--itm">Delta Cumulative</div>
        <div className="buyPrimario__card--itm">Delta Bar</div>
        <div className="buyPrimario__card--itm">Profile</div>
        <div className="buyPrimario__card--itm">Vwap</div>
        <div className="buyPrimario__card--itm">Timmer</div>
        <h3 className="buyPrimario__card--price">
          $ {Products[0].price} <div>lifetime</div>{" "}
        </h3>
        <div className="buyPrimario__card--button ">
          <button onClick={() => toOrder()} className="global__btp">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPrimario;
