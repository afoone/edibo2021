import React from 'react'
import './ImageBox.css'

const ImageBox = (props) => {

    const {image, flipImage} = props;
    // const image = props.image;

    // const flipImage = () => {
    //     console.log("flip image", image )
    // }


    return (
        <div onClick={()=>flipImage(image)} className="image-box">
           {image.mostrada && <img src={image.image}></img>}
        </div>
    )
}

export default ImageBox
