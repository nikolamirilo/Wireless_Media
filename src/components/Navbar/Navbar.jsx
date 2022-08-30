import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import burger from "../../assets/svg/burger.svg";
import searchImage from "../../assets/svg/search.svg";
import home from "../../assets/svg/home.svg";
import about from "../../assets/svg/about.svg";
import ourWork from "../../assets/svg/our-work.svg";
import email from "../../assets/svg/email.svg";
import { useGlobalState } from "./../../GlobalState";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { width } = useGlobalState();
  console.log(width);
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          {/* <img src={logo} alt="Logo" /> */} <h2>Logo</h2>
        </div>

        <div
          className="navbar-links"
          style={{ display: (width < 320) & !isNavbarOpen ? "none" : (width < 320) & isNavbarOpen ? "flex" : null }}
        >
          <Link to="/">{width > 768 || width < 320 ? "Home /" : <img src={home} alt="Home" />}</Link>
          <Link to="/about-us">{width > 768 || width < 320 ? "About Us /" : <img src={about} alt="About" />}</Link>
          <Link to="/our-work">{width > 768 || width < 320 ? "Our Work /" : <img src={ourWork} alt="Our Work" />}</Link>
          <Link to="/contact">{width > 768 || width < 320 ? "Email /" : <img src={email} alt="Email" />}</Link>
        </div>
        <div className="right-content">
          <button className="burger-button">
            <img src={burger} alt="Burger" />
          </button>
          {width < 320 && (
            <button
              className="search-button"
              onClick={() => {
                setIsNavbarOpen(true);
              }}
            >
              <img src={searchImage} alt="Search" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
