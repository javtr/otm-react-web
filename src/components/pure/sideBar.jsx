import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { textEn, textEs } from "../../assets/text/featuresPage.js";
import LanguageContext from "../../context/langContext.js";
import {
  IndicatorsDataEn,
  IndicatorsDataEs,
} from "../../assets/info/IndicatorsData";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SideBar = ({ dynamicRef }) => {
  const { card, setCard } = useContext(UserContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if (lang == "en") {
      setText(IndicatorsDataEn);
    } else if (lang == "es") {
      setText(IndicatorsDataEs);
    } else {
      setText(IndicatorsDataEn);
    }
  }, [lang]);


  function handleClick() {
    if (dynamicRef) {
      dynamicRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return text.length > 0 ? (
    <div className="featPage__aside">
      <h2 className="featPage__aside--title1">
        {lang == "en" ? "OTM Trading As A System" : "OTM Trading Como Sistema"}
      </h2>

      <Link
        onClick={handleClick}
        to={"/features/" + text[0].url}
        className="featPage__aside--item item-trans"
      >
        {text[0].linkTit}
      </Link>

      <h2 className="featPage__aside--title1">
        {lang == "en" ? "Indicators Explanation" : "Explicación Indicadores"}
      </h2>

      <Link
        onClick={handleClick}
        to={"/features/" + text[1].url}
        className="featPage__aside--item item-trans"
      >
        {text[1].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[2].url}
        className="featPage__aside--item item-trans"
      >
        {text[2].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[3].url}
        className="featPage__aside--item item-trans"
      >
        {text[3].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[4].url}
        className="featPage__aside--item item-trans"
      >
        {text[4].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[5].url}
        className="featPage__aside--item item-trans"
      >
        {text[5].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[6].url}
        className="featPage__aside--item item-trans"
      >
        {text[6].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[7].url}
        className="featPage__aside--item item-trans"
      >
        {text[7].linkTit}
      </Link>

      <h2 className="featPage__aside--title1">
        {lang == "en" ? "Strategies" : "Estrategias"}
      </h2>

      <Link
        onClick={handleClick}
        to={"/features/" + text[8].url}
        className="featPage__aside--item item-trans"
      >
        {text[8].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[9].url}
        className="featPage__aside--item item-trans"
      >
        {text[9].linkTit}
      </Link>

      <h2 className="featPage__aside--title1">
        {lang == "en"
          ? "Are you ready? Check this to start"
          : "¿Listo? Revisa esto para comenzar"}
      </h2>

      <Link
        onClick={handleClick}
        to={"/features/" + text[10].url}
        className="featPage__aside--item item-trans"
      >
        {text[10].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[11].url}
        className="featPage__aside--item item-trans"
      >
        {text[11].linkTit}
      </Link>

      <Link
        onClick={handleClick}
        to={"/features/" + text[12].url}
        className="featPage__aside--item item-trans"
      >
        {text[12].linkTit}
      </Link>
    </div>
  ) : (
    <></>
  );
};

export default SideBar;
