import React from "react";
import {Link} from "react-router-dom"

const Header = function(props) {
  return (
    <div className="logo">
      <h1>FreeSpend.</h1>
      <Link to = "/">
      <img className = "home-icon" src = "./img/home.png"></img></Link>
    </div>
  );
};

export default Header;
