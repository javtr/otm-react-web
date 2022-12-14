import React, { useState, useEffect, useContext, useCallback } from "react";
import Feature from "../pure/feature";
import ModalFeature from "../pure/modalFeature";
import { FeaturesDataEn } from "../../assets/info/featuresData.js";
import { textEn, textEs } from "../../assets/text/features.js";
import LanguageContext from "../../context/langContext.js";

export default function Features() {
  const [abierto, setAbierto] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);
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



  function abrirModal(index) {
    setFeatureIndex(index);
    setAbierto(true);
    disableScroll();
  }

  function cerrarModal() {
    setAbierto(false);
    enableScroll();
  }

  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  return (
    <div className="features global__cont" >
      <h2 className="global__tx-mdl features__title">{text.tit}</h2>
      <h3 className="global__tx-sm features__subTitle">{text.sub}</h3>

      <div className="features__container ">
        {FeaturesDataEn.map((feature, index) => (
          <div
            key={index}
            className="features__container--feature"
            onClick={() => {
              abrirModal(index);
            }}
          >
            <Feature feature={feature} index={index}></Feature>
          </div>
        ))}
      </div>

      <ModalFeature
        abierto={abierto}
        cerrar={cerrarModal}
        index={featureIndex}
      ></ModalFeature>
    </div>
  );
}
