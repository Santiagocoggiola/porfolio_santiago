import {ProjectItem} from "../types";
import ReactTechnology from "../components/profile/skills/ReactTechnology";
import CSharp from "../components/profile/skills/CSharp";
import Vite from "../components/profile/skills/Vite";
import Electron from "../components/profile/skills/Electron";
import Wordpress from "../components/profile/skills/Wordpress";


export const projects: ProjectItem[] = [
    {
        title: 'Inventory Management Software for Sonirama',
        url: '',
        description: 'Created an Inventory Management System for Sonirama using C# and Windows Forms. This project included integrating the application with an Epson billing printer, and it marked one of my initial forays into software development.',
        technologies: [CSharp()],
        image: ''
    },
    {
        title: 'Sumtech Labs Website',
        url: 'https://www.sumtechlabs.com',
        description: 'Revamped the business website for Sumtech Labs using WordPress. The project aimed at enhancing the site’s aesthetics and usability, resulting in an improved user experience and increased web traffic.',
        technologies: [Wordpress()],
        image: ''
    },
    {
        title: 'Redesign of Inventory Management Software for Sonirama',
        url: '',
        description: 'Redesigned the existing Inventory Management Software for Sonirama to function as a native desktop application. This involved using ReactTechnology, Vite, and Electron, and ensured compatibility with existing Epson billing printers.',
        technologies: [ReactTechnology(), Vite(), Electron()],
        image: ''
    },
    {
        title: 'E-Commerce Platform for Sonirama',
        url: '',
        description: 'Developed a new e-commerce platform for Sonirama using ReactTechnology and Vite. This project focused on creating a modern, responsive interface and an efficient backend to handle online transactions.',
        technologies: [ReactTechnology(), Vite()],
        image: ''
    }
];