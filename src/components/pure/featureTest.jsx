import React, { useState, useEffect } from "react";
const images = require.context("../../assets/img", true);

export default function FeatureTest({ review }) {
  useEffect(() => {}, []);

  return (
    <div className="feature">
      <div className="feature__image">
        <img src={images(review.imgUrl)}></img>
      </div>
      {/* <div className="feature__title">{review.title}</div> */}
    </div>
  );
}
