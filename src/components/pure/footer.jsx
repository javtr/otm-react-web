import React, { useState, useEffect, useContext } from "react";
import youtube from "../../assets/img/youtube.png";
import telegram from "../../assets/img/telegrama.png";
import LanguageContext from "../../context/langContext.js";

export default function Footer() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="footer  global__cont">
      <hr className="footer__linea"></hr>

      <div className="footer__container">
        <div className="footer__textContainer">
          {lang === "en" ? (
            <p className="footer__text">
              Trading futures, forex and options contains considerable risk and
              is not for all investors. An investor can potentially lose all or
              more than the initial investment. Risk capital is money that can
              be lost without jeopardizing financial security or lifestyle. Only
              risk capital should be used for trading and only those with
              sufficient risk capital should consider trading. Past performance
              is not necessarily indicative of future results.
            </p>
          ) : (
            <p className="footer__text">
            El trading de futuros, forex y opciones conlleva un considerable riesgo y no es para todos los inversores. Un inversor potencialmente puede perder todo o más que la inversión inicial. El capital de riesgo es el dinero que se puede perder sin comprometer la seguridad financiera o el estilo de vida. Solo el capital de riesgo debe ser utilizado para el trading y solo aquellos con suficiente capital de riesgo deberían considerar el trading. El rendimiento pasado no es necesariamente indicativo de resultados futuros.
            </p>
          )}
        </div>

        <div className="footer__mailContainer">
          <h4 className="footer__subTitle">
            OTM <br /> Objective Trading Method
          </h4>
          <p className="footer__mail">info@otmtrading.com</p>

          <div className="footer__iconCont">
            <a
              href="https://www.youtube.com/c/3CTradingCompany"
              target="_blank"
            >
              <img src={youtube}></img>
            </a>
            <a href="https://t.me/comunidad3c" target="_blank">
              <img src={telegram}></img>
            </a>
          </div>
          <p className="footer__rights">© OTM Trading 2022</p>
        </div>
      </div>
    </div>
  );
}
