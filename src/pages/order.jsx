import React from "react";
import CardOrder from "../components/pure/cardOrder";
import PaymentOrder from "../components/pure/paymentOrder";
import { useParams } from "react-router-dom";
import logo from "../assets/img/logoW.svg"

export default function Order() {
  const params = useParams();

  return (
    <div className="orderPage">
      <div className="orderPage__logo">
        <img src={logo}></img>
      </div>
      <CardOrder productId={params.id}></CardOrder>
      <PaymentOrder productId={params.id}></PaymentOrder>
    </div>
  );
}
