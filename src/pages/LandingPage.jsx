import { React } from "react";

import Hero from "../components/LandingPage/Hero";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import SWESkills from "../components/LandingPage/SWESkills";
import ArtSkills from "../components/LandingPage/ArtSkills";

export default function LandingPage() {

    return (
        <>
            <Hero />
            <About />
            <SWESkills />
            <ArtSkills />
            <Contact />
        </>
    );
}
