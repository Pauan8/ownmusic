import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <span className="menu-heart"></span>
      <button className="menu-play-container">
        <div className="play-container__arrow"></div>
      </button>
      <div className="menu-hamburger"></div>
    </div>
  );
};
