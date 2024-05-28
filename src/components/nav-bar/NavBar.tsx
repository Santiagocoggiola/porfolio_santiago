import React from "react";
import NavElement from "./NavElement";
import Logo from "./Logo";
import MobileButton from "./MobileButton";

const NavBar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-2xl">
            <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo href={'https://flowbite.com/docs/images/logo.svg'} />
                <MobileButton showMenu={showMenu} setShowMenu={setShowMenu} />
                <div className={`${!showMenu ? 'hidden' : '' } w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavElement href={'home'} title="Home" />
                        <NavElement href={'about-me'} title="About Me" />
                        <NavElement href={'education'} title="Education" />
                        <NavElement href={'experience'} title="Experience" />
                        <NavElement href={'projects'} title="Projects" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
