import React from 'react'
import './Random.css'

export const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
  return (
    <div className='random'>
        <p>Random value between {min} and {max} = {randomNumber} </p>
    </div>
  )
}
