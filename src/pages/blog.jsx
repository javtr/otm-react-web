import React, { useState, useEffect, useContext } from "react";
import { BlogDataEs, BlogDataEn } from "../assets/info/blog.js";
import LanguageContext from "../context/langContext.js";
import { BlogCardsPrevGenerator } from "../components/pure/blogCardGenerator.jsx";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(BlogDataEn);
  const navigate = useNavigate();

  useEffect(() => {
    if (lang == "en") {
      setText(BlogDataEn);
    } else if (lang == "es") {
      setText(BlogDataEs);
    } else {
      setText(BlogDataEn);
    }
  }, [lang]);

  function navegateTo(index) {
    let title = text[index]["titp"];
    title = title.replaceAll(" ", "-");
    navigate(title);
  }

  return (
    <div className="blogPage">
      <h2 className="blogPage__title">OTM Blog</h2>
        <div className="blogPage__container">
      <div className="blogPage__cards">
        {text.map((card, i) => (
          <div className="blogPage__cards--card" key={i}>
            {Object.keys(card).map((key, index) => {
              return (
                <BlogCardsPrevGenerator
                  key={index}
                  i={key}
                  data={card[key]}
                  navegateTo={navegateTo}
                  indexCard={i}
                ></BlogCardsPrevGenerator>
              );
            })}
          </div>
        ))}
      </div>
      <div className="blogPage__aside"></div>
</div>
    </div>
  );
}

// <div className="featPage__dyncard--card">
// {Object.keys(text[i]).map((key, index) => {
//   console.log(key);
//   return (
//     <BlogCardGenerator
//       key={index}
//       i={key}
//       data={text[i][key]}
//     ></BlogCardGenerator>
//   );
// })}
// </div>
