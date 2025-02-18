import {React, useState, useEffect} from "react";
import "../styles/LandingPage.css"
import Button from "../components/Button";

export default function LandingPage() {

    return (
        <>
            <div className="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">Hello my name's <span className="name">Aaron</span>. I am an...</h1>
                    <Button className="button" text="Aspiring Software Developer"/>
                    <Button className="button" text="Amateur Art Creative"/>
                </div>
            </div>
        </>
    )

}