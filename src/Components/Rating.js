import React from 'react'

export const Rating = ({ children }) => {
    let roundNumber = Math.round(children);
    let rating;

    switch (roundNumber) {
        case 1:
            rating = '★☆☆☆☆'
            break;
        case 2:
            rating = '★★☆☆☆'
            break;
        case 3:
            rating = '★★★☆☆'
            break;
        case 4:
            rating = '★★★★☆'
            break;
        case 5:
            rating = '★★★★★'
            break;
        default:
            rating = '☆☆☆☆☆'
            break;

    }
    return (
        <div style={{margin: '10px', display:'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '30px'}}>
            <p>{rating}</p>
        </div>
    )
}
