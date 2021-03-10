import React from "react";
import "./Playlist.css";

export const Playlist = (props) => {
  return (
    <>
      <dd>
        <a className="list-link" href={props.url}>
           {props.list}
        </a>
      </dd>
    </>
  );
};
