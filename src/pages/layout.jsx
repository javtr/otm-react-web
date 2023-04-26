import React, { useRef, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/pure/navBar";
import Footer from "../components/pure/footer";
import ScrollToTop from "react-scroll-to-top";
import { IconContext } from "react-icons";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import FloatingWhatsApp from "react-floating-whatsapp";
import logoOtm from "../assets/img/logoOtm.png";
import LanguageContext from "../context/langContext.js";


export default function layout() {

  const { lang, setLang } = useContext(LanguageContext);
  let repliTime = "";
  let message = "";

  if (lang == "en") {
    repliTime = "Typically replies within 1 hour";
    message = "Hello there! 🤝 \nHow can we help?";
  } else {
    repliTime = "Normalmente responde en 1 hora";
    message = "¡Hola! 🤝 \n¿En qué podemos ayudarte?";
  }



  return (
    <div className="layout">
      <ScrollToTop
        className="gl-goTop--cont"
        smooth
        component={
          <IconContext.Provider value={{ className: "gl-goTop" }}>
            <div>
              <BsFillArrowUpCircleFill />
            </div>
          </IconContext.Provider>
        }
      />


      <FloatingWhatsApp
        phoneNumber={573113006826}
        accountName={"OTM Trading"}
        avatar={logoOtm}
        chatMessage={message}
        statusMessage={repliTime}
        allowEsc="true"
        allowClickAway="true"
        className="whats_div"
        styles={{
          position: "fixed",
          right: "38px",
          bottom: "25px",
          width: "45px",
          height: "45px",
        }}
      ></FloatingWhatsApp>

      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
