import React from 'react'
import './IdCard.css'


const idCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className='idCard'>
            <div className='idCardImg'>
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height/100} m</p>
                <p><strong>Birth: </strong>{birth.toDateString()}</p>

            </div>
        </div>
    )
}


export default idCard