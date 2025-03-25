import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SkillsContainer from "./SkillsContainer";
import ArtImg from "../ArtImg";
import { artSkills } from "../../util/skillsData";

function ArtSkills() {
    const navigate = useNavigate();

    const skills = artSkills;

    return (
        <div className="flex flex-col justify-center items-center w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] mx-auto my-20 md:my-40" id="art-overview">
            <h1 className="text-4xl md:text-5xl text-(--art-color) text-center">Art Creative</h1>
            <h4 className="text-lg md:text-xl text-center text-(--primary-font-color) mt-3 mb-5">
                Creating inspiring and engaging pieces of art
            </h4>
            <hr className="border-b border-white w-full mb-5"/>
            <SkillsContainer skills={skills} />
            <h2 className="text-2xl md:text-3xl mt-12 text-(--primary-font-color)">Featured Pieces</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-10 w-full max-w-7xl mt-5 bg-(--background-semi-dark) shadow-2xl rounded-2xl">
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
                <h3 className="text-lg md:text-xl text-center text-(--primary-font-color)">Want to see more?</h3>
                <Button
                    style={{ border: "2px solid #B39DDB" }}
                    text={"Explore my Art Portfolio"}
                    type="art"
                    className="text-(--art-color)"
                    onClick={() => navigate("/art")}
                />
            </div>
        </div>
    );
}

export default ArtSkills;
