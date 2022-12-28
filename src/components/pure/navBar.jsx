import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoW.svg";
import LanguageContext from "../../context/langContext.js";
import spImg from "../../assets/img/sp.png"
import enImg from "../../assets/img/en.png"
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const [sideBar, setSideBar] = useState("sideBarInit");
  const { lang, setLang } = useContext(LanguageContext);
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
    } else if (lang == "en") {
      localStorage.setItem("lang", "es");
      setLang("es");
    } else {
      localStorage.setItem("lang", "en");
      setLang("en");
    }
  }

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
            lang=="en" ?
              {
                backgroundImage: `url(${enImg})`
              } :
              {
                backgroundImage: `url(${spImg})`
              }
          }
        ></div>
        <div className="navbar__links">
          <Link className="link-before" to="/">OTM</Link>
          <Link className="link-before" to="features">Features</Link>
          <Link className="link-before" to="buy">Buy</Link>
          <Link className="link-before" to="example">Example</Link>
          <Link className="link-before" to="contact">Contact</Link>
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
        <Link className="link-before" to="/">OTM</Link>
          <Link className="link-before" to="features">Features</Link>
          <Link className="link-before" to="buy">Buy</Link>
          <Link className="link-before" to="example">Example</Link>
          <Link className="link-before" to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
