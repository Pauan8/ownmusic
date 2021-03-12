import { Menu } from "./Menu";
import React from "react";
import "./Album.css";
import { Artists } from "./Artists";

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
        <div className="artist-container">
          {props.name.map((artist) => (
            <Artists
              key={artist.name}
              name={artist.name}
              url={artist.external_urls.spotify}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
