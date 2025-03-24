import { React, useState } from "react";

import Hero from "../components/LandingPage/Hero";
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
            {selectedSection === "SWE" ? <SWESkills /> : <ArtSkills />}
        </>
    );
}
