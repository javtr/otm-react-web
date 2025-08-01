import React, { useRef, useState, useContext, useEffect } from "react";
import BuyButton from "../components/pure/buyButton";
import Footer from "../components/pure/footer";
import Hero from "../components/pure/hero";
import BlackFriday from "../components/pure/blackfriday.jsx";
import Whatis from "../components/pure/whatis";
import Advantages from "../components/pure/advantage";
import Features from "../components/container/features";
import TestimonyCont from "../components/container/testimonyCont";
import Products from "../components/Products/Products";
import LanguageContext from "../context/langContext.js";
import { Helmet } from "react-helmet";
import { seoEn, seoEs } from "../assets/text/metas.js";

const Home = () => {
  const myRef = useRef(null);
  const { lang, setLang } = useContext(LanguageContext);
  const [textSeo, setTextSeo] = useState({});

  let repliTime = "";
  let message = "";

  const executeScroll = () => myRef.current.scrollIntoView();
  // const executeScroll = () => {console.log("chau");};

  useEffect(() => {
    if (lang == "en") {
      repliTime = "Typically replies within 1 hour";
      message = "Hello there! 🤝 \nHow can we help?";
      setTextSeo(seoEn);
    } else {
      repliTime = "Normalmente responde en 1 hora";
      message = "¡Hola! 🤝 \n¿En qué podemos ayudarte?";
      setTextSeo(seoEs);
    }
  }, [lang]);

  return (
    <div className="body-home">

      <Helmet>
        <title>{textSeo.homeTitle}</title>
        <meta
          name="description"
          content={textSeo.homeMeta}
        />
      </Helmet>

      {/* <BlackFriday></BlackFriday> */}
      <Hero scroll={executeScroll}></Hero>
      <Whatis refProp={myRef}></Whatis>
      <Features></Features>
      {/* <Products></Products> */}
      <Advantages></Advantages>
      {lang == "es" ? <TestimonyCont></TestimonyCont> : <></>}

      <BuyButton></BuyButton>
    </div>
  );
};

export default Home;
