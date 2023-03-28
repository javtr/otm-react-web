import React, { useState, useEffect, useContext } from "react";
import {
  IndicatorsDataEn,
  IndicatorsDataEs,
} from "../../assets/info/IndicatorsData";
const images = require.context("../../assets/img", true);
import { CardGenerator } from "../pure/cardGenerator";
import UserContext from "../../context/userContext";
import { textEn, textEs } from "../../assets/text/hero.js";
import LanguageContext from "../../context/langContext.js";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const DynamicCard = ({cardRef}) => {
  const { card, setCard } = useContext(UserContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(IndicatorsDataEn);
  const params = useParams();
  let inCard = -1;

  

  useEffect(() => {
    if (lang == "en") {
      setText(IndicatorsDataEn);
    } else if (lang == "es") {
      setText(IndicatorsDataEs);
    } else {
      setText(IndicatorsDataEn);
    }
  }, [lang]);

  if (params.title !== "undefined" && text.length > 0) {
    inCard = text.findIndex((objeto) => objeto.url === params.title);
  }

  return (
    <>
      {inCard >= 0 ? (
        <div className="featPage__dyncard"
         ref={cardRef}>
          <div className="featPage__dyncard--card">
            {Object.keys(text[inCard]).map((key, index) => {
              return (
                <CardGenerator
                  key={key}
                  i={key}
                  data={text[inCard][key]}
                ></CardGenerator>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="featPage__dyncard"
         ref={cardRef}
        >
          <div className="featPage__dyncard--card">
            {Object.keys(text[0]).map((key, index) => {
              return (
                <CardGenerator
                  key={key}
                  i={key}
                  data={text[0][key]}
                ></CardGenerator>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicCard;
