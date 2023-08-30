import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="row align-items-center">
        <div className="logo">logo</div>
        <ul className="nav nav-wrapper">
          <a className="nav-link" href="">Find Jobs</a>
          <a className="nav-link" href="">Company Reviews</a>
        </ul>
        <a href="" className="nav-account">account</a>
      </div>
    </nav>
  )
}

export default Header;