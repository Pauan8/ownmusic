import React from "react";
import "./Artists.css";

export const Artists = (props) => {
  return (
    <a className="artist" key= {props.name}
          href={props.url}>
            {props.name}
      </a>
  )
};
