import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { textEn, textEs } from "../../assets/text/featuresPage.js";
import LanguageContext from "../../context/langContext.js";
import { IndicatorsDataEn, IndicatorsDataEs } from "../../assets/info/IndicatorsData";

const SideBar = () => {
  const { card, setCard } = useContext(UserContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState([]);

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

      text.length>0?

    <div className="featPage__aside">
      <h2 className="featPage__aside--title1">OTM Trading Como Sistema</h2>
      <div onClick={()=>setCard(0)} className="featPage__aside--item item-trans">{text[0].linkTit}</div>
      <h2 className="featPage__aside--title1">Explicación Indicadores</h2>
      <div onClick={()=>setCard(1)} className="featPage__aside--item item-trans">{text[1].linkTit}</div>
      <div onClick={()=>setCard(2)} className="featPage__aside--item item-trans">{text[2].linkTit}</div>
      <div onClick={()=>setCard(3)} className="featPage__aside--item item-trans">{text[3].linkTit}</div>
      <div onClick={()=>setCard(4)} className="featPage__aside--item item-trans">{text[4].linkTit}</div>
      <div onClick={()=>setCard(5)} className="featPage__aside--item item-trans">{text[5].linkTit}</div>
      <div onClick={()=>setCard(6)} className="featPage__aside--item item-trans">{text[6].linkTit}</div>
      <div onClick={()=>setCard(7)} className="featPage__aside--item item-trans">{text[7].linkTit}</div>
      <h2 className="featPage__aside--title1">Estrategias</h2>
      <div onClick={()=>setCard(8)} className="featPage__aside--item item-trans">{text[8].linkTit}</div>
      <div onClick={()=>setCard(9)} className="featPage__aside--item item-trans">{text[9].linkTit}</div>
      <h2 className="featPage__aside--title1">¿Listo? Revisa esto para comenzar</h2>
      <div onClick={()=>setCard(10)} className="featPage__aside--item item-trans">{text[10].linkTit}</div>
      <div onClick={()=>setCard(11)} className="featPage__aside--item item-trans">{text[11].linkTit}</div>
      <div onClick={()=>setCard(12)} className="featPage__aside--item item-trans">{text[12].linkTit}</div>
    </div>
      :
      <></>
  );
};

export default SideBar;
