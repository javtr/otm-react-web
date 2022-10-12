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
    disableScroll();
  }

  function cerrarModal() {
    setAbierto(false);
    enableScroll();
  }

  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  return (
    <div className="features">
      <div className="features__container">

        {FeaturesData.map((feature, index) => (
          <div
            key={index}
            className="features__container--feature"
            onClick={() => {
              abrirModal(index);
            }}
          >
            <Feature feature={feature} index={index}></Feature>
          </div>
        ))}

      </div>

      <ModalFeature
        abierto={abierto}
        cerrar={cerrarModal}
        index={featureIndex}
      ></ModalFeature>
    </div>
  );
}
