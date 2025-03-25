import React from "react";
import { photos, graphics, videos } from "../util/artData";
import ArtImg from "../components/ArtImg";
import YouTubeThumbnail from "../components/YouTubeLink";
import { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";

export default function Art() {
	const [selectedSection, setSelectedSection] = useState("Photos");
	const handleChangeSelection = (section) => {
		setSelectedSection(section);
	};
	const buttons = [{ text: "Photos" }, { text: "Videos" }, { text: "Graphics" }];

	return (
		<div className=" bg-(--background-dark) mb-20">
			<div className="absolute h-3/5 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_42px]  [mask-image:radial-gradient(ellipse_80%_40%_at_60%_0%,#000_70%,transparent_100%)]"></div>
			<div className="z-1 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] flex flex-col justify-center items-center mx-auto mt-20">
				<h1 className="text-(--art-color) text-6xl font-bold mb-1 z-1">Portfolio</h1>
				<p className="text-white text-xl font-bold mb-5 z-1">
					Explore my projects that showcase my skills
				</p>
				<hr className="border-b border-white w-full mb-10" />
			</div>

			<ButtonGroup
				buttons={buttons}
				handleChangeSelection={handleChangeSelection}
				selectedSection={selectedSection}
			/>

			<div className="z-1 w-[300px] sm:w-[400px] md:w-[800px] lg:w-4/5 flex flex-col justify-center items-center mx-auto mt-10">
				<div className="w-full flex flex-col">
					{selectedSection === "Photos" && (
						<div className="flex flex-row flex-wrap justify-center items-center gap-6 w-full mt-5">
							{photos.map((photo, index) => (
								<ArtImg
									src={photo.src}
									alt={photo.alt}
									text={photo.text}
									aspect={photo.aspect}
									key={index}
									size="w-full"
									maxWidth="max-w-[400px]"
								/>
							))}
						</div>
					)}
					{selectedSection === "Videos" && (
						<div className="w-2/3 mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-5">
								{videos.map((video, index) => (
									<YouTubeThumbnail
										videoId={video.videoId}
										title={video.title}
										key={index}
									/>
								))}
							</div>
						</div>
					)}
					{selectedSection === "Graphics" && (
						<div className="w-1/3 mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-5">
								{graphics.map((photo, index) => (
									<ArtImg
										src={photo.src}
										alt={photo.alt}
										text={photo.text}
										aspect={1 / 1}
										key={index}
										size="w-full"
										maxWidth="max-w-[400px]"
									/>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
