import React, { useState, useEffect, useContext } from "react";
import logoNinja from "../../assets/img/logo_ninja.png";
import { textEn, textEs } from "../../assets/text/buyLanding.js";
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";

export default function BuyButton() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);

  return (
    <div className="buybutton global__cont">
      <div className="buybutton__title">{text.tit}</div>
      <div className="buybutton__subTitle">{text.sub}</div>
      <div className="buybutton__button">
        <button
          className="global__btp btn-trans-pry"
          onClick={() => navigate("/buy")}
        >
          {text.btn}
        </button>
      </div>
      <div className="buybutton__img">
        <img src={logoNinja}></img>
      </div>
    </div>
  );
}
