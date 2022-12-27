import React from "react";
import CardOrder from "../components/pure/cardOrder";
import PaymentOrder from "../components/pure/paymentOrder";
import { useParams } from "react-router-dom";
import logo from "../assets/img/logoW.svg"
import { useNavigate } from "react-router-dom";



export default function Order() {
  const params = useParams();
  const navigate = useNavigate();


  return (
    <div className="orderPage">
      <div className="orderPage__logo">
        <img
          onClick={() => navigate('/')}
          src={logo}></img>
      </div>
      <CardOrder productId={params.id}></CardOrder>
      <PaymentOrder productId={params.id}></PaymentOrder>
    </div>
  );
}
