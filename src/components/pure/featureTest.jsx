import React, { useState, useEffect } from "react";
const images = require.context("../../assets/img", true);

export default function FeatureTest({ review }) {
  useEffect(() => {}, []);

  return (
    <div className="testimony__container--image">
        <img src={images(review.imgUrl)}></img>
    </div>
  );
}
