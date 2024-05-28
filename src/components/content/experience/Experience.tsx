import Timeline from "../timeline/Timeline";
import {experiences} from "../../../services/experienceService";


const Experience = () => {
    return (
        <section id="experience" className="flex flex-col text-start">
            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
            <Timeline timelineElems={experiences} />
        </section>
    );
};

export default Experience;
