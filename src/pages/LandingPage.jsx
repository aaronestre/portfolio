import { React, useState } from "react";

import Hero from "../components/LandingPage/Hero";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import SWESkills from "../components/LandingPage/SWESkills";
import ArtSkills from "../components/LandingPage/ArtSkills";
import ButtonGroup from "../components/ButtonGroup";


export default function LandingPage() {

    const buttons = [{text: "SWE"} , {text: "Art"}];
    const [selectedSection, setSelectedSection] = useState("SWE");

    const handleChangeSelection = (selection) => {
        setSelectedSection(selection);
    };


    return (
        <>
            <Hero />
            <ButtonGroup buttons={buttons} handleChangeSelection={handleChangeSelection} selectedSection={selectedSection}/>
            <About selectedSection={selectedSection}/>
            {selectedSection === "SWE" ? <SWESkills /> : <ArtSkills />}
            <Contact />
        </>
    );
}
