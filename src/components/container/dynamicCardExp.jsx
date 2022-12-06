import React, { useState, useEffect, useContext } from "react";
import { ExampleDataEn,ExampleDataEs } from "../../assets/info/ExampleData";
import CardGeneratorExp from "../pure/cardGeneratorExp";
import LanguageContext from "../../context/langContext.js";

const DynamicCardExp = () => {
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
      {text.map((indi, index) => (
        <div className="examplePage__dyncard--card">
          {Object.keys(indi).map((key, index) => {
            return (
              <CardGeneratorExp
                key={key}
                i={key}
                data={indi[key]}
              ></CardGeneratorExp>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DynamicCardExp;
