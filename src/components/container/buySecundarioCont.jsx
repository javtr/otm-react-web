import React from "react";
import BuySecundario from "../pure/buySecundario";
import { Products } from "../../assets/info/products";

export default function BuySecundarioCont() {


  return (
    <div className="buySecundario global__cont">
      <h2 className="buySecundario__titulo">Want a particular indicator?</h2>
      <p className="buySecundario__subTitulo">
      You can get any OTM indicator individually 
      </p>

      <div className="buySecundario__container">
        {Products.map((prod, index) => (
          index>0?
          <BuySecundario key={index} prod={prod} id={index}></BuySecundario>
          :
          ""
        ))}
      </div>

    </div>
  );
}
