import React, { useRef, useContext } from "react";
import BuyButton from "../components/pure/buyButton";
import Footer from "../components/pure/footer";
import Hero from "../components/pure/hero";
import Whatis from "../components/pure/whatis";
import Advantages from "../components/pure/advantage";
import Features from "../components/container/features";
import TestimonyCont from "../components/container/testimonyCont";
import LanguageContext from "../context/langContext.js";
import FloatingWhatsApp from "react-floating-whatsapp";
import logoOtm from "../assets/img/logoOtm.png";

const Home = () => {
  const myRef = useRef(null);
  const { lang, setLang } = useContext(LanguageContext);
  let repliTime = "";
  let message = "";

  const executeScroll = () => myRef.current.scrollIntoView();
  // const executeScroll = () => {console.log("chau");};

  if (lang == "en") {
    repliTime = "Typically replies within 1 hour";
    message = "Hello there! 🤝 \nHow can we help?";
  } else {
    repliTime = "Normalmente responde en 1 hora";
    message = "¡Hola! 🤝 \n¿En qué podemos ayudarte?";
  }

  return (
    <div className="body-home">
      <Hero scroll={executeScroll}></Hero>
      <Whatis refProp={myRef}></Whatis>
      <Features></Features>
      <Advantages></Advantages>
      {lang == "es" ? <TestimonyCont></TestimonyCont> : <></>}

      <BuyButton></BuyButton>
      <FloatingWhatsApp
        phoneNumber={573113006826}
        accountName={"OTM Trading"}
        avatar={logoOtm}
        chatMessage={message}
        statusMessage={repliTime}
        allowEsc = "true"
        allowClickAway = "true"
        className="whats_div"
        styles={{
          position: "fixed",
          right: "103px",
          bottom: "38px",
          width: "45px",
          height: "45px"
        }}
      ></FloatingWhatsApp>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
