import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
import { Products } from "../../assets/info/products";
import paypalImg from "../../assets/img/pay.png";
import { textEn, textEs } from "../../assets/text/payment.js";
import LanguageContext from "../../context/langContext.js";
import { useParams } from "react-router-dom";
import paypal_button from "../../assets/img/paypal_button.png";

export default function PaymentOrder({ productId }) {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);
  const params = useParams();

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
    <div className="payment">
      <h3>{text.tit}</h3>
      <div className="payment__content">
        <div className="payment__content--logo">
          <hr></hr>

          <div className="payment__content--logo--img">
            <img src={paypalImg}></img>
          </div>
          <div className="payment__content--logo--text">
            <p>{text.text1}</p>
            <p>{text.text2}</p>
          </div>
        </div>

        <div className="payment__content--buttons">
          <div className="payment__content--buttons--buttonLemon">
            {params.id ? (
              <a href={Products[params.id].linkLemon} target="_blank">
                  Credit card
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>


      </div>

    </div>
  );
}
