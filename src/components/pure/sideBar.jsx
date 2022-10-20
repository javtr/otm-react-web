import React, { useContext,createContext } from "react";
import UserContext from "../context/userContext";

const SideBar = () => {

  const { card, setCard } = useContext(UserContext);

  return (
    <div className="featPage__aside">
      <h2 className="featPage__aside--title1">General</h2>
      <div className="featPage__aside--item">System features</div>
      <div className="featPage__aside--item">Installation</div>
      <h2 className="featPage__aside--title2">Indicators</h2>
      <div onClick={()=>setCard(0)} className="featPage__aside--item">
        Swing
      </div>
      <div onClick={()=>setCard(1)} className="featPage__aside--item">Micro</div>
      <div className="featPage__aside--item">Cumulative</div>
      <div className="featPage__aside--item">Bar</div>
      <div className="featPage__aside--item">Profile</div>
      <div className="featPage__aside--item">Vwap</div>
      <div className="featPage__aside--item">Timmer</div>
    </div>
  );
};

export default SideBar;
