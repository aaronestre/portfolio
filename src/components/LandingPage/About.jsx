import headshot from "../../assets/headshot.jpg";
import artHeadshot from "../../assets/artHeadshot.jpg";

function About() {
    return (
        <div className="about" id="about">
            <div className="mx-auto my-8 flex flex-col justify-center items-center text-center w-3/5 font-(family-name:--primary-font)">
                <h1 className="text-4xl md:text-6xl text-(--primary-font-color) text-center">About</h1>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 h-auto mt-8">
                    <img
                        className="rounded-xl shadow-2xl w-full max-w-[250px] sm:max-w-[300px] h-auto"
                        src={headshot}
                        alt="headshot"
                        width="300"
                        height="300"
                    />
                    <p className="w-full sm:w-3/5 text-left text-lg sm:text-xl leading-normal text-(--secondary-font-color)">
                        As a recent Computer Science graduate from the
                        University of Florida, I specialize in full-stack
                        development, user experience, and game development. My
                        technical expertise includes Java, C++, Python, and
                        JavaScript, and I have developed strong leadership and
                        collaboration skills through student organizations and
                        hands-on projects. I'm passionate about tackling new
                        challenges and contributing to innovative projects that
                        make a lasting impact.
                    </p>
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-10 sm:gap-20 h-auto mt-8">
                    <p className="w-full sm:w-3/5 text-left text-lg sm:text-xl leading-normal text-(--secondary-font-color)">
                        As an artist, I am passionate about visual storytelling,
                        whether through photography, videography, or design. My
                        creative journey has allowed me to develop a keen eye
                        for detail, composition, and the ability to capture
                        moments that resonate with emotion. I enjoy
                        experimenting with different mediums, blending
                        traditional techniques with modern technology to bring
                        my ideas to life. Through my art, I aim to tell stories
                        that inspire, connect, and engage, offering a fresh
                        perspective on the world around us.
                    </p>
                    <img
                        className="rounded-xl shadow-2xl w-full max-w-[250px] sm:max-w-[300px] h-auto"
                        src={artHeadshot}
                        alt="headshot"
                        width="300"
                        height="300"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
