import React, { useState, useEffect, useContext } from "react";
import BuySecundario from "../pure/buySecundario";
import { Products } from "../../assets/info/products";
import { textEn, textEs } from "../../assets/text/buySecundario.js";
import LanguageContext from "../../context/langContext.js";

export default function BuySecundarioCont() {
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
    <div className="buySecundario global__cont">
      <h2 className="buySecundario__titulo">{text.tit}</h2>
      <p className="buySecundario__subTitulo">
      {text.sub} 
      </p>

      <div className="buySecundario__container">
        {Products.map((prod, index) => (
          index>0?
          <BuySecundario key={index} prod={prod} id={index}></BuySecundario>
          :
          ""
        ))}
      </div>

    </div>
  );
}
