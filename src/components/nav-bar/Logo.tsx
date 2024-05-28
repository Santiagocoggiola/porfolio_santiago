import React from "react";

interface LogoProps {
    href: string;
}

const Logo: React.FC<LogoProps> = ({ href }) => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={href} className="h-8" alt="Santiago Logo"/>
            <span
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
    )
}

export default Logo;
