import React, { useState } from 'react'

export const Carousel = ({ images }) => {
    const [image, setImage] = useState(images[0])
    const imagesArr = images

    const changeLeft = () => {
        setImage(imagesArr[
            imagesArr.indexOf(image) - 1 >= 0 ?
                imagesArr.indexOf(image) - 1 :
                imagesArr.lenght - 1

        ])
    }

    const changeRight = () => {
        setImage(imagesArr[
            imagesArr.indexOf(image) + 1 < imagesArr.length ?
                imagesArr.indexOf(image) + 1 :
                0
        ])
    }

    return (
        <div>
            <button onClick={changeLeft}>Left</button>
            <img src={image} alt='users' />
            <button onClick={changeRight}>Right</button>
        </div>
    )
}
