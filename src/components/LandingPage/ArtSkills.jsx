import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SkillContainer from "../SkillContainer";
import ArtImg from "../ArtImg";

function ArtSkills() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center w-4/5 mx-auto my-40" id="art-overview">
            <h1 className="text-6xl text-(--art-color)">Art Creative</h1>
            <h4 className="text-xl">
                Creating inspiring and engaging pieces of art
            </h4>
            <div className="flex justify-center items-center flex-wrap gap-8 m-14 w-[55%] mb-28">
                <SkillContainer src="/images/photoshop.png" alt="Photoshop" text="Photoshop" />
                <SkillContainer src="/images/premiere.png" alt="Premiere Pro" text="Premiere Pro" />
                <SkillContainer src="/images/ae.png" alt="After Effects" text="After Effects" />
                <SkillContainer src="/images/lightroom.png" alt="Lightroom" text="Lightroom" />
            </div>
            <h2 className="text-2xl">Featured Pieces</h2>
            <div className="flex justify-evenly items-center flex-wrap h-[750px] w-7.5/10 m-14 mt-5 p-5 shadow-2xl rounded-2xl">
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
            <div className="flex justify-center items-center gap-8">
                <h3>Want to see more?</h3>
                <Button
                    style={{ border: "2px solid #B39DDB" }}
                    text={"Explore my Art Portfolio"}
                    className="art text-(--art-color)"
                    onClick={() => navigate("/art")}
                />
            </div>
        </div>
    );
}

export default ArtSkills;
