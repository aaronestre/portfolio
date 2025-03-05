import "../../styles/SWESkills.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SkillContainer from "../SkillContainer";

function SWESkills() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center w-4/5 mx-auto my-40" id="swe-overview">
            <h1 className="text-6xl text-(--swe-color) mb-4">Software Engineering</h1>
            <h4 className="text-xl">
                Building scalable, efficient, and user-friendly applications
            </h4>
            <div className="flex justify-center items-center flex-wrap gap-8 m-14 w-1/2 mb-28">
                <SkillContainer src="/images/react.png" alt="React" text="React" />
                <SkillContainer src="/images/java.png" alt="Java" text="Java" />
                <SkillContainer src="/images/csharp.png" alt="C#" text="C#" />
            </div>
            <h2 className="text-2xl">Featured Project</h2>
            <div className="flex justify-center items-center flex-wrap gap-15 h-[400px] w-7/10 m-14 mt-5 p-5 shadow-2xl rounded-2xl">
                <img
                    className="h-[300px] w-[500px] rounded-xl"
                    src="/images/tagalong.png"
                    alt="Tagalong website"
                />
                <div className="w-3/10 flex flex-col justify-center items-center gap-6 leading-normal">
                    <h1 className="text-2xl mb-[-15px]">Tagalong</h1>
                    <p className="text-(--secondary-font-color) font-(family-name:--secondary-font)">
                        Web application that helps users learn Tagalog through
                        AI-powered tutoring and vocabulary flashcards.
                    </p>
                    <div className="flex justify-center items-center gap-5 mt-0">
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
            <div className="flex justify-center items-center gap-8">
                <h3>Want to learn more?</h3>
                <Button
                    style={{ border: "2px solid #FF7043" }}
                    text={"View my other projects"}
                    className="swe text-(--swe-color)"
                    onClick={() => navigate("/swe")}
                />
            </div>
        </div>
    );
}

export default SWESkills;
