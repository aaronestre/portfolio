import headshot from "/images/headshot.jpg";
import artHeadshot from "/images/artHeadshot.jpg";

function About() {
	return (
		<div
			className="about"
			id="about"
		>
            <div className="absolute h-3/5 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_42px]  [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_70%,transparent_100%)]"></div>
			<div className="mx-auto my-8 flex flex-col justify-center items-center text-center w-3/5 h-dvh font-(family-name:--primary-font) z-10">
				<h1 className="text-4xl md:text-6xl text-(--primary-font-color) text-center z-10">
					About
				</h1>

				<div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 h-auto mt-8 z-10">
					<img
						className="rounded-xl shadow-2xl w-full max-w-[250px] sm:max-w-[300px] h-auto"
						src={headshot}
						alt="headshot"
						width="300"
						height="300"
					/>
					<p className="w-full sm:w-3/5 text-left text-lg sm:text-xl leading-normal text-(--secondary-font-color)">
						As a recent Computer Science graduate from the University of Florida, I
						specialize in full-stack development, user experience, and game development.
						My technical expertise includes Java, C++, Python, and JavaScript, and I
						have developed strong leadership and collaboration skills through student
						organizations and hands-on projects. I'm passionate about tackling new
						challenges and contributing to innovative projects that make a lasting
						impact.
					</p>
				</div>

				<div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-10 sm:gap-20 h-auto mt-8">
					<p className="w-full sm:w-3/5 text-left text-lg sm:text-xl leading-normal text-(--secondary-font-color)">
						As an artist, I am passionate about visual storytelling, whether through
						photography, videography, or design. My creative journey has allowed me to
						develop a keen eye for detail, composition, and the ability to capture
						moments that resonate with emotion. I enjoy experimenting with different
						mediums, blending traditional techniques with modern technology to bring my
						ideas to life. Through my art, I aim to tell stories that inspire, connect,
						and engage, offering a fresh perspective on the world around us.
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
