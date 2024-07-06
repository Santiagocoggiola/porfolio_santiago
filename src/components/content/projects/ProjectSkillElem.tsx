import {ReactNode} from "react";

interface ProjectSkillElemProps {
    technology: ReactNode;
}

const ProjectSkillElem = ({technology}: ProjectSkillElemProps) => {
    return (
        <div>
            {technology}
        </div>
    );
};

export default ProjectSkillElem;
