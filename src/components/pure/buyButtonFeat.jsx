import React, { useState, useEffect, useContext } from "react";
import { textEn, textEs } from "../../assets/text/buyLanding.js";
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";


const BuyButtonFeat = () => {
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
      <div className="buybutton__title">
      {text.tit}
      </div>
      <div className="buybutton__subTitle">
      {text.sub}
      </div>
      <div className="buybutton__button feat_buyButton">
        <button className="global__btp btn-trans-pry"
        onClick={()=>navigate('/buy')}
        >{text.btn}</button>
      </div>
    </div>
  );
};

export default BuyButtonFeat;
