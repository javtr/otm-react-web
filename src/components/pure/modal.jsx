import React from "react";
import { FeaturesData } from "../../assets/info/featuresData.js";

export default function Modal({ cerrar,index }) {
  return (
    <div className="modal">
      <div className="modal--container" onClick={cerrar}>
        <div className="modal--card">
          <h2>{FeaturesData[index].modalData.title}</h2>
        </div>
      </div>
    </div>
  );
}
