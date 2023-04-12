import React, { useState, useEffect, useContext } from "react";
import DynamicCardExp from "../components/container/dynamicCardExp";
import { textEn, textEs } from "../assets/text/example";
import LanguageContext from "../context/langContext.js";
import ModalExamples from "../components/pure/modalExamples";

export default function ExamplePage() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});
  const [indexContent, setIndexContent] = useState(0);
  const [abierto, setAbierto] = useState(false);


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
      <h2 className="examplePage__title">{text.tit}</h2>
      <DynamicCardExp abrirModal={abrirModal}></DynamicCardExp>


      {abierto ? (
          <ModalExamples cerrar={cerrarModal} index={indexContent}></ModalExamples>
      ) : (
       null
      )}


    </div>
  );
}
