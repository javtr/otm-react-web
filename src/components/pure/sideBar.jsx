import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { textEn, textEs } from "../../assets/text/featuresPage.js";
import LanguageContext from "../../context/langContext.js";

const SideBar = () => {
  const { card, setCard } = useContext(UserContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);


  return (
    <div className="featPage__aside">
      <h2 className="featPage__aside--title1">{text.tit1}</h2>
      <div onClick={()=>setCard(7)} className="featPage__aside--item item-trans">{text.item1_1}</div>
      <div onClick={()=>setCard(8)} className="featPage__aside--item item-trans">{text.item1_2}</div>
      <div onClick={()=>setCard(11)} className="featPage__aside--item item-trans">{text.item1_5}</div>
      <div onClick={()=>setCard(10)} className="featPage__aside--item item-trans">{text.item1_4}</div>
      <div onClick={()=>setCard(9)} className="featPage__aside--item item-trans">{text.item1_3}</div>
      <h2 className="featPage__aside--title2">{text.tit2}</h2>
      <div onClick={()=>setCard(0)} className="featPage__aside--item item-trans">{text.item2_1}</div>
      <div onClick={()=>setCard(1)} className="featPage__aside--item item-trans">{text.item2_2}</div>
      <div onClick={()=>setCard(2)} className="featPage__aside--item item-trans">{text.item2_3}</div>
      <div onClick={()=>setCard(3)} className="featPage__aside--item item-trans">{text.item2_4}</div>
      <div onClick={()=>setCard(4)} className="featPage__aside--item item-trans">{text.item2_5}</div>
      <div onClick={()=>setCard(5)} className="featPage__aside--item item-trans">{text.item2_6}</div>
      <div onClick={()=>setCard(6)} className="featPage__aside--item item-trans">{text.item2_7}</div>
    </div>
  );
};

export default SideBar;
