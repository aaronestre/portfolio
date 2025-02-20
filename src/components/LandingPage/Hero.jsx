import { useNavigate } from "react-router";
import Button from "../Button";

function Hero() {

    const navigate = useNavigate();

    return (
        <div className="hero" id="hero">
            <div className={`hero-container`}>
                <h1 className="hero-title">
                    Hello, my name's <span className="swe">Aaron</span>.
                </h1>
                <h2 className="hero-subtitle">
                    I'm a <span className="swe">full stack</span> developer and{" "}
                    <span className="art">art</span> creative.
                </h2>
            </div>
            <div className="cta-container">
                <Button
                    style={{ border: "2px solid #FF7043" }}
                    className="swe"
                    text="View My Software Engineering Portfolio"
                    onClick={() => navigate("/swe")}
                />
                <Button
                    style={{ border: "2px solid #B39DDB" }}
                    className="art"
                    text="Explore My Art Portfolio"
                    onClick={() => navigate("/art")}
                />
            </div>
        </div>
    );
}

export default Hero;
