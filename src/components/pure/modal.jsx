import React from "react";
import { FeaturesData } from "../../assets/info/featuresData.js";
import CloseImg from "../../assets/img/icons8-close.svg";
const images = require.context('../../assets/img', true);


export default function Modal({ cerrar, index }) {
  return (
    <div className="modal">
      <div className="modal--container" onClick={cerrar}>
        <div className="modal--card" onClick={e => e.stopPropagation()}>
          <div className="modal--card--containerImg">

            <div className="modal--card--close" onClick={cerrar}>
              <img src={CloseImg}></img>
            </div>

            <div className="modal--card--button ">
              <button className=" global__btp ">Read more</button>
            </div>            

            <div className="modal--card--img">
              <img src={images(FeaturesData[index].modalData.imgUrl)}></img>

            </div>
          </div>

          <div className="modal--card--containerText">
            <h2 className="modal--card--title">
              {FeaturesData[index].modalData.title}
            </h2>

            <h3 className="modal--card--subTitle">
              {FeaturesData[index].modalData.title2}
            </h3>
            <p className="modal--card--text">
              {FeaturesData[index].modalData.paragraph2}
            </p>

            <h3 className="modal--card--subTitle">
              {FeaturesData[index].modalData.title3}
            </h3>
            <p className="modal--card--text">
              {FeaturesData[index].modalData.paragraph3}
            </p>

            <h3 className="modal--card--subTitle">
              {FeaturesData[index].modalData.title4}
            </h3>
            <p className="modal--card--text">
              {FeaturesData[index].modalData.paragraph4}
            </p>




          </div>
        </div>
      </div>
    </div>
  );
}
