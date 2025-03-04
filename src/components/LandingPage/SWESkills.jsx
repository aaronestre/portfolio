import "../../styles/SWESkills.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function SWESkills() {
    const navigate = useNavigate();

    return (
        <div className="swe-overview" id="swe-overview">
            <h1 className="swe-overview-title">Software Engineering</h1>
            <h4 className="swe-overview-subtitle">
                Building scalable, efficient, and user-friendly applications
            </h4>
            <div className="swe-skills-container">
                <div className="swe-skills-content">
                    <img
                        className="skill-image"
                        src="/images/react.png"
                        alt="React"
                    />
                    <h2>React</h2>
                </div>
                <div className="swe-skills-content">
                    <img
                        className="skill-image"
                        src="/images/java.png"
                        alt="Java"
                    />
                    <h2>Java</h2>
                </div>
                <div className="swe-skills-content">
                    <img
                        className="skill-image"
                        src="/images/csharp.png"
                        alt="C#"
                    />
                    <h2>C#</h2>
                </div>
            </div>
            <div className="swe-project-container">
                <img
                    className="swe-project-image"
                    src="/images/tagalong.png"
                    alt="Tagalong website"
                />
                <div className="swe-project-info">
                    <h1 className="swe">Tagalong</h1>
                    <p>
                        Web application that helps users learn Tagalog through
                        AI-powered tutoring and vocabulary flashcards.
                    </p>
                    <div className="swe-project-cta">
                        <a
                            href="https://tagalong-ten.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                style={{ border: "2px solid #F9A825" }}
                                className="project"
                                text={"Live Demo"}
                            />
                        </a>
                        <a
                            href="https://github.com/aaronestre/tagalong"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                style={{ border: "2px solid #F9A825" }}
                                className="project"
                                text={"GitHub"}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="cta-container">
                <Button
                    style={{ border: "2px solid #FF7043" }}
                    text={"View my other projects"}
                    className="swe"
                    onClick={() => navigate("/swe")}
                />
            </div>
        </div>
    );
}

export default SWESkills;
