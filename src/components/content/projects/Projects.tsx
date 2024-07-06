import {projects} from "../../../services/projectsService";
import ProjectComponent from "./ProjectComponent";

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col text-start">
            <h2 className="text-xl font-bold mt-6 mb-4 dark:text-white">Projects</h2>
            <ul className="relative border-s border-gray-200 dark:border-gray-700" >
                {
                    projects.map((project) => (
                        <ProjectComponent project={project} />
                    ))
                }
            </ul>
        </section>
    )
}

export default Projects;
