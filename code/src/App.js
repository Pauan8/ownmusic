import React from "react";
import data from "./data.json";
import playlist from "./playlist.json";
import { Album } from "./components/Album";
import { Playlist } from "./components/Playlist";

export const App = () => {
  const filterMusic = (type) => {
    return data.albums.items
      .filter((album) => album.album_type === type)
      .map((album) => (
        <Album
          key={album.name}
          img={album.images[0].url}
          title={album.name}
          name={album.artists}
        />
      ));
  };

  return (
    <>
      <main className="main">
        <div className="sidebar">
          <div className="sidebar-header">
            <dt>Playlists</dt>
          </div>
          {playlist.playlists.items.map((lists) => (
            <Playlist
              key={lists.name}
              list={lists.name}
              url={lists.external_urls.spotify}
            />
          ))}
        </div>
        <h1 className="header">New Albums &amp; Singles</h1>
        <h2 className="single-header">Singles</h2>
        <div className="container1">
          {filterMusic("single")}
        </div>
        <h2 className="album-header">Albums</h2>
        <div className="container2">
          {filterMusic("album")}
        </div>
      </main>
    </>
  );
};
