import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGlobalState } from "./../../GlobalState";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { width } = useGlobalState();
  console.log(width);

  useEffect(() => {
    if (width <= 320) {
      setIsNavbarOpen(false);
    } else {
      setIsNavbarOpen(true);
    }
  }, [width]);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo"></div>

        <div
          className={width > 320 ? "navbar-links" : "navbar-links-mobile"}
          style={{
            display: !isNavbarOpen ? "none" : "flex",
          }}
        >
          <Link to="/">
            {(width > 320) & (width < 768) ? <div className="home"></div> : "Home"}
            {"   "}
            {width > 768 && "/"}
          </Link>
          <Link to="/about-us">
            {(width > 320) & (width < 768) ? <div className="about"></div> : "About Us"}
            {"   "}
            {width > 768 && "/"}
          </Link>
          <Link to="/our-work">
            {(width > 320) & (width < 768) ? <div className="our-work"></div> : "Our Work"}
            {"   "}
            {width > 768 && "/"}
          </Link>
          <Link to="/contact">
            {(width > 320) & (width < 768) ? <div className="email"></div> : "Email"}
            {"   "}
            {width > 768 && "/"}
          </Link>
        </div>

        <div className="right-content">
          {width <= 320 && (
            <button
              className="burger-button"
              onClick={() => {
                if (isNavbarOpen) {
                  setIsNavbarOpen(false);
                } else {
                  setIsNavbarOpen(true);
                }
              }}
            >
              <div className="burger"></div>
            </button>
          )}
          <button
            className={"search-button"}
            onClick={() => {
              if (isSearchOpen) {
                setIsSearchOpen(false);
              } else {
                setIsSearchOpen(true);
              }
            }}
          >
            <div className="search"></div>
          </button>
        </div>
        {isSearchOpen && (
          <div className="search-dropdown" style={{ display: width > 480 && "none" }}>
            <input type="search" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
