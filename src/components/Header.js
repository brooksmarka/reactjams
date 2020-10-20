import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header dt h3 bg-dark-purple w-100 border-box ph3 pv3 pv3-ns ph3-m ph3-l">
    <nav className="nav dt fw6 w-100">
      <Link to="/" title="Home" className="dtc v-mid mid-gray link dim w-25 tl">
        <img
          src="/assets/images/rjlogo.png"
          alt="Site Logo"
          className="dib w3 h3"
        />
      </Link>
      <div className="dtc v-mid w-75 tr">
        <Link
          to="/library"
          className="avenir link turq dim dark-gray f5 f4-ns dib mr3 mr5-ns"
        >
          Library
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
