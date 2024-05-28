import React from "react";

interface NavElementProps {
    title: string;
    href: string;
}

const NavElement: React.FC<NavElementProps> = ({ title, href }) => {
    return (
        <li>
            <a href={`#${href}`}
               className="block py-2 px-3 hover:bg-gray-300 dark:hover:bg-gray-500 rounded md:bg-transparent text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">{title}</a>
        </li>
    )
}

export default NavElement;
