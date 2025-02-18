import {React, useState, useEffect} from "react";
import "../styles/LandingPage.css"
import Button from "../components/Button";

export default function LandingPage() {

    return (
        <>
            <div className="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">Hello my name's <span className="highlight">Aaron</span></h1>
                    <h2 className="hero-subtitle">I'm a  <span className="highlight">full stack</span> stack developer and  <span className="highlight">art</span> creative</h2>
                </div>
            </div>
        </>
    )

}