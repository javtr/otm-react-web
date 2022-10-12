import React, { useState, useEffect } from "react";
const images = require.context("../../assets/img", true);

export default function Feature({ feature, index }) {
  useEffect(() => {}, []);

  return (
    <div key={index} className="feature">
      <div className="feature__image">
        <img src={images(feature.imgUrl)}></img>
      </div>
      <div className="feature__title">{feature.title}</div>
    </div>
  );
}
