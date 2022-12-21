import React, { useEffect } from "react";
import Modal from "./modal";


export default function ModalFeature({ abierto, cerrar,index }) {
  return (
    <div >
      {abierto ? (

      
          <Modal cerrar={cerrar} index={index}></Modal>
       

      ) : (
       null
      )}
    </div>
  );
}
