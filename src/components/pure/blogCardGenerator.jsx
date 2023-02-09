import React from "react";
const images = require.context("../../assets/img", true);

export const BlogCardsPrevGenerator = ({ i, data, navegateTo, indexCard }) => {
  function retornoElementos() {
    switch (i.slice(0, 4)) {
      case "imgp":
        return (
          <div
            className="blogPage__cards--card--img"
            onClick={() => navegateTo(indexCard)}
          >
            <img src={images(data)}></img>
          </div>
        );

      case "titp":
        return (
          <div
            className="blogPage__cards--card--tit"
            onClick={() => navegateTo(indexCard)}
          >
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
            <a href={data[0]} target="_blank">
              {data[1]}
            </a>
          </div>
        );
    }
  }

  return retornoElementos();
};

export const BlogCardsGenerator = ({ i, data, navegateTo, indexCard }) => {
  function retornoElementos() {
    switch (i.slice(0, 4)) {
      case "imgb":
        return (
          <div className="blogArt__card--img">
            <img src={images(data)}></img>
          </div>
        );
      case "iinb":
        return (
          <div className="blogArt__card--imgInt">
            <img src={images(data)}></img>
          </div>
        );

      case "titb":
        return (
          <div className="blogArt__card--tit">
            <h2>{data}</h2>
          </div>
        );

      case "subb":
        return (
          <div className="blogArt__card--sub">
            <h4>{data}</h4>
          </div>
        );

      case "txtb":
        return (
          <div className="blogArt__card--txt">
            <p>{data}</p>
          </div>
        );

      case "txlb":
        return <div className="blogArt__card--txtLink">{txtLink(data)}</div>;

      case "bytb":
        return (
          <div className="blogArt__card--by">
            <p>{data}</p>
          </div>
        );

      case "lnkb":
        return (
          <div className="blogArt__card--link">
            <a href={data[0]} target="_blank">
              {data[1]}
            </a>
          </div>
        );

      case "dotb":
        return (
          <div className="blogArt__card--dot">
            <p>{data}</p>
          </div>
        );

      case "dtlb":
        return <div className="blogArt__card--dotLink">{txtLink(data)}</div>;
    }
  }

  return retornoElementos();
};

function txtLink(data) {
  const Textparts = data[0].split("<link>");

  return (
    <p>
      {Textparts[0]}
      <a target="_blank" href={data[1]}>
        {Textparts[1]}
      </a>
      {Textparts[2]}
    </p>
  );
}
