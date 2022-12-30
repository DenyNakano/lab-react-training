import React, { useState } from 'react'

export const LikeButton = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('purple')

    const increaseLikes = () => {
        setCount(count + 1)
    }

    const changeColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        let newRandomColor= colors[Math.floor(Math.random() * colors.length)]
        setColor(newRandomColor)
        
    }

    const clickAction = () => {
        increaseLikes()
        changeColor()
    }
  return (
    <button onClick={clickAction} style={{backgroundColor: color}}>
        {count} Likes</button>
  )
}
