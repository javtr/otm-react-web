import React from "react";

const BuyPrimario = () => {
  return (
    <div className="buyPrimario">
      <h2 className="buyPrimario__titulo">SAVE 50% WITH OTM PACK</h2>
      <p className="buyPrimario__subTitulo">
        You can save by purchasing the complete OTM indicator package
      </p>
      <div className="buyPrimario__card">
        <div className="buyPrimario__card--img">
          <img></img>
        </div>
        <h3 className="buyPrimario__card--tit">All-in-one OTM Pack</h3>
        <div className="buyPrimario__card--itm">Delta Swing</div>
        <div className="buyPrimario__card--itm">Delta Micro</div>
        <div className="buyPrimario__card--itm">Delta Cumulative</div>
        <div className="buyPrimario__card--itm">Delta Bar</div>
        <div className="buyPrimario__card--itm">Profile</div>
        <div className="buyPrimario__card--itm">Vwap</div>
        <div className="buyPrimario__card--itm">Timmer</div>
      </div>
      <h3 className="buyPrimario__price">$ 497 lifetime</h3>
      <button className="buyPrimario__button global__btp">Buy now</button>
      


    </div>
  );
};

export default BuyPrimario;
