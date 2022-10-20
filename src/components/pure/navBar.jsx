import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoW.svg";

const NavBar = () => {
  const [sideBar, setSideBar] = useState("sideBarInit");

  function turnSideBar() {
    if (sideBar == "sideBarInit") {
      setSideBar("sideBarOn");
    } else if (sideBar == "sideBarOn") {
      setSideBar("sideBarOff");
    } else if (sideBar == "sideBarOff") {
      setSideBar("sideBarOn");
    }
  }

  function turnOffSideBar() {
    setSideBar("sideBarOff");
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__img">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar__links">
          <Link to="/">OTM</Link>
          <Link to="features">Features</Link>
          <Link to="buy">Buy</Link>
          <Link to="/">Example</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>

      <div className="navbar__burguer" onClick={turnSideBar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={sideBar}>
        <div className="st1" onClick={turnOffSideBar}>
          <div className="st2"></div>
          <div className="st3"></div>
        </div>

        <div className="sideBarLinks">
          <Link to="/">OTM</Link>
          <Link to="features">Features</Link>
          <Link to="buy">Buy</Link>
          <Link to="/">Example</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
