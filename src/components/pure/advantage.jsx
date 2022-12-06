import React, { useState, useEffect, useContext } from "react";
import adv1 from '../../assets/img/advantage1.svg';
import { textEn, textEs } from "../../assets/text/advantage.js";
import LanguageContext from "../../context/langContext.js";

export default function Advantage() {
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

    <div className="advantages global__cont">
      <h2 className="advantages__title">{text.tit}</h2>
      <h2 className="advantages__subTitle">
      {text.sub}
      </h2>

      <div className="advantages__container">
        <div className="advantages__advantage">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>{text.tit1}</h2>
            <h4>
              {text.p1}
            </h4>
          </div>
        </div>

        <div className="advantages__advantage flex-row-rev">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>{text.tit2}</h2>
            <h4>
            {text.p2}
            </h4>
          </div>
        </div>

        <div className="advantages__advantage">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>{text.tit3}</h2>
            <h4>
            {text.p3}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
