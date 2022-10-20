import React, { useState, useContext } from "react";
import { IndicatorsData } from "../../assets/info/IndicatorsData";
const images = require.context("../../assets/img", true);
import CardGenerator from "../pure/cardGenerator";
import UserContext from "../context/userContext";

const DynamicCard = () => {
  const { card, setCard } = useContext(UserContext);

  return (
    <div className="featPage__dyncard">
      <div className="featPage__dyncard--card">
        {Object.keys(IndicatorsData[card]).map((key, index) => {
          return (
            <CardGenerator
              key={key}
              i={key}
              data={IndicatorsData[card][key]}
            ></CardGenerator>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicCard;
