import React from "react";
import Button from "../components/Button";

import "../styles/SWE.css";

export default function SWE() {
    return (
        <>
            <div className="hero" id="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">
                        Hi, I'm Aaron, a <span className="swe">full stack</span> developer
                    </h1>
                    <h2 className="hero-subtitle">
                        Explore my <span className="swe">SWE</span> portfolio
                    </h2>
                </div>
                <div className="cta-container">
                    <Button
                        style={{ border: "2px solid #FF7043" }}
                        className="resume button"
                        text="Download my Resume"
                    />
                    <Button
                        style={{ border: "2px solid #F9A825" }}
                        className="github button"
                        text="Checkout my GitHub"
                    />
                </div>
            </div>
        </>
    );
}
