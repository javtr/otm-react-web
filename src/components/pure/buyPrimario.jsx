import React, { useState, useEffect, useContext } from "react";
const images = require.context("../../assets/img", true);
import { useNavigate } from "react-router-dom";
import { Products } from "../../assets/info/products";
import { textEn, textEs } from "../../assets/text/buyPrimario.js";
import LanguageContext from "../../context/langContext.js";


const BuyPrimario = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);


  const navigate = useNavigate();

  function toOrder() {
    navigate("/order/" + 0);
  }

  return (
    <div className="buyPrimario  global__cont">
      <h2 className="buyPrimario__titulo">{text.tit}</h2>
      <p className="buyPrimario__subTitulo">
      {text.sub}
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

        <h3 className="buyPrimario__card--priceTotal">
          $ {Products[0].total} <div>total</div>{" "}
        </h3>

        <h3 className="buyPrimario__card--price">
          $ {Products[0].price}{" "}
        </h3>

        <h4 className="buyPrimario__card--properties">
          {
            lang == "en"?
            <div>One Time Purchase | Own it for Life <br/> + All Updates</div>
            :
            <div>Compra única | Tuyo de por vida <br/> + Todas las actualizaciones</div>}
        </h4>



        <div className="buyPrimario__card--button ">
          <button onClick={() => toOrder()} className="global__btp btn-trans-pry">
          {text.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPrimario;
