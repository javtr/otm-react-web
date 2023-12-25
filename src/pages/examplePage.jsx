import React, { useState, useEffect, useContext } from "react";
import DynamicCardExp from "../components/container/dynamicCardExp";
import { textEn, textEs } from "../assets/text/example";
import LanguageContext from "../context/langContext.js";
import ModalExamples from "../components/pure/modalExamples";
import { Helmet } from "react-helmet";
import { seoEn, seoEs } from "../assets/text/metas.js";


export default function ExamplePage() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});
  const [indexContent, setIndexContent] = useState(0);
  const [abierto, setAbierto] = useState(false);
  const [textSeo, setTextSeo] = useState({});


  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
      setTextSeo(seoEn);

    } else if (lang == "es") {
      setText(textEs);
      setTextSeo(seoEs);

    } else {
      setText(textEn);
      setTextSeo(seoEn);

    }
  }, [lang]);

  function abrirModal(index) {
    setIndexContent(index);
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
    <div className="examplePage  global__cont">
      <Helmet>
        <title>{textSeo.homeTitle}</title>
        <meta
          name="description"
          content={textSeo.homeMeta}
        />
      </Helmet>

      <h2 className="examplePage__title">{text.tit}</h2>
      <DynamicCardExp abrirModal={abrirModal}></DynamicCardExp>

      {abierto ? (
        <ModalExamples
          cerrar={cerrarModal}
          index={indexContent}
        ></ModalExamples>
      ) : null}
    </div>
  );
}
