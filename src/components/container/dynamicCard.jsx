import React from "react";
import { IndicatorsData } from "../../assets/info/IndicatorsData";
const images = require.context('../../assets/img', true);



const DynamicCard = () => {
  return (
    <div>
      <div className="dyncard">
          <div className="dyncard--img">
            <img src={images(IndicatorsData[0].img)}></img>
          </div>
            
          <h2 className="dyncard--title">
            {}
          </h2>

          <h3 className="dyncard--subTitle">
            {}
          </h3>
          <p className="dyncard--text">
            {}
          </p>

          <h3 className="dyncard--subTitle">
            {}
          </h3>
          <p className="dyncard--text">
            {}
          </p>

          <h3 className="dyncard--subTitle">
            {}
          </h3>
          <p className="dyncard--text">
            {}
          </p>
      </div>
    </div>
  );
};

export default DynamicCard;
