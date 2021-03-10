import React from 'react'
import data from './data.json'
import  { Album } from './Album'
import  { Artists } from './Artists'
let i = 0;

export const App = () => {
  return (
    <>
      <h1 className="header">New Releases and Singles</h1>
      <div className="container">
        {data.albums.items.map(MapAlbum)}
      </div>
    </>
  )
}

const MapAlbum = (item) => {
  i++
  if (i < 9) {
  return (
    < Album 
      key = {item.name} 
      img = {item.images[0].url} 
      title = {item.name}
      name =  {item.artists.map(artist => MapArtists(artist))}
    />
  )
}}

const MapArtists = (artist) =>  {
    return (
      < Artists 
        key = {artist.name} 
        name = {artist.name} 
        url = {artist.external_urls.spotify} 
      />
    )
}
