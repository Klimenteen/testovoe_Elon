import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBarStyles.scss";
import small from "../../assets/header-logo-small.png";
import big from "../../assets/header-logo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="header-container">
      <div
        className={color ? "header container header-bg" : "header container "}
      >
        <Link to="/">
          <picture>
            <source srcSet={small} media="(max-width: 1240px)" />
            <img src={big} alt="" />
          </picture>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu__item">
            <Link to="/">Главная</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/technologies">Технология</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/schedule">График полетов</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/guarantee">Гарантии</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/about">О компании</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/contact">Контакты</Link>
          </li>
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
