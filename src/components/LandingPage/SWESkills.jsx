import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SkillsContainer from "./SkillsContainer";

function SWESkills() {
    const navigate = useNavigate();
    const skills = [
        { src: "/images/skills/react.png", alt: "React", text: "React" },
        { src: "/images/skills/java.png", alt: "Java", text: "Java" },
        { src: "/images/skills/csharp.png", alt: "C#", text: "C#" },
    ]
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
                
                <h2 className="text-3xl md:text-4xl mt-50 mb-6 text-(--primary-font-color) text-left">Featured Project</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-6 lg:gap-10 h-auto w-2/5 md:w-2/5 mx-auto my-0 p-10 shadow-xl rounded-2xl bg-(--background-semi-dark)">
                <img
                    className="h-auto w-full sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-xl"
                    src="/images/tagalong.png"
                    alt="Tagalong website"
                />
                <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center gap-6 text-center lg:text-left leading-normal">
                    <h1 className="text-xl sm:text-2xl mb-[-10px] text-(--primary-font-color)">Tagalong</h1>
                    <p className="text-(--secondary-font-color) font-(family-name:--secondary-font)">
                        Web application that helps users learn Tagalog through
                        AI-powered tutoring and vocabulary flashcards.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-0">
                        <a
                            href="https://tagalong-ten.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                style={{ border: "2px solid #FF7043" }}
                                className="swe text-(--swe-color)"
                                text={"Live Demo"}
                            />
                        </a>
                        <a
                            href="https://github.com/aaronestre/tagalong"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                style={{ border: "2px solid #FF7043" }}
                                className="swe text-(--swe-color)"
                                text={"GitHub"}
                            />
                        </a>
                    </div>
                </div>
            </div>
            
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