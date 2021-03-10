import React from 'react'
import  { Album } from './Album'
let i = 0;


export const MapData = (item) => {
  let nm = item.artists.map(item => item.name)
  nm = nm.join(", ")
  nm[nm.lastIndexOf(", ")] = "&"
  nm= nm.join("")
    i++
    if (i < 9) {
    return <Album key = {item.images[1].url} 
    img = {item.images[0].url} 
    name = {nm} 
    title = {item.name}/>
  }}