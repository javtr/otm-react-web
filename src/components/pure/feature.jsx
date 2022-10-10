import React, { useState,useEffect } from "react";
import Card2 from "./card";

export default function Feature({feature}) {

  useEffect(() => {
  
  }, []);


  return (
    <div className="features__container--feature">
      <Card2 feature={feature}>
      </Card2>
    </div>
  );
}
