import React from "react";
import Button from "../components/Button";

import "../styles/Art.css";

export default function Art() {
    return (
        <>
            <div className="hero" id="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">
                        Hi, I'm Aaron, an <span className="art">art</span> creative
                    </h1>
                    <h2 className="hero-subtitle">
                        Explore my <span className="art">art</span> portfolio
                    </h2>
                </div>
            </div>
        </>
    );
}
