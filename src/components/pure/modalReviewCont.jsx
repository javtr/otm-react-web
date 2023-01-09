import React, { useEffect } from "react";
import Modal from "./modal";
import ModalReview from "./modalReview";


export default function ModalReviewCont({ abierto, cerrar,index }) {

  return (
    <div >
      {abierto ? (
          <ModalReview cerrar={cerrar} index={index}></ModalReview>
      ) : (
       null
      )}
    </div>
  );
}
