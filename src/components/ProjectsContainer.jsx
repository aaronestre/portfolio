import Project from "./Project";

export default function ProjectsContainer({ projects }) {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}