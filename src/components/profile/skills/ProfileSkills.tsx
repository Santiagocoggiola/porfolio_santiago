import TypeScript from "./TypeScript";
import Java from "./Java";
import ReactTechnology from "./ReactTechnology";
import SpringBoot from "./SpringBoot";
import Html from "./Html";
import Css from "./Css";
import TailwindCSS from "./TailwindCSS";
import MySQL from "./MySQL";
import CSharp from "./CSharp";
import Vite from "./Vite";
import Electron from "./Electron";
import Wordpress from "./Wordpress";

const ProfileSkills = () => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2 dark:text-white">Skills</span>
            <span className="text-gray-700 font-bold tracking-wider mb-2 dark:text-white">2 Years experience on:</span>
            <div className="flex justify-center">
                <ul className="flex flex-col items-start">
                    <TypeScript/>
                    <Java/>
                    <CSharp/>
                    <ReactTechnology/>
                    <Vite />
                    <Electron />
                    <SpringBoot/>
                    <Html/>
                    <Css/>
                    <TailwindCSS/>
                    <MySQL/>
                    <Wordpress />
                </ul>
            </div>
        </div>
    );
}

export default ProfileSkills;
