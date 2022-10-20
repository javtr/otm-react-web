import React from "react";
const images = require.context("../../assets/img", true);

const CardGenerator = ({ i, data }) => {

  function retornoElementos() {
    switch (i.slice(0, 3)) {
      case "img":
        return (
          <div className="featPage__dyncard--card--img">
            <img src={images(data)}></img>
          </div>
        );

      case "tit":
        return (
          <div className="featPage__dyncard--card--tit">
            <h2>{data}</h2>
          </div>
        );

      case "txt":
        return (
          <div className="featPage__dyncard--card--txt">
            <p>{data}</p>
          </div>
        );

      case "sub":
        return (
          <div className="featPage__dyncard--card--sub">
            <h4>{data}</h4>
          </div>
        );

      default:
        return <div></div>;
    }
  }

  return retornoElementos();
};

export default CardGenerator;
