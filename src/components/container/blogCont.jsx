import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { BlogDataEs, BlogDataEn } from "../../assets/info/blog.js";
import LanguageContext from "../../context/langContext.js";
import { useNavigate } from "react-router-dom";

import {
  BlogCardsGenerator,
  BlogMiniatureGenerator,
} from "../../components/pure/blogCardGenerator.jsx";

export default function BlogCont() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(BlogDataEn);
  const [indexArt, setIndexArt] = useState(null);
  const params = useParams();
  let titleArt = params.title;
  const navigate = useNavigate();
  const textRef = useRef();

  useEffect(() => {
    setIndexArt(text.findIndex((obj) => obj.url == titleArt));
  }, []);

  useEffect(() => {
    if (lang == "en") {
      textRef.current = {
        1: "Also in OTM",
      };
      setText(BlogDataEn);
    } else if (lang == "es") {
      textRef.current = {
        1: "También en OTM",
      };
      setText(BlogDataEs);
    } else {
      textRef.current = {
        1: "Also in OTM",
      };      
      setText(BlogDataEn);
    }
  }, [lang]);

  if (indexArt == -1) {
    console.log(indexArt);
    return <></>;
  }

  function navegateTo(index) {
    let title = text[index]["url"];
    // navigate(title);
    navigate(`/blog/${text[index]["url"]}`);
    window.location.reload(true);
  }

  return (
    <>
      {text[indexArt] != null ? (
        <div className="blog">
          <div className="blogArt">
            <div className="blogArt__card">
              {Object.keys(text[indexArt]).map((key, index) => {
                return (
                  <BlogCardsGenerator
                    key={index}
                    index={index}
                    i={key}
                    data={text[indexArt][key]}
                  ></BlogCardsGenerator>
                );
              })}
            </div>
          </div>
          <h3 className="blog__sub" >{textRef.current[1]}</h3>
          <div className="blogMin">
            <div className="blogMin__cont">
              {text.map((card, i) => (
                <div className="blogMin__cont--card" key={i}>
                  {Object.keys(card).map((key, index) => {
                    return (
                      <BlogMiniatureGenerator
                        key={index}
                        i={key}
                        data={card[key]}
                        navegateTo={navegateTo}
                        indexCard={i}
                      ></BlogMiniatureGenerator>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
