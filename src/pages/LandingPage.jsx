import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

import Hero from "../components/LandingPage/Hero";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import SWESkills from "../components/LandingPage/SWESkills";

export default function LandingPage() {

    return (
        <>
            <Hero />
            <About />
            <SWESkills />
            <Contact />
        </>
    );
}
