import { React, useState, useEffect } from "react";
import "../styles/LandingPage.css";

import Button from "../components/Button";
import headshot from "../assets/headshot.jpg";
import artHeadshot from "../assets/artHeadshot.jpg";

export default function LandingPage() {
    return (
        <>
            <div className="hero" id="hero">
                <div className={`hero-container`}>
                    <h1 className="hero-title">
                        Hello my name's <span className="swe">Aaron</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        I'm a <span className="swe">full stack</span> developer
                        and <span className="art">art</span> creative
                    </h2>
                </div>
                <div className="cta-container">
                    <Button
                        style={{ border: "2px solid #FF7043" }}
                        className="swe"
                        text="View My Software Engineering Portfolio"
                    />
                    <Button
                        style={{ border: "2px solid #B39DDB" }}
                        className="art"
                        text="Explore My Art Portfolio"
                    />
                </div>
            </div>

            <div className="about" id="about">
                <div className="about-container">
                    <h1 className="about-title">About</h1>
                    <div className="about-content">
                        <img
                            className="headshot"
                            src={headshot}
                            alt="headshot"
                            width="300"
                            height="300"
                        />
                        <p className="about-text">
                            As a recent Computer Science graduate from the
                            University of Florida, I specialize in full-stack
                            development, user experience, and game development.
                            My technical expertise includes Java, C++, Python,
                            and JavaScript, and I have developed strong
                            leadership and collaboration skills through student
                            organizations and hands-on projects. I'm passionate
                            about tackling new challenges and contributing to
                            innovative projects that make a lasting impact.
                        </p>
                    </div>
                    <div className="about-content">
                        <p className="about-text">
                            As an artist, I am passionate about visual
                            storytelling, whether through photography,
                            videography, or design. My creative journey has
                            allowed me to develop a keen eye for detail,
                            composition, and the ability to capture moments that
                            resonate with emotion. I enjoy experimenting with
                            different mediums, blending traditional techniques
                            with modern technology to bring my ideas to life. 
                            Through my art, I aim to tell stories that inspire,
                            connect, and engage, offering a fresh perspective on
                            the world around us.
                        </p>
                        <img
                            className="headshot"
                            src={artHeadshot}
                            alt="headshot"
                            width="300"
                            height="300"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
