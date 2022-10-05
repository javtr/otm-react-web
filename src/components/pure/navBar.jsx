import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoW.svg";

const NavBar = () => {
  const [sideBar, setSideBar] = useState("sideBarInit");

  function turnSideBar() {
    if (sideBar == "sideBarInit") 
    {
      setSideBar("sideBarOn");
    } 
    else if (sideBar == "sideBarOn") 
    {
      setSideBar("sideBarOff");
    } 
    else if (sideBar == "sideBarOff")
    {
      setSideBar("sideBarOn");
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__img">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar__links">
          <Link className="Link" to="/">
            OTM
          </Link>
          <Link className="Link" to="/">
            Features
          </Link>
          <Link className="Link" to="/">
            Buy
          </Link>
          <Link className="Link" to="/">
            Example
          </Link>
          <Link className="Link" to="/">
            Contact
          </Link>
        </div>

        <div className="navbar__burguer" onClick={turnSideBar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={sideBar}></div>
    </div>
  );
};

export default NavBar;
