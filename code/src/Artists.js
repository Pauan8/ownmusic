import React from 'react'
import './Artists.css'

export const Artists = (props) => {
    return (
        <a href={props.url} className="artist">
            {props.name}
        </a>
    )
}
    