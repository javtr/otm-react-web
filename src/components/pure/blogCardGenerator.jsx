import React from "react";
const images = require.context("../../assets/img", true);


export const BlogCardsPrevGenerator = ({ i, data,navegateTo,indexCard }) => {

  function retornoElementos() {
    switch (i.slice(0, 4)) {

      case "imgp":
        return (
          <div className="blogPage__cards--card--img" onClick={()=>navegateTo(indexCard)}>
            <img src={images(data)}></img>
          </div>
        );

      case "titp":
        return (
          <div className="blogPage__cards--card--tit" onClick={()=>navegateTo(indexCard)}>
            <h2>{data}</h2>
          </div>
        );

      case "txtp":
        return (
          <div className="blogPage__cards--card--txt">
            <p>{data}</p>
          </div>
        );

      case "subp":
        return (
          <div className="blogPage__cards--card--sub">
            <h4>{data}</h4>
          </div>
        );

      case "lnkp":
        return (
          <div className="blogPage__cards--card--link">
            <a href={data[0]} target="_blank">{data[1]}</a>
          </div>
        );

    }
  }

  return retornoElementos();
};

export const BlogCardsGenerator = ({ i, data,navegateTo,indexCard }) => {

  function retornoElementos() {
    switch (i.slice(0, 4)) {

      case "imgp":
        return (
          <div className="blogArt__card--img">
            <img src={images(data)}></img>
          </div>
        );

      case "titp":
        return (
          <div className="blogArt__card--tit">
            <h2>{data}</h2>
          </div>
        );

      case "txtp":
        return (
          <div className="blogArt__card--txt">
            <p>{data}</p>
          </div>
        );

      case "subp":
        return (
          <div className="blogArt__card--sub">
            <h4>{data}</h4>
          </div>
        );

      case "lnkp":
        return (
          <div className="blogArt__card--link">
            <a href={data[0]} target="_blank">{data[1]}</a>
          </div>
        );

    }
  }

  return retornoElementos();
};

