import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoW.svg";
import LanguageContext from "../../context/langContext.js";
import spImg from "../../assets/img/sp.png"
import enImg from "../../assets/img/en.png"
import { useNavigate } from "react-router-dom";
import { textEn, textEs } from "../../assets/text/navbar.js";



const NavBar = () => {
  const [sideBar, setSideBar] = useState("sideBarInit");
  const { lang, setLang } = useContext(LanguageContext);
  const [content, setContent] = useState(textEn);
  const navigate = useNavigate();


  function turnSideBar() {
    if (sideBar == "sideBarInit") {
      setSideBar("sideBarOn");
    } else if (sideBar == "sideBarOn") {
      setSideBar("sideBarOff");
    } else if (sideBar == "sideBarOff") {
      setSideBar("sideBarOn");
    }
  }

  function turnOffSideBar() {
    setSideBar("sideBarOff");
  }

  function switchLanguage() {
    const lang = localStorage.getItem("lang");

    if (lang == "es") {
      localStorage.setItem("lang", "en");
      setLang("en");
      setContent(textEn);
    } else if (lang == "en") {
      localStorage.setItem("lang", "es");
      setLang("es");
      setContent(textEs);
    } else {
      localStorage.setItem("lang", "en");
      setLang("en");
      setContent(textEn);
    }
  }

  console.log(content);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div
          className="navbar__img"
          onClick={()=>navigate('/')}
        >
          <img src={logo} alt="Logo" />
        </div>

        <div
          className="navbar__lang"
          onClick={() => {
            switchLanguage();
          }}
          style={
            lang=="es" ?
              {
                backgroundImage: `url(${spImg})`
              } :
              {
                backgroundImage: `url(${enImg})`
              }
          }
        ></div>
        
        <div className="navbar__links">




          <Link className="link-before" to="/">{content.link1}</Link>
          <Link className="link-before" to="features">{content.link2}</Link>
          <Link className="link-before" to="buy">{content.link3}</Link>
          <Link className="link-before" to="example">{content.link4}</Link>
          <Link className="link-before" to="contact">{content.link5}</Link>
        </div>
      </div>

      <div className="navbar__burguer" onClick={turnSideBar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={sideBar}>
        <div className="st1" onClick={turnOffSideBar}>
          <div className="st2"></div>
          <div className="st3"></div>
        </div>

        <div className="sideBarLinks">
        <Link className="link-before" onClick={turnOffSideBar} to="/">{content.link1}</Link>
          <Link className="link-before" onClick={turnOffSideBar} to="features">{content.link2}</Link>
          <Link className="link-before" onClick={turnOffSideBar} to="buy">{content.link3}</Link>
          <Link className="link-before" onClick={turnOffSideBar} to="example">{content.link4}</Link>
          <Link className="link-before" onClick={turnOffSideBar} to="contact">{content.link5}</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
