import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
import { Products } from "../../assets/info/products";
import paypalImg from "../../assets/img/pay.png"
import { textEn, textEs } from "../../assets/text/payment.js";
import LanguageContext from "../../context/langContext.js";
import { useParams } from "react-router-dom";
import paypal_button from "../../assets/img/paypal_button.png"





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



  
  // const style = {
  //   layout: "vertical",
  //   color: "blue"
  // };

  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: "0.01",
  //         },
  //       },
  //     ],
  //   });
  // };

  // const onApprove = (data, actions) => {
  //   return actions.order.capture();
  // };

console.log(params.id);

console.log(Products[params.id].key);



  return (
    <div className="payment">
      <h3>{text.tit}</h3>
      <div className="payment__content">


        <div className="payment__content--logo">

        <hr></hr>


          <div className="payment__content--logo--img">
            <img src={paypalImg} ></img>
          </div>
          <div className="payment__content--logo--text">
            <p>
            {text.text1}
            </p>
            <p>
            {text.text2}
            </p>
          </div>
        </div>

        <div className="payment__content--buttons">
          <div className="payment__content--buttons--title">
            <hr></hr>
            <h4>Teachable</h4>
          </div>

          <div className="payment__content--buttons--btnTeach">
            <button>Credit card</button>
          </div>
          <p>By teachable</p>

          <div className="payment__content--buttons--title">
            <hr></hr>
            <h4>Paypal</h4>
          </div>
          <div className="payment__content--buttons--paypal">
            {/* boton paypal ------------------------------------ */}

            {/* <PayPalButton
              style={style}
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            /> */}

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"></input>
              <input type="hidden" name="hosted_button_id" value={Products[params.id].key}></input>
              <input className="payment__content--buttons--paypal--img" type="image" src={paypal_button} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
              <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"></img>
            </form>



            {/* boton paypal ------------------------------------ */}
          </div>



        </div>
      </div>

      {/* <div>{Products[productId].product}</div>
      <div>{Products[productId].price}</div> */}
    </div>
  );
}
