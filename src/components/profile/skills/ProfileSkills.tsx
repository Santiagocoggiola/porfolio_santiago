import TypeScript from "./TypeScript";
import Java from "./Java";
import React from "./React";
import SpringBoot from "./SpringBoot";
import Html from "./Html";
import Css from "./Css";
import TailwindCSS from "./TailwindCSS";
import MySQL from "./MySQL";

const ProfileSkills = () => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
            <span className="text-gray-700 font-bold tracking-wider mb-2">2 Years experience on:</span>
            <div className="flex justify-center">
                <ul className="flex flex-col items-start">
                    <TypeScript/>
                    <Java/>
                    <React/>
                    <SpringBoot/>
                    <Html/>
                    <Css/>
                    <TailwindCSS/>
                    <MySQL/>
                </ul>
            </div>
        </div>
    );
}

export default ProfileSkills;
