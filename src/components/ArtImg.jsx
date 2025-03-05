import { useState } from "react";
import "../styles/ArtImg.css";
const ArtImg = ({text, ...props}) => {

    return (
        <div className="art-container">
            <img className="art-image" {...props} />
            <p className="art-text">{text}</p>
        </div>
    )
}

export default ArtImg;