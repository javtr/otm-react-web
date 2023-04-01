import React, { useState, useEffect } from "react";
const images = require.context("../../assets/img", true);
import next from "../../assets/img/next_log.png";
import magnif from "../../assets/img/magnif_logo.png";
import { useNavigate } from "react-router-dom";

export default function Feature({ feature, index }) {
  useEffect(() => {}, []);
  const navigate = useNavigate();


  return (
    <div key={index} className="feature">
      <div className="feature__image">
        <div className="feature__icons">
          <div
            onClick={(e) => e.stopPropagation()}
            className="feature__icons--image"
          >
            <img onClick={() => {navigate(feature.url)}} src={next}></img>
          </div>
          <div className="feature__icons--image">
            <img src={magnif}></img>
          </div>
        </div>

        <img src={images(feature.imgUrl)}></img>
      </div>
      <div className="feature__title">{feature.title}</div>
    </div>
  );
}
