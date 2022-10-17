import React from 'react'

export const BoxColor = ({ r, g, b }) => {
    let colorText = 'white';
    if (r + g + b > 255) {
        colorText = 'black';
    }

    const RGBtoHex = (r,g,b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.lenght === 1){
            r = "0" + r;
        }
        if (g.lenght === 1){
            g = "0" + g;
        }
        if (b.lenght === 1){
            b = "0" + b;
        }
        return `#${r}${g}${b}`
    }
    return (
        <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: colorText, 
        margin: 10, textAlign: 'center', width:700, height: 200, fontSize: '2em'}}>
            <p>rgb(${r}, ${g}, ${b})</p>
            {RGBtoHex(r,g,b)}
        </div>
    )
}
