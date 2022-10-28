import React from "react";
import { Products } from "../../assets/info/products";

export default function PaymentOrder({ productId }) {
  return (
    <div className="payment">
      <h3>Payment methods</h3>
      <div className="payment__content">
        <div className="payment__content--logo">
          <div className="payment__content--logo--img">
            <img></img>
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

          <div  className="payment__content--buttons--btnTeach">
          <button>Credit card</button>
</div>
          <p>By teachable</p>

          <div className="payment__content--buttons--title">
            <hr></hr>
            <h4>Paypal</h4>
          </div>
          <div className="payment__content--buttons--paypal"></div>
          <p>By paypal</p>
        </div>
      </div>

      {/* <div>{Products[productId].product}</div>
      <div>{Products[productId].price}</div> */}
    </div>
  );
}
