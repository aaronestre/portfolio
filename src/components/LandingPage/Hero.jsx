import IconButton from "../IconButton";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileCv,
} from "@tabler/icons-react";

function Hero() {
    const github = <IconBrandGithub color="white" />;
    const linkedin = <IconBrandLinkedin color="white" />;
    const resume = <IconFileCv color="white" />;

    return (
        <div
            className="top-0 left-0 h-dvh flex flex-col justify-center items-center px-4 bg-(--background-dark)"
            id="hero"
        >
            <div className="flex flex-col justify-center items-center text-center w-full max-w-xl sm:max-w-2xl mx-auto py-4">
                <p className="text-white text-sm font-semibold mt-[-5px]">
                    Based in Virginia
                </p>
                <h1 className="text-(--primary-font-color) text-4xl sm:text-6xl font-bold leading-tight whitespace-nowrap max-w-fit">
                    Hello, my name's{" "}
                    <span className="text-(--swe-color)"> Aaron</span>.
                </h1>
                <h2 className="text-(--primary-font-color) text-2xl sm:text-3xl">
                    I'm a <span className="text-(--swe-color)">full stack</span>{" "}
                    developer and{" "}
                    <span className="text-(--art-color)">art</span> creative.
                </h2>
            </div>
            <div className="m-4 flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-4">
                <IconButton
                    icon={github}
                    link="https://github.com/aaronestre"
                />
                <IconButton
                    icon={linkedin}
                    link="https://www.linkedin.com/in/aaronestrellado/"
                />
                <IconButton
                    icon={resume}
                    link="/Aaron Estrellado 2025 Resume.pdf"
                />
            </div>
        </div>
    );
}

export default Hero;
