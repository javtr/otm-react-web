import React, { useState, useEffect, useContext } from "react";
import { IndicatorsDataEn, IndicatorsDataEs } from "../../assets/info/IndicatorsData";
const images = require.context("../../assets/img", true);
import CardGenerator from "../pure/cardGenerator";
import UserContext from "../../context/userContext";
import { textEn, textEs } from "../../assets/text/hero.js";
import LanguageContext from "../../context/langContext.js";


const DynamicCard = () => {
  const { card, setCard } = useContext(UserContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(IndicatorsDataEn);

  useEffect(() => {
    if (lang == "en") {
      setText(IndicatorsDataEn);
    } else if (lang == "es") {
      setText(IndicatorsDataEs);
    } else {
      setText(IndicatorsDataEn);
    }
  }, [lang]);



  return (
    <div className="featPage__dyncard">
      <div className="featPage__dyncard--card">
        {Object.keys(text[card]).map((key, index) => {
          return (
            <CardGenerator
              key={key}
              i={key}
              data={text[card][key]}
            ></CardGenerator>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicCard;
