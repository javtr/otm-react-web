import React, { useState } from "react";
import { IndicatorsData } from "../../assets/info/IndicatorsData";
import CardGeneratorExp from "../pure/cardGeneratorExp";

const DynamicCardExp = () => {
  return (
    <div className="examplePage__dyncard">
      {IndicatorsData.map((indi, index) => (
        <div className="examplePage__dyncard--card">
          {Object.keys(indi).map((key, index) => {
            return (
              <CardGeneratorExp
                key={key}
                i={key}
                data={indi[key]}
              ></CardGeneratorExp>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DynamicCardExp;
