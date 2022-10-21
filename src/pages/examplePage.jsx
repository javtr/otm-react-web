import React from "react";
import DynamicCardExp from "../components/container/dynamicCardExp";

export default function ExamplePage() {
  return (
    <div className="examplePage  global__cont">
    <h2 className="examplePage__title">Analize the market wiht OTM</h2>
    
      <DynamicCardExp></DynamicCardExp>
    </div>
  );
}
