import Timeline from "../timeline/Timeline";
import {educations} from "../../../services/educationService";

const Education = () => {
    return (
        <section id="education" className="flex flex-col text-start">
            <h2 className="text-xl font-bold mt-6 mb-4 dark:text-white">Education</h2>
            <Timeline timelineElems={educations} />
        </section>
    );
};

export default Education;
