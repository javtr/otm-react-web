import React, { useEffect } from "react";
import Card from "./card";
import Modal from "./modal";


export default function ModalFeature({ abierto, cerrar,index }) {
  return (
    <div >
      {abierto ? (

        <div className="modal-card" >
          <Modal cerrar={cerrar} index={index}></Modal>
        </div>

      ) : (
       null
      )}
    </div>
  );
}
