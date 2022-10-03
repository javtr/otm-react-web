import { Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import Feature from "../pure/feature";
import ModalFeature from "../pure/modalFeature";

export default function Features() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {}, []);

  function abrirModal() {
    setAbierto(true);
  }

  function cerrarModal() {
    setAbierto(false);
  }

  return (
    <div className="card-component">
      Features
      <div onClick={() => abrirModal()}>
        <Feature></Feature>
      </div>
        <ModalFeature abierto={abierto} cerrar={cerrarModal}></ModalFeature>
    </div>
  );
}
