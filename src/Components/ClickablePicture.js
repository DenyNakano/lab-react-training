import React, { useState } from 'react'

export const ClickablePicture = ({ imgGlasses, imgNoGlasses }) => {
    const [picture, setPicture] = useState(imgNoGlasses)
    
    
    const changePicture = () => {
        if(picture === imgNoGlasses) {
            setPicture(imgGlasses)
        } else {
            setPicture(imgNoGlasses)
        }
    }
    return (
        <button onClick={changePicture}>
            <img style={{height: 300}} src={picture} alt='user'/>
        </button>
    )
}
