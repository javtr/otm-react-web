import React, { useState, useEffect, useContext } from "react";
import DynamicCardExp from "../components/container/dynamicCardExp";
import { textEn, textEs } from "../assets/text/example";
import LanguageContext from "../context/langContext.js";

export default function ExamplePage() {
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
    <div className="examplePage  global__cont">
      <h2 className="examplePage__title">{text.tit}</h2>
      <DynamicCardExp></DynamicCardExp>
    </div>
  );
}
