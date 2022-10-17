import React from 'react'
import './Greeting.css'

const Greetings = ({lang, children}) => {
    const greetings = () => {
        switch(lang){
            case 'de':
                return 'Hallo';
                
            case 'en':
                return 'Hello';
                
            case 'es':
                return 'Hola';
                
            case 'fr':
                return 'Bonjour';
                
            default: 
                return 'Hello';
                
        }
    }
    return (
        <div className='greetings'>
            <p>{greetings()} {children}</p>
        </div>
    )
}

export default Greetings