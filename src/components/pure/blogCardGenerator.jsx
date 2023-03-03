import React from "react";
const images = require.context("../../assets/img", true);
import { Link } from "react-router-dom";


// generador de previos
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

      case "key_":
        let result = [];
        {
          for (const key in data) {
            result.push(
              <a href={data[key]} key={key}>
                {key}
              </a>
            );
          }
        }

        return <div className="blogPage__cards--card--key">{result}</div>;



    }
  }

  return retornoElementos();
};

// generador del blog
export const BlogCardsGenerator = ({
  i,
  data,
  navegateTo,
  indexCard,
  index,
}) => {
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
            <p>
              by <Link to="/">{data}</Link>
            </p>
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
        return (
          <div className="blogArt__card--dotLink">{txtLink(data, index)}</div>
        );

      case "key_":
        let result = [];
        {
          for (const key in data) {
            result.push(
              <a href={data[key]} key={key}>
                {key}
              </a>
            );
          }
        }

        return <div className="blogPage__cards--card--key">{result}</div>;
    }
  }

  return retornoElementos();
};


function txtLink(data, index) {
  let parts = data[0].split("<");
  let result = [];
  let indexLink = 1;

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith("/")) {
      result.push(parts[i].substring(parts[i].indexOf(">") + 1));
    } else {
      let tagEndIndex = parts[i].indexOf(">");
      if (tagEndIndex !== -1) {
        result.push(
          <a key={index + i} target="_blank" href={data[indexLink]}>
            {parts[i].substring(tagEndIndex + 1)}
          </a>
        );
        indexLink++;
      } else {
        result.push(parts[i]);
      }
    }
  }

  return <p>{result}</p>;
}


// generador de minuaturas previos dentro del blog


export const BlogMiniatureGenerator = ({
  i,
  data,
  navegateTo,
  indexCard,
  index,
}) => {
  function retornoElementos() {
    switch (i.slice(0, 4)) {

      case "imgp":
        return (
          <div
            className="blogMin__cont--card--img"
            onClick={() => navegateTo(indexCard)}
          >
            <img src={images(data)}></img>
          </div>
        );

        case "titp":
          return (
            <div
              className="blogMin__cont--card--tit"
              onClick={() => navegateTo(indexCard)}
            >
              <h3>{data}</h3>
            </div>
          );




    }
  }

  return retornoElementos();
};

