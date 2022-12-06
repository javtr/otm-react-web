import React, { createContext, useState, useMemo, useEffect } from "react";
import DynamicCard from "../components/container/dynamicCard";
import BuyButtonFeat from "../components/pure/buyButtonFeat";
import SideBar from "../components/pure/sideBar";
import UserContext from "../context/userContext";

const FeaturesPage = () => {
  const [card, setCard] = useState(0);
  const value = useMemo(() => ({ card, setCard }), [card]);

  return (
    <UserContext.Provider value={value}>
      <div className="featPage  global__cont">
        <div className="featPage__cont">
          <SideBar></SideBar>
          <DynamicCard></DynamicCard>
        </div>
        <BuyButtonFeat></BuyButtonFeat>
      </div>
    </UserContext.Provider>
  );
};

export default FeaturesPage;
