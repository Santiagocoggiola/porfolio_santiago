import TimelineElement from "./TimelineElement";
import React from "react";
import {TimelineElems} from "../../../types";

interface TimelineProps {
    timelineElems: TimelineElems[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineElems }) => {
    return (

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {
                timelineElems.map((elem, i) => (
                    <TimelineElement key={i} title={elem.title} description={elem.description} from={elem.from} to={elem.to} />
                ))
            }
        </ol>
    );
};

export default Timeline;
