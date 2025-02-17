import {React, useState, useEffect} from "react";
import "../styles/LandingPage.css"
import Button from "../components/Button";

export default function LandingPage() {

    const [background, setBackground] = useState("Photographer");
    const handleMouseEnter = (bg) => {
        setBackground(bg);
    }

    const handleMouseLeave = () => {
        setBackground("no-background");
    }

    useEffect(() => {
        console.log("Background changed to:", background);
    }, [background])

    return (
        <>
            <div className={`hero ${background}`}>
                <div className={`hero-container`}>
                    <h1 className="hero-title">Hello I am <span className="name">Aaron</span>. I am an...</h1>
                    <Button text="Aspiring Software Developer" onMouseEnter={() => handleMouseEnter("developer")} onMouseLeave={handleMouseLeave}/>
                    <Button text="Amateur Art Creative" onMouseEnter={() => handleMouseEnter("photographer")} onMouseLeave={handleMouseLeave}/>
                </div>
            </div>
        </>
    )

}