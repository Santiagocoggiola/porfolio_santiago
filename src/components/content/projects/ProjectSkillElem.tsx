import {ReactNode} from "react";
import Separator from "../../Separator";

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
