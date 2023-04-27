import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/img/404-error.png";
import logoOtm from "../../assets/img/logoW.svg";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageContext from "../../context/langContext.js";

export default function Error404() {
  const lastLocation = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useContext(LanguageContext);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error">
      <div className="error__logoOtm">
        <img src={logoOtm}></img>
      </div>

      <div className="error__logo404">
        <img src={logo}></img>
      </div>

      {lang == "en" ? (
        <>
          <div className="error__text">
            <h1>PAGE NOT FOUND</h1>
            <p>We looked everywhere for this page.</p>
            <p>Are you sure the website URL is correct?</p>
          </div>

          <div className="error__button">
            <button onClick={handleGoBack}>Go Back Home</button>
          </div>
        </>
      ) : (
        <>
        <div className="error__text">
            <h1>PAGINA NO <br/> ENCONTRADA</h1>
            <p>Hemos buscado esta página por todas partes.</p>
            <p>¿Estás seguro de que la URL del sitio web es correcta?</p>
          </div>

          <div className="error__button">
            <button onClick={handleGoBack}>Volver</button>
          </div>


        </>
      )}
    </div>
  );
}
