import React, { useEffect } from "react";
import BuySecundarioCont from "../components/container/buySecundarioCont";
import BuyPrimario from "../components/pure/buyPrimario";
import { Helmet } from "react-helmet";

const BuyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Analysis Software For Volume and Delta</title>
        <meta
          name="description"
          content="Optimiza tu estrategia de trading en el mercado de futuros con OTM Trading, el software de indicadores técnicos especializado en volumen y delta que te brinda información precisa y confiable."
        />
      </Helmet>
      <BuyPrimario></BuyPrimario>
      <BuySecundarioCont></BuySecundarioCont>
    </div>
  );
};

export default BuyPage;
