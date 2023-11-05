import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/sLogo.png";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
  
import logo2 from "../../assets/logo2.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar 
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
        <div className="container-fluid space-between">
          <div className="row">
            <div className="col-4">
        <img src={logo2} className="logo2" alt="" srcset="" />
            </div>
            <div className="col-4 colmainMenu">
        <div className="mainMenu">
            <ul>
              <li className="active-nav"><Link to='/'>Home</Link></li>
              <li> <Link to='/alllisting'>All Listings</Link></li>
              <li> <Link to='/AdvancedSearch'>Advance Search</Link> </li>
              <li> <Link to='/Contact'>Contact</Link> </li>  
            </ul>
        </div>
            </div>
            <div className="col-4 colmainMenu">
      <div className="flxBtnRow">
      <Link to='/Sign-Up' className="btnw1"> 
        <button className="btn1"> Sign Up</button>
        </Link>
        <Link to='/Sign-in' className="btnw1"> 
        <button className="btn2">Sign In</button>
        </Link>
      </div>
            </div>
          </div>
        </div>
    </Navbar>
  );
}

export default NavBar;
