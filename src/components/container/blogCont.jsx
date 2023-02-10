import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogDataEs, BlogDataEn } from "../../assets/info/blog.js";
import LanguageContext from "../../context/langContext.js";
import { BlogCardsGenerator } from "../../components/pure/blogCardGenerator.jsx";

export default function BlogCont() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(BlogDataEn);
  const [indexArt, setIndexArt] = useState(null);
  const params = useParams();
  let titleArt = params.title;

  useEffect(() => {
    setIndexArt(text.findIndex((obj) => obj.url == titleArt));
  }, []);

  useEffect(() => {
    if (lang == "en") {
      setText(BlogDataEn);
    } else if (lang == "es") {
      setText(BlogDataEs);
    } else {
      setText(BlogDataEn);
    }
  }, [lang]);

  if (indexArt == -1) {
    console.log(indexArt);
    return <></>;
  }

  return (
    <>
      {text[indexArt] != null ? (
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
      ) : (
        <></>
      )}
    </>
  );
}
