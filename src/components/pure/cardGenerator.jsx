import React from "react";
const images = require.context("../../assets/img", true);
const videos = require.context("../../assets/video", true);
import { Link } from "react-router-dom";


// generador del blog
export const CardGenerator = ({
  i,
  data,
  navegateTo,
  indexCard,
  index,
  
}) => {
  function retornoElementos() {
    switch (i.slice(0, 4)) {

      //imagen principal
      case "imgb":
        return (
          <div className="feature--img"          >
            <img src={images(data)}></img>
          </div>
        );

        //imagen interna
      case "iinb":
        return (
          <div className="feature--imgInt">
            <img src={images(data)}
            ></img>
          </div>
        );

        //imagen interna
        case "ivib":
          return (
            <div className="feature--imgInt">

            <video  className="
            testimony__modal--card--video" 
            src={videos(data)} 
            autoPlay={false}  
            controls
            />

            </div>
          );        


        //titulo
      case "titb":
        return (
          <div className="feature--tit">
            <h2>{data}</h2>
          </div>
        );

        //subtitulo
        case "subb":
        return (
          <div className="feature--sub">
            <h4>{data}</h4>
          </div>
        );

        //texto
        case "txtb":
        return (
          <div className="feature--txt">
            <p>{data}</p>
          </div>
        );

        //texto con margen
        case "txmb":
        return (
          <div className="feature--txtMargin">
            <p>{data}</p>
          </div>
        );

        //texto con margen junto
        case "tmnb":
        return (
          <div className="feature--txtMarginNext">
            <p>{data}</p>
          </div>
        );        


        //texto con link
        case "txlb":
        return <div className="feature--txtLink">{txtLink(data)}</div>;


        //by team
        case "bytb":
        return (
          <div className="feature--by">
            <p>
              by <Link to="/">{data}</Link>
            </p>
          </div>
        );

        //button
      case "lnkb":
        return (
          <div className="feature--link">
            <a href={data[0]} target="_blank">
              {data[1]}
            </a>
          </div>
        );

        //texto con dot
      case "dotb":
        return (
          <div className="feature--dot">
            <p>{data}</p>
          </div>
        );

        //texto con dot y link
      case "dtlb":
        return (
          <div className="feature--dotLink">{txtLink(data, index)}</div>
        );

        //keywords
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