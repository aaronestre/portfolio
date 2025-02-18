import {React, useState, useEffect} from "react";
import "../styles/LandingPage.css"
import Button from "../components/Button";

export default function LandingPage() {

    const handleMouseEnter = (e) => {

    }

    const handleMouseLeave = (e) => {

    }

    return (
        <>
            <div className="hero" id="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">Hello my name's <span className="swe">Aaron</span></h1>
                    <h2 className="hero-subtitle">I'm a  <span className="swe">full stack</span> developer and  <span className="art">art</span> creative</h2>
                </div>
                <div className="cta-container">
                    <Button style={{border: "2px solid #FF7043"}} className="swe" text="View My Software Engineering Portfolio" />
                    <Button style={{border: "2px solid #B39DDB"}} className="art" text="Explore My Art Portfolio" />
                </div>
            </div>
        </>
    )

}