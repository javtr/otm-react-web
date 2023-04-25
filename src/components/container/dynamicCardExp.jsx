import React, { useState, useEffect, useContext } from "react";
import { ExampleDataEn,ExampleDataEs } from "../../assets/info/ExampleData";
import CardGeneratorExp from "../pure/cardGeneratorExp";
import LanguageContext from "../../context/langContext.js";

const DynamicCardExp = ({abrirModal}) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(ExampleDataEn);

  useEffect(() => {
    if (lang == "en") {
      setText(ExampleDataEn);
    } else if (lang == "es") {
      setText(ExampleDataEs);
    } else {
      setText(ExampleDataEn);
    }
  }, [lang]);


  return (
    <div className="examplePage__dyncard">
      {text.map((indi, indexText) => (
        <div key={indexText} className="examplePage__dyncard--card">
          {Object.keys(indi).map((key, index) => {
            return (
              <CardGeneratorExp
                key={index}
                index={indexText}
                i={key}
                data={indi[key]}
                // abrirModal={abrirModal}
              ></CardGeneratorExp>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DynamicCardExp;
