import {ReactNode} from "react";
import ProjectSkillElem from "./ProjectSkillElem";

interface ProjectSkillsProps {
    technologies: ReactNode[];
}

const ProjectSkills = ({technologies}: ProjectSkillsProps) => {

    return (
        <ul className="flex flex-row justify-items-start font-bold gap-5">
            {
                technologies.map((technology) =>
                    <ProjectSkillElem technology={technology} />
                )
            }
        </ul>
    )
};

export default ProjectSkills;
