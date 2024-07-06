import React from "react";

interface TimelineElementProps {
    title: string;
    description: string;
    from: string;
    to: string;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ title, description, from, to }) => {
    return (
        <li className="mb-10 ms-4">
            <div
                className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-gray-800 dark:border-white dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-white">{from} - {to}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </li>
    );
};

export default TimelineElement;
