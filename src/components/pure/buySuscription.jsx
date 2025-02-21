import React, { useState, useEffect, useContext } from "react";
import { textEn, textEs } from "../../assets/text/buySuscription.js";
import LanguageContext from "../../context/langContext.js";

const BuySuscripcion = ({ isYearly, setIsYearly }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);

  const selectedPlans = text?.yearly
    ? isYearly
      ? text.lifetime
      : text.yearly
    : [];

  return (
    <div className="subscription">
      {/* Switch para cambiar entre mensual y anual */}
      <div className="subscription__switch-container">
        <div
          className={`subscription__switch-option ${
            !isYearly ? "subscription__switch-option--active" : ""
          }`}
          onClick={() => setIsYearly(false)}
        >
          {lang == "en" ? "Yearly" : "Anual"}
        </div>
        <div
          className={`subscription__switch-option ${
            isYearly ? "subscription__switch-option--active" : ""
          }`}
          onClick={() => setIsYearly(true)}
        >
          {lang == "en" ? "Lifetime" : "Lifetime"}
          </div>
      </div>

      {/* Renderización de los planes */}
      <div className="subscription__plans">
        {selectedPlans.map((plan, index) => (
          <div key={index} className="subscription__plans-card">
            <h2 className="subscription__plans-card--name">{plan.name}</h2>
            <hr className="separator" />
            <div className="subscription__plans-card--price">
              <h3  className="subscription__plans-card--price--value">${plan.price}</h3>
              <div className="subscription__plans-card--price--details">
                <h4 className="subscription__plans-card--price--details--price2">${plan.price2}</h4>
                <h4 className="subscription__plans-card--price--details--subt">{plan.pricetext}</h4>
              </div>
            </div>
            <h5 className="subscription__plans-card--subt">{plan.pricesub}</h5>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="subscription__plans-card--button">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySuscripcion;
