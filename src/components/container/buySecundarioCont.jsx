import React from "react";
import BuySecundario from "../pure/buySecundario";

export default function BuySecundarioCont() {
  const datosProductos = [
    {
      img: "./ds_mini.png",
      tit: "Delta Swing",
      pre: "288",
    },
    {
      img: "./ds_mini.png",
      tit: "Delta Swing",
      pre: "288",
    },
    {
      img: "./ds_mini.png",
      tit: "Delta Swing",
      pre: "288",
    },
    {
      img: "./ds_mini.png",
      tit: "Delta Swing",
      pre: "288",
    },
  ];

  return (
    <div className="buySecundario global__cont">
      <h2 className="buySecundario__titulo">Want a particular indicator?</h2>
      <p className="buySecundario__subTitulo">
      You can get any OTM indicator individually 
      </p>

      <div className="buySecundario__container">
        {datosProductos.map((prod, index) => (
          <BuySecundario key={index} prod={prod}></BuySecundario>
        ))}
      </div>

    </div>
  );
}
