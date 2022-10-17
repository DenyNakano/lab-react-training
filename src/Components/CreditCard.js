import React from 'react'
import visa from "../images/Visa.png"
import masterCard from "../images/mastercard.png"
import './CreditCard.css'

export const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let cardCompany = visa;
    
    if(type === 'Master Card'){
        cardCompany = masterCard;
    }
    if(expirationMonth < 10){
        expirationMonth = '0' + expirationMonth
    }
   
    return (
        <div className='cardStyle' style={{backgroundColor: bgColor, color:color}}>
            <div>
                <img src={cardCompany} alt="card company"/>
            </div>
            <div>
                **** **** **** {number.slice(-4)}
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}
