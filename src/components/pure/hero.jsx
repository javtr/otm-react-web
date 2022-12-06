import React, { useState, useEffect, useContext } from "react";
import mockup from "../../assets/img/mockup.png";
import { textEn, textEs } from "../../assets/text/hero.js";
import LanguageContext from "../../context/langContext.js";

export default function Hero() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);

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
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <div className="global__tx-lg hero__text--title">{text.tit1}</div>
          <div className="global__tx-md hero__text--subTitle">{text.subt}</div>

          <button className="global__btp hero__text--button">
            {text.buttMore}
          </button>
        </div>

        <div className="hero__img">
          <img src={mockup} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
