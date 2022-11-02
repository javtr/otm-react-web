import React, { createContext, useState, useMemo, useEffect } from "react";
import DynamicCard from "../components/container/dynamicCard";
import BuyButtonFeat from "../components/pure/buyButtonFeat";
import Footer from "../components/pure/footer";
import NavBar from "../components/pure/navBar";
import SideBar from "../components/pure/sideBar";
import UserContext from "../context/userContext";

const FeaturesPage = () => {
  const [card, setCard] = useState(0);

  const value = useMemo(() => ({ card, setCard }), [card]);

  return (
    <UserContext.Provider value={value}>
      {/* <NavBar></NavBar> */}

      <div className="featPage  global__cont">
        <div className="featPage__cont">
          <SideBar></SideBar>
          <DynamicCard></DynamicCard>
        </div>
        <BuyButtonFeat></BuyButtonFeat>
      </div>
      {/* <Footer></Footer> */}

    </UserContext.Provider>
  );
};

export default FeaturesPage;
