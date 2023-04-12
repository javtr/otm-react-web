import React, { useState, useEffect, useContext } from "react";
import CloseImg from "../../assets/img/icons8-close.svg";
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";
import { ReviewsDataEn, ReviewsDataEs } from "../../assets/info/reviewsData";
const vid = require.context("../../assets/video", true);


export default function ModalExamples({ cerrar, index }) {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const [content, setContent] = useState([]);


  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27)
        cerrar();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  useEffect(() => {
    if (lang == "en") {
      setContent(ReviewsDataEn);
    } else if (lang == "es") {
      setContent(ReviewsDataEs);
    } else {
      setContent(ReviewsDataEn);
    }
  }, [lang]);


  if (content.length == 0) {
    return (
      <></>
    )
  }

  return (
    <>
     {
      //control video existente
      (index+1)<=content.length?

      <div className="modalExamples__modal" onClick={cerrar} >
        <div className="modalExamples__modal--card" onClick={(e) => e.stopPropagation()}>
            <div className="modalExamples__modal--card--close" onClick={cerrar}>
              <img src={CloseImg}></img>
            </div>


            <iframe
              src={vid(content[index].video)}
              title="OTM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              className="modalExamples__modal--card--video"
            ></iframe>

          </div>
      </div>
      :
      <></>

      }

    </>
  );
}
