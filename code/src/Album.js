import {Menu} from './Menu'
import React from 'react'

export const Album = (props) => {

    return <div className="gallery-item">
                <div className = "album-container"> 
                    <Menu />
                    <div className = "album-cover">
                        <img src = {props.img} alt = "album cover" />
                    </div>   
                </div> 
                <div className="text-container">
                    <h4 className="title">{props.title}</h4>
                    <h3 className="artist">{props.name}</h3>
                </div>
            </div>
           
}


