import React from 'react'
import data from './data.json'
import  { MapData} from './MapData'
console.log(data)


export const App = () => {
  return (
    <>
    <h1 className="header">New Releases and Singles</h1>
    <div className="container">
      {data.albums.items.map(MapData)}
    </div>
    </>
  )
}
