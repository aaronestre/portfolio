import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SkillsContainer from "./SkillsContainer";
import { sweSkills } from "../../util/skillsData";
import ProjectsContainer from "../ProjectsContainer";
import { sweProjects } from "../../util/projectsData";

function SWESkills() {
    const navigate = useNavigate();
    const skills = sweSkills;

    const projects = sweProjects;

    return (
        <div className="flex flex-col justify-center items-center w-11/12 mx-auto my-20 md:my-40" id="swe-overview">
            <h1 className="text-4xl md:text-6xl text-(--swe-color) text-center">Software Engineering</h1>
            <h4 className="text-lg md:text-xl text-center text-(--primary-font-color)">
                Building scalable, efficient, and user-friendly applications
            </h4>
            
            <div className="w-full md:w-2/5 flex flex-col">
                <div className="flex w-full">
                    <SkillsContainer skills={skills} />
                </div>
                
                <h2 className="text-3xl md:text-4xl mt-30 mb-6 text-(--primary-font-color) text-left">Featured Projects</h2>
            </div>
            
            <ProjectsContainer projects={projects} />
            
            <div className="w-full md:w-3/5">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                    <h3 className="text-lg sm:text-xl text-center sm:text-left text-(--primary-font-color)">Want to learn more?</h3>
                    <Button
                        style={{ border: "2px solid #FF7043" }}
                        text={"View my other projects"}
                        className="swe text-(--swe-color)"
                        onClick={() => navigate("/swe")}
                    />
                </div>
            </div>
        </div>
    );
}

export default SWESkills;