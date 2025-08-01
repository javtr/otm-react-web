import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import youtube from "../../assets/img/youtube.png";
import telegram from "../../assets/img/telegrama.png";
import Policies from "../../pages/policies.jsx";
import LanguageContext from "../../context/langContext.js";
import { textEn, textEs } from "../../assets/text/footer.js";


export default function Footer() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);

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
    <div className="footer  global__cont">
      <hr className="footer__linea"></hr>

      <div className="footer__container">
        <div className="footer__textContainer">
        <p className="footer__text">{text.pr1}</p>
        <p className="footer__text">{text.pr2}</p>
        <p className="footer__text">{text.pr3}</p>
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
          <Link className="footer__policies" to="/policies">{text.link4}</Link>
          <p className="footer__rights">© OTM Trading 2025</p>
        </div>
      </div>
    </div>
  );
}
