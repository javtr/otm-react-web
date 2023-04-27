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
          <div className="payment__content--buttons--title">
            <hr></hr>
            <h4>Teachable</h4>
          </div>

          <div className="payment__content--buttons--btnTeach">
            {params.id ? (
              <a href={Products[params.id].linkTeack} target="_blank">
                <div className="payment__content--buttons--btnTeach-container">
                  Credit card
                </div>
              </a>
            ) : (
              <></>
            )}
          </div>
          <p>By teachable</p>

          <div className="payment__content--buttons--title">
            <hr></hr>
            <h4>Paypal</h4>
          </div>
          <div className="payment__content--buttons--paypal">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick"></input>

              {params.id ? (
                <input
                  type="hidden"
                  name="encrypted"
                  value={Products[params.id].key}
                ></input>
              ) : (
                <></>
              )}

              <input
                className="payment__content--buttons--paypal--img"
                type="image"
                src={paypal_button}
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              ></input>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
                width="1"
                height="1"
              ></img>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
