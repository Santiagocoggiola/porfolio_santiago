import React, { useState, useEffect } from 'react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

interface DarkThemeSwitchProps {
    className?: string;
}

const DarkThemeSwitch = ({className}: DarkThemeSwitchProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Alternar el tema
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Aplicar el tema al documento
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`${className} flex items-center justify-center h-screen"`}>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className={`relative inline-flex items-center h-8 lg:h-14 rounded-full w-12 lg:w-24 p-1 focus:outline-none
                        ${isDarkMode ? 'bg-blue-400 ' : 'bg-yellow-200'}`}
                >
                    <span className="sr-only">Toggle Theme</span>
                    <div
                        className={`transform transition-transform duration-300 ease-in-out
                            ${isDarkMode ? 'translate-x-4 lg:translate-x-10 bg-blue-600' : 'translate-x-0 bg-yellow-400 border-2 border-amber-200'}
                            flex items-center justify-center w-6 h-6 lg:w-12 lg:h-12 rounded-full`}
                    >
                        {isDarkMode ? <MoonIcon /> : <SunIcon />}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DarkThemeSwitch;
