import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoW.svg";

const NavBar = () => {
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
      </div>
    </div>
  );
};

export default NavBar;
