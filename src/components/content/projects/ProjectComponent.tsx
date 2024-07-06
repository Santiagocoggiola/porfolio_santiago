import ImageComponent from "../../../Image/ImageComponent";
import {ProjectItem} from "../../../types";
import ProjectSkills from "./ProjectSkills";

interface ProjectComponentProps {
    project: ProjectItem;
}

const ProjectComponent = ({project}: ProjectComponentProps) => {

    return (
        <li className="mb-10 ms-4">
            <div className="flex flex-col lg:flex-row align-baseline gap-4">
                <div className="w-full lg:w-1/2">
                    <ImageComponent src="/project-example.png" alt="Imagen" className=""/>
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {project.description}
                    </p>
                    <ProjectSkills technologies={project.technologies} />
                </div>
            </div>
        </li>
    );
}

export default ProjectComponent;
