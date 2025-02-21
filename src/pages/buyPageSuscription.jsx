import React, { useEffect, useState } from "react";
import BuySuscripcion from "../components/pure/buySuscription";
import { Helmet } from "react-helmet";

const BuyPageSuscription = () => {
  const [isYearly, setIsYearly] = useState(false); // Estado para cambiar entre mensual/anual

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Subscription Plans</title>
        <meta
          name="description"
          content="Optimiza tu estrategia de trading con nuestros planes de suscripción para indicadores de volumen y delta."
        />
      </Helmet>
      {/* Pasamos la variable isYearly al nuevo componente */}
      <BuySuscripcion isYearly={isYearly} setIsYearly={setIsYearly} />
    </div>
  );
};

export default BuyPageSuscription;
