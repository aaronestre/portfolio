import { useNavigate } from "react-router";
import Button from "../Button";

function Hero() {

    const navigate = useNavigate();

    return (
        <div className="top-0 left-0 h-dvh flex flex-col justify-center items-center" id="hero">
            <div className="flex flex-col justify-center items-center text-center mx-auto my-0 px-0 py-4">
                <h1 className="text-(--primary-font-color) text-6xl m-5">
                    Hello, my name's <span className="text-(--swe-color)">Aaron</span>.
                </h1>
                <h2 className="text-(--primary-font-color) text-3xl">
                    I'm a <span className="text-(--swe-color)">full stack</span> developer and{" "}
                    <span className="text-(--art-color)">art</span> creative.
                </h2>
            </div>
            <div className="m-4 flex justify-center items-center gap-4">
                <Button
                    style={{ border: "2px solid #FF7043" }}
                    className="swe text-(--swe-color)"
                    text="View My Software Engineering Portfolio"
                    onClick={() => navigate("/swe")}
                />
                <Button
                    style={{ border: "2px solid #B39DDB" }}
                    className="art text-(--art-color)"
                    text="Explore My Art Portfolio"
                    onClick={() => navigate("/art")}
                />
            </div>
        </div>
    );
}

export default Hero;
