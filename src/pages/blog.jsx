import React, { useState, useEffect, useContext } from "react";
import { BlogDataEs, BlogDataEn } from "../assets/info/blog.js";
import LanguageContext from "../context/langContext.js";
import { BlogCardsPrevGenerator } from "../components/pure/blogCardGenerator.jsx";
import { useNavigate } from "react-router-dom";
import telegram from "../assets/img/blog/telegrama.png";
import discord from "../assets/img/blog/discord.png";

export default function Blog() {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(BlogDataEn);
  const navigate = useNavigate();
  let cadenaEntrada;

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
    let title = text[index]["url"];
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
        <div className="blogPage__aside">
          <a
            className="blogPage__aside--link"
            href="https://link.com"
            target="_blank"
          >
            <img className="blogPage__aside--link--img" src={telegram} />
            <p className="blogPage__aside--link--txt">
              Join our
              <br /> Telegram Channel
            </p>
          </a>

          <a
            className="blogPage__aside--link blogPage__aside--linkDisc"
            href="https://link.com"
            target="_blank"
          >
            <img className="blogPage__aside--link--img" src={discord} />
            <p className="blogPage__aside--link--txt">
              Join our
              <br /> Discord Channel
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
