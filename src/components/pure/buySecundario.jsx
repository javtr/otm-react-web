import React, { useState, useEffect, useContext } from "react";
const images = require.context("../../assets/img", true);
import { useNavigate } from "react-router-dom";
import { textEn, textEs } from "../../assets/text/buySecundario.js";
import LanguageContext from "../../context/langContext.js";

const BuySecundario = ({ prod,id }) => {
  const navigate = useNavigate();
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


  function toOrder() {
    navigate("/order/" + id);
  }

  return (
      <div className="buySecundario__card">
        <div className="buySecundario__card--imgSec">
          <img src={images(prod.img)}></img>
        </div>
        <h3 className="buySecundario__card--tit">{prod.product}</h3>
        <h3 className="buySecundario__card--price">
          $ {prod.price} <div>lifetime</div>{" "}
        </h3>
        <div className="buySecundario__card--button ">
          <button onClick={() => toOrder()}  className="global__btp">{text.btn}</button>
        </div>
      </div>
  );
};

export default BuySecundario;
