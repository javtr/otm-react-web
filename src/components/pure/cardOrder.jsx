import React, { useState, useEffect, useContext } from "react";
import { Products } from "../../assets/info/products";
import { textEn, textEs } from "../../assets/text/payment.js";
import LanguageContext from "../../context/langContext.js";




export default function CardOrder({ productId }) {
  const todayDate = new Date().toISOString().slice(0, 10);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);



  return (
    <div className="CardOrder">
      <div className="CardOrder__box">
        <h2 className="CardOrder__box--title">{text.order}</h2>
        <p className="CardOrder__box--date">{todayDate}</p>
      </div>
      <div className="CardOrder__content">
        <div className="CardOrder__content--product">
          <div className="CardOrder__content--product--item CardOrder__content--product--it">
            <p>Item</p>
            <div>{Products[productId].product}</div>
          </div>
          <div className="CardOrder__content--product--item CardOrder__content--product--lc">
            <p>Licence</p>
            <div>Lifetime</div>
          </div>
          <div className="CardOrder__content--product--item CardOrder__content--product--pr">
            <p>Price</p>
            <div>
              <p>$ </p> {Products[productId].price}
            </div>
          </div>
        </div>
        <hr></hr>
        <h4><p>Total: $ </p> {Products[productId].price + " "} <p>usd</p></h4>
      </div>

      {/* <div>{Products[productId].product}</div>
      <div>{Products[productId].price}</div> */}
    </div>
  );
}
