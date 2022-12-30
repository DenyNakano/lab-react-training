import React, { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export const Dice = () => {
    const [diceFace, setDiceFace] = useState(diceEmpty)

    const changeDice = () => {
        const faces = [dice1, dice2, dice3, dice4, dice5, dice6]
        let newRandomFace = faces[Math.floor(Math.random() * faces.length)] 
        setDiceFace(diceEmpty)
        setTimeout(() => {
            setDiceFace(newRandomFace)
        }, 1000)
    }
    return (
        <button onClick={changeDice} className='dice'>
            <img style={{height: 300}} src={diceFace} alt='dice'></img>
    </button>
    )
}
