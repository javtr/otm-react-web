import React, { useState, useEffect } from "react";
import Feature from "../pure/feature";
import ModalFeature from "../pure/modalFeature";
import { FeaturesData } from "../../assets/info/featuresData.js";

export default function Features() {
  const [abierto, setAbierto] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {}, []);

  function abrirModal(index) {
    setFeatureIndex(index);
    setAbierto(true);
  }

  function cerrarModal() {
    setAbierto(false);
  }

  return (
    <div className="features">
      {FeaturesData.map((feature, index) => (

         <div key={index} className="features__container" onClick={()=>{abrirModal(index)}}>
          <Feature feature={feature}></Feature>
        </div>

      ))}

      <ModalFeature abierto={abierto} cerrar={cerrarModal} index={featureIndex}></ModalFeature>
    </div>
  );
}
