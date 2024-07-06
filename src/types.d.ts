import {ReactNode} from "react";

interface TimelineElems {
    title: string;
    description: string;
    from: string;
    to: string;
}

interface ProjectItem {
    title: string;
    url: string;
    description: string;
    technologies: ReactNode[];
    image: string;
}