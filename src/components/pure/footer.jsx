import React from "react";

export default function Footer() {
  return (
    <div className="footer  global__cont">
      <hr className="footer__linea"></hr>

      <div className="footer__container">
        <div className="footer__textContainer">
          <p className="footer__text">
            Trading futures, forex and options contains considerable risk and is
            not for all investors. An investor can potentially lose all or more
            than the initial investment. Risk capital is money that can be lost
            without jeopardizing financial security or lifestyle. Only risk
            capital should be used for trading and only those with sufficient
            risk capital should consider trading. Past performance is not
            necessarily indicative of future results.
          </p>
        </div>

        <div className="footer__mailContainer">
          <h4 className="footer__subTitle">OTM Objective Method</h4>
          <p className="footer__mail">info@otmtrading.com</p>
          <p className="footer__rights">© OTM Trading 2022</p>
        </div>
      </div>
    </div>
  );
}
