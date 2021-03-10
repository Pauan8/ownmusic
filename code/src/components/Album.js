import { Menu } from "./Menu";
import React from "react";
import "./Album.css";

export const Album = (props) => {
  return (
    <div className="gallery-item">
      <div className="album-container">
        <Menu />
        <div className="album-cover">
          <img src={props.img} alt="album cover" />
        </div>
      </div>
      <div className="text-container">
        <h4 className="title">{props.title}</h4>
        <div className="artist-container">{props.name}</div>
      </div>
    </div>
  );
};
