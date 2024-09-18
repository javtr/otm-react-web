import React, { useState, useEffect, useContext } from "react";
import { textEn, textEs } from "../assets/text/installation.js";
import LanguageContext from "../context/langContext.js";

const InstalationPage = () => {
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
    <div className="installation">
      <h1 className="installation__tituloGen">{text.titg1}</h1>
      <h2 className="installation__titulo">{text.titg1_01}</h2>
      <p className="installation__subTitulo"></p>

      <div className="installation__video">
        <iframe
          title="Error: The indicator does not load - NO DLL Error Produced"
          src={`https://www.youtube.com/embed/${text.urlg1_01}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>


      <h2 className="installation__titulo">{text.titg1_02}</h2>
      <p className="installation__subTitulo">{text.subg1_02}</p>

      <div className="installation__video">
        <iframe
          title="Error: The indicator does not load - NO DLL Error Produced"
          src={`https://www.youtube.com/embed/${text.urlg1_02}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <h2 className="installation__titulo">{text.titg1_03}</h2>
      <p className="installation__subTitulo">{text.subg1_03}</p>

      <div className="installation__video">
        <iframe
          title="Error: The indicator does not load - NO DLL Error Produced"
          src={`https://www.youtube.com/embed/${text.urlg1_03}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>      

      <h1 className="installation__tituloGen">{text.titg2}</h1>

      <h2 className="installation__titulo">{text.titg2_01}</h2>
      <p className="installation__subTitulo">{text.subg2_01}</p>

      <div className="installation__video">
        <iframe
          title="Error: The indicator does not load - NO DLL Error Produced"
          src={`https://www.youtube.com/embed/${text.urlg2_01}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>     

      <h2 className="installation__titulo">{text.titg2_02}</h2>
      <p className="installation__subTitulo">{text.subg2_02}</p>

      <div className="installation__video">
        <iframe
          title="Error: The indicator does not load - NO DLL Error Produced"
          src={`https://www.youtube.com/embed/${text.urlg2_02}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>     




    </div>
  );
};

export default InstalationPage;
