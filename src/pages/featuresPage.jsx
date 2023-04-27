import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useContext,
} from "react";
import DynamicCard from "../components/container/dynamicCard";
import BuyButtonFeat from "../components/pure/buyButtonFeat";
import SideBar from "../components/pure/sideBar";
import UserContext from "../context/userContext";
import {
  IndicatorsDataEn,
  IndicatorsDataEs,
} from "../assets/info/IndicatorsData";
import LanguageContext from "../context/langContext.js";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const FeaturesPage = () => {
  const [card, setCard] = useState(0);
  const { lang, setLang } = useContext(LanguageContext);
  const value = useMemo(() => ({ card, setCard }), [card]);
  const [text, setText] = useState(IndicatorsDataEn);
  const navigate = useNavigate();
  const cardRef = useRef();

  useEffect(() => {
    if (lang == "en") {
      setText(IndicatorsDataEn);
    } else if (lang == "es") {
      setText(IndicatorsDataEs);
    } else {
      setText(IndicatorsDataEn);
    }
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [card]);

  return (
    <UserContext.Provider value={value}>
      <Helmet>
        <title>Analysis Software For Volume and Delta</title>
        <meta
          name="description"
          content="Optimiza tu estrategia de trading en el mercado de futuros con OTM Trading, el software de indicadores técnicos especializado en volumen y delta que te brinda información precisa y confiable."
        />
      </Helmet>

      <div className="featPage  global__cont">
        <div className="featPage__cont">
          <SideBar dynamicRef={cardRef}></SideBar>
          <DynamicCard cardRef={cardRef}></DynamicCard>
        </div>
        <BuyButtonFeat></BuyButtonFeat>
      </div>
    </UserContext.Provider>
  );
};

export default FeaturesPage;
