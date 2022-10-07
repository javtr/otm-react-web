import React from "react";
import whatImg1 from '../../assets/img/otm_01.png'
import whatImg2 from '../../assets/img/otm_02.png'


export default function Whatis() {
  return (
    <div className="what">
      <h2 className="global__tx-lg  what__title">What is OTM?</h2>
      <h4 className="global__tx-md  what__subTitle">
        OTM offers real-time insider information on buying and selling strength
      </h4>
      <div className="what__video">
        <iframe
          // width="807"
          // height="454"
          src="https://www.youtube.com/embed/4V2KlR4u4HQ"
          title="OTM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h4 className="global__tx-md what__subTitle2">
        OTM tools will take your trading to the next level
      </h4>

      <div className="what__imagen">
        <img src={whatImg1}></img>
      </div>

      <div className="what__imagen">
        <img src={whatImg2}></img>
      </div>


    </div>
  );
}
