import AboutMe from "./about-me/AboutMe";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Separator from "../Separator";

const Content = () => {
    return (
        <section
            id="content"
            className="col-span-12 lg:col-span-9 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <AboutMe />
            <Separator />
            <Education />
            <Separator />
            <Experience />
            <Separator />
            <Projects />
        </section>
    );
}

export default Content;
