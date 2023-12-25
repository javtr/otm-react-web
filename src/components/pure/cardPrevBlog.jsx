import React from "react";
const images = require.context("../../assets/img", true);
import { useNavigate } from "react-router-dom";

export default function CardPrevBlog({ card, index }) {
  const navigate = useNavigate();

  function clickManag() {
    navigate(card.url);
  }

  return (
    <div className="blogPage__prev--card" onClick={() => clickManag()}>
      <img src={images(card.imgp)}></img>
      <h3>{card.titp}</h3>
    </div>
  );
}
