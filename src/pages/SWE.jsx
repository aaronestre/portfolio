import React from "react";
import { sweProjects } from "../util/projectsData";
import ProjectsContainer from "../components/ProjectsContainer";


export default function SWE() {
    return (
        <div className="bg-(--background-dark) w-dvw mb-20">
            <div className="absolute h-3/5 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_42px]  [mask-image:radial-gradient(ellipse_80%_50%_at_60%_0%,#000_70%,transparent_100%)]"></div>
            <div className="z-1 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] flex flex-col justify-center items-center mx-auto mt-20">
                <h1 className="text-(--swe-color) text-6xl font-bold mb-5 z-1">Projects</h1>
                <p className="text-white text-xl font-bold mb-5 z-1">Explore my projects that showcase my skills</p>
                <hr className="border-b border-white w-full mb-10" />
            </div>
            <div className="z-1 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] flex flex-col justify-center items-center mx-auto mt-30">
                <ProjectsContainer projects={sweProjects} />
            </div>
            
        </div>
    );
}
