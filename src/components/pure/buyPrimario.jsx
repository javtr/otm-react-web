import React from "react";
import packImg from "../../assets/img/pack_mini.png";

const BuyPrimario = () => {
  return (
    <div className="buyPrimario  global__cont">
      <h2 className="buyPrimario__titulo">SAVE 50% WITH OTM PACK</h2>
      <p className="buyPrimario__subTitulo">
        You can save by purchasing the complete OTM indicator package
      </p>
      <div className="buyPrimario__card">
        <div className="buyPrimario__card--img">
          <img src={packImg}></img>
        </div>
        <h3 className="buyPrimario__card--tit">All-in-one OTM Pack</h3>
        <div className="buyPrimario__card--itm">Delta Swing</div>
        <div className="buyPrimario__card--itm">Delta Micro</div>
        <div className="buyPrimario__card--itm">Delta Cumulative</div>
        <div className="buyPrimario__card--itm">Delta Bar</div>
        <div className="buyPrimario__card--itm">Profile</div>
        <div className="buyPrimario__card--itm">Vwap</div>
        <div className="buyPrimario__card--itm">Timmer</div>
        <h3 className="buyPrimario__card--price">$ 497 <div>lifetime</div> </h3>
        <div className="buyPrimario__card--button ">
        <button className="global__btp">Buy now</button>
      </div>
      </div>
    </div>
  );
};

export default BuyPrimario;
