import { useState } from "react";
import "../styles/ArtImg.css";
const ArtImg = ({text, ...props}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="art-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="art-image" {...props} />
            {isHovered && <p className="art-text">{text}</p>}
        </div>
    )
}

export default ArtImg;