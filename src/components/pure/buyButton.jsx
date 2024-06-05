import React, { useState, useEffect, useContext } from "react";
import logoNinja from "../../assets/img/logo_ninja.png";
import { textEn, textEs } from "../../assets/text/buyLanding.js";
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/NinjaTrader_Wordmark_color_RGB.png";
import logoK from "../../assets/img/Kinetick_Logo.png";


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

        <h3>Our Recommended Trading Platform</h3>
        <a  className="buybutton__img--aninja" href="https://ninjatrader.com/es/LP/VendorDemo/" target="_blank">
          <img className="buybutton__img--imgninja" src={logo} alt="ninjatrader"></img>
        </a>
        <h3>Our Recommended Market Data Feed</h3>
        <a href="https://kinetick.com/NinjaTrader" target="_blank">
          <img  className="buybutton__img--imgk" src={logoK} alt="ninjatrader"></img>
        </a>

      </div>
    </div>
  );
}
