import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import small from "../../assets/header-logo-small.png";
import big from "../../assets/header-logo.png";
import "./NavBarStyles.scss";
import { navBarContent } from "./navBarContent";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) setColor(true);
    else setColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className="header-container">
      <div
        className={color ? "header container header-bg" : "header container "}
      >
        <Link to="/testovoe_Elon">
          <picture>
            <source srcSet={small} media="(max-width: 1240px)" />
            <img src={big} alt="" />
          </picture>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navBarContent.map((e, index) => (
            <li className="nav-menu__item" key={index}>
              <Link to={e.path}>{e.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
