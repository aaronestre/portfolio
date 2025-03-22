import Button from "./Button";

export default function Project({ project }) {
    return (
        <div className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-4 shadow-xl rounded-2xl bg-(--background-semi-dark) overflow-hidden">
            <img
                className="w-full h-auto object-cover rounded-t-xl"
                src={project.image}
                alt={project.title}
            />
            <div className="p-4 flex flex-col gap-3">
                <h1 className="text-xl sm:text-2xl text-(--primary-font-color)">
                    {project.title}
                </h1>
                <p className="text-(--secondary-font-color) font-(family-name:--secondary-font)">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, key) => (
                        <span key={key} className="bg-(--background-light-dark) text-white px-2 py-1 rounded-md text-sm whitespace-nowrap">
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex flex-row gap-2">
                    {project.liveDemoLink && (
                        <a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                type="swe"
                                fontSize="sm"
                                padding="1"
                                rounded="md"
                                text={"Live Demo"}
                                className="border-2 border-solid border-(--swe-color) bg-(--swe-color)"
                            />
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                type="swe"
                                fontSize="sm"
                                padding="1"
                                rounded="md"
                                text={"GitHub"}
                                className="border-2 border-solid border-(--swe-color)"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}