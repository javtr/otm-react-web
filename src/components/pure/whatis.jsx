import React, { useState, useEffect, useContext } from "react";
import whatImg1 from "../../assets/img/otm_01.png";
import whatImg2 from "../../assets/img/otm_02.png";
import LanguageContext from "../../context/langContext.js";
import { textEn, textEs } from "../../assets/text/whatIs";
import performace_01 from "../../assets/img/otm_live_02.gif"

export default function Whatis({refProp}) {
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

  return (
    <div ref={refProp} className="what  global__cont">
      <div className="what__container">
        <h2 className="what__title">{text.what}</h2>
        <h4 className="what__subTitle">{text.sub}</h4>
        <div className="what__video">
          <iframe
            src={lang == "en"?"https://www.youtube.com/embed/4V2KlR4u4HQ":"https://www.youtube.com/embed/nIl9QHeYZRU"}
            title="OTM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h4 className="what__subTitle2">{text.tit}</h4>

        <div className="what__imagen">
          <img src={performace_01}></img>
        </div>

        {/* <div className="what__imagen">
          <img src={whatImg2}></img>
        </div> */}

      </div>
    </div>
  );
}
