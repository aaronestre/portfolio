import Project from "./Project";

export default function ProjectsContainer({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/5 mx-auto">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}