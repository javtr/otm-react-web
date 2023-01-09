import React, { useState, useEffect, useContext } from "react";
import CloseImg from "../../assets/img/icons8-close.svg";
const images = require.context("../../assets/img", true);
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";

export default function ModalReview({ cerrar, index }) {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const navigate = useNavigate();

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


  return (
    <>
        <div className="modal" onClick={cerrar} >
              <div className="modal--card" onClick={(e) => e.stopPropagation()}>
                <div className="modal--card--containerImg">
                  <div className="modal--card--close" onClick={cerrar}>
                    <img src={CloseImg}></img>
                  </div>

                    <iframe
                        src="https://www.youtube.com/embed/4V2KlR4u4HQ"
                        title="OTM"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                        allowFullScreen
                      ></iframe>


                </div>


              </div>
        </div>
    </>
  );
}
