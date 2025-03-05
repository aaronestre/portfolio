import { useState } from "react";
import "../styles/ArtImg.css";
const ArtImg = ({text, ...props}) => {

    return (
        <div className="art-container relative">
            <img className="art-image block h-80 w-120 rounded-lg" {...props} />
            <p className="art-text absolute -translate-x-2/4 -translate-y-2/4 text-[white] text-xl text-center left-2/4 top-2/4">{text}</p>
        </div>
    )
}

export default ArtImg;