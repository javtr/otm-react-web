import React, { useState, useEffect, useContext } from "react";
import {
  FeaturesDataEn,
  FeaturesDataEs,
} from "../../assets/info/featuresData.js";
import CloseImg from "../../assets/img/icons8-close.svg";
const images = require.context("../../assets/img", true);
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";


export default function Modal({ cerrar, index }) {
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



  useEffect(() => {
    if (lang == "en") {
      setText(FeaturesDataEn);
    } else if (lang == "es") {
      setText(FeaturesDataEs);
    } else {
      setText(FeaturesDataEn);
    }

    setIsloading(false);
  }, [lang]);


  return (
    <>
      {!isloading ? (
        <div className="modal" onClick={cerrar} >

              <div className="modal--card" onClick={(e) => e.stopPropagation()}>
                <div className="modal--card--containerImg">
                  <div className="modal--card--close" onClick={cerrar}>
                    <img src={CloseImg}></img>
                  </div>

                  <div className="modal--card--button ">
                    <button className=" global__btp "
                    onClick={()=>navigate('/features')}
                    >Read more</button>
                  </div>

                  <div className="modal--card--img">
                    <img src={images(text[index].modalData.imgUrl)}></img>
                  </div>
                </div>

                <div className="modal--card--containerText">
                  <h2 className="modal--card--title">
                    {text[index].modalData.title}
                  </h2>

                  <h3 className="modal--card--subTitle">
                    {text[index].modalData.title2}
                  </h3>
                  <p className="modal--card--text">
                    {text[index].modalData.paragraph2}
                  </p>

                  <h3 className="modal--card--subTitle">
                    {text[index].modalData.title3}
                  </h3>
                  <p className="modal--card--text">
                    {text[index].modalData.paragraph3}
                  </p>

                  <h3 className="modal--card--subTitle">
                    {text[index].modalData.title4}
                  </h3>
                  <p className="modal--card--text">
                    {text[index].modalData.paragraph4}
                  </p>
                </div>
              </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
