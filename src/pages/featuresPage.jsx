import React from "react";
import DynamicCard from "../components/container/dynamicCard";
import BuyButtonFeat from "../components/pure/buyButtonFeat";
import SideBar from "../components/pure/sideBar";

const FeaturesPage = () => {
  return (
    <div className="featPage  global__cont">
      <div className="featPage__cont">
        <SideBar></SideBar>
        <DynamicCard></DynamicCard>
      </div>
      <BuyButtonFeat></BuyButtonFeat>
    </div>
  );
};

export default FeaturesPage;
