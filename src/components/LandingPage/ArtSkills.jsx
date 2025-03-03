import "../../styles/ArtSkills.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import ArtImg from "../ArtImg";

function ArtSkills() {
    const navigate = useNavigate();

    return (
        <div className="art-overview" id="art-overview">
            <h1 className="art-overview-title">Art Creative</h1>
            <h4 className="art-overview-subtitle">
                Creating inspiring and engaging pieces of art
            </h4>
            <div className="art-skills-container">
                <div className="art-skills-content">
                    <img
                        className="art-skill-image"
                        src="/images/photoshop.png"
                        alt="Photoshop"
                    />
                    <h2>Photoshop</h2>
                </div>
                <div className="art-skills-content">
                    <img
                        className="art-skill-image"
                        src="/images/premiere.png"
                        alt="Premiere Pro"
                    />
                    <h2>Premiere Pro</h2>
                </div>
                <div className="art-skills-content">
                    <img
                        className="art-skill-image"
                        src="/images/ae.png"
                        alt="After Effects"
                    />
                    <h2>After Effects</h2>
                </div>
                <div className="art-skills-content">
                    <img
                        className="art-skill-image"
                        src="/images/lightroom.png"
                        alt="Lightroom"
                    />
                    <h2>Lightroom</h2>
                </div>
            </div>
            <h2>Featured Pieces</h2>
            <div className="art-project-container">
                <ArtImg
                    src="/images/photo/ny_skyline.jpg"
                    alt="New York Skyline"
                    text="New York City, NY"
                />
                <ArtImg
                    src="/images/photo/bird.jpg"
                    alt="Bird"
                    text="Gainesville, FL"
                />
                <ArtImg
                    src="/images/photo/golf_winter.jpg"
                    alt="Golf Course during Winter"
                    text="Gainesville, VA"
                />
                <ArtImg
                    src="/images/photo/sunflower.png"
                    alt="Sunflower"
                    text="Gainesville, FL"
                />
            </div>
            <div className="cta-container">
                <h3>Want to see more?</h3>
                <Button
                    style={{ border: "2px solid #B39DDB" }}
                    text={"Explore my Art Portfolio"}
                    className="art"
                    onClick={() => navigate("/art")}
                />
            </div>
        </div>
    );
}

export default ArtSkills;
