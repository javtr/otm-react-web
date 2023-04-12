import React from "react";
const images = require.context("../../assets/img", true);

const CardGeneratorExp = ({ index,i, data,abrirModal }) => {
  
  function retornoElementos() {
    switch (i.slice(0, 3)) {
      case "img":
        return (
          <div className="examplePage__dyncard--card--img">
            <img src={images(data)}
              onClick={()=>abrirModal(index)}
            ></img>
          </div>
        );

      case "imi":
        return (
          <div className="examplePage__dyncard--card--imi">
            <img src={images(data)}></img>
          </div>
        );

      case "dat":
        return (
          <div className="examplePage__dyncard--card--dat">
            <p>{data}</p>
          </div>
        );

      case "tit":
        return (
          <div className="examplePage__dyncard--card--tit">
            <h2>{data}</h2>
          </div>
        );

      case "txt":
        return (
          <div className="examplePage__dyncard--card--txt">
            <p>{data}</p>
          </div>
        );

      case "sub":
        return (
          <div className="examplePage__dyncard--card--sub">
            <h4>{data}</h4>
          </div>
        );

        case "lnk":
          return (
            <div className="examplePage__dyncard--card--link">
              <a href={data[0]} target="_blank">
                {data[1]}
              </a>
            </div>
          );

        //texto con margen
        case "txm":
          return (
            <div className="examplePage__dyncard--card--txtMargin">
              <p>{data}</p>
            </div>
          );


        //texto con link
        case "txl":
        return <div className="examplePage__dyncard--card--txtLink">{txtLink(data)}</div>;


      default:
        return <div></div>;
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


export default CardGeneratorExp;




