import React from "react";
const images = require.context("../../assets/img", true);
import { useNavigate } from "react-router-dom";


const BuySecundario = ({ prod,id }) => {
  const navigate = useNavigate();

  console.log(id);

  function toOrder() {
    navigate("/order/" + id);
  }

  return (
      <div className="buySecundario__card">
        <div className="buySecundario__card--imgSec">
          <img src={images(prod.img)}></img>
        </div>
        <h3 className="buySecundario__card--tit">{prod.product}</h3>
        <h3 className="buySecundario__card--price">
          $ {prod.price} <div>lifetime</div>{" "}
        </h3>
        <div className="buySecundario__card--button ">
          <button onClick={() => toOrder()}  className="global__btp">Buy now</button>
        </div>
      </div>
  );
};

export default BuySecundario;
