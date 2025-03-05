import headshot from "../../assets/headshot.jpg";
import artHeadshot from "../../assets/artHeadshot.jpg";

function About() {
    return (
        <div className="about" id="about">
            <div className="mx-auto my-8 flex flex-col justify-center items-center text-center w-4/5 font-(family-name:--primary-font)">
                <h1 className="text-6xl">About</h1>
                <div className="flex justify-center items-center gap-20 h-80 m-14 mt-8">
                    <img
                        className="rounded-xl shadow-2xl"
                        src={headshot}
                        alt="headshot"
                        width="300"
                        height="300"
                    />
                    <p className="font-(family-name:--secondary-font) w-2/5 text-left text-xl leading-normal text-(--secondary-font-color) min-w-md">
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
                <div className="flex justify-center items-center gap-20 h-80 m-14 mt-8">
                    <p className="font-(family-name:--secondary-font) w-2/5 text-left text-xl leading-normal text-(--secondary-font-color) min-w-md">
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
                        className="rounded-xl shadow-2xl"
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
