import React from "react";
import ReactDOM from "react-dom";
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
import { Products } from "../../assets/info/products";
import paypalImg from "../../assets/img/pay.png"

export default function PaymentOrder({ productId }) {
  const style = {
    layout: "vertical",
    color: "blue"
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <div className="payment">
      <h3>Payment methods</h3>
      <div className="payment__content">


        <div className="payment__content--logo">

        <hr></hr>


          <div className="payment__content--logo--img">
            <img src={paypalImg} ></img>
          </div>
          <div className="payment__content--logo--text">
            <p>
              Pay by debit or credit card without the need to create a Paypal
              account.
            </p>
            <p>
              All transactions are done securely through Paypal or Teachable
              platforms.
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

            <PayPalButton
              style={style}
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />

            {/* boton paypal ------------------------------------ */}
          </div>



        </div>
      </div>

      {/* <div>{Products[productId].product}</div>
      <div>{Products[productId].price}</div> */}
    </div>
  );
}
