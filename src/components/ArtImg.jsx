import { useState } from "react";
const ArtImg = ({text, ...props}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <img {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    )
}

export default ArtImg;