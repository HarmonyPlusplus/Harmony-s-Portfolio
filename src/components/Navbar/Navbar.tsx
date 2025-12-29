import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Navitems } from "./NavItems";
import { useTheme } from "../ThemeContext/ThemeContext";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    return (
        <>
            <div className="navbar flex items-center justify-between py-4 text-[#131a29] px-6 md:px-24 border-b-3 border-[#e5e7eb] bg-white sticky top-0 z-50 dark:bg-gray-800 dark:text-white">

                <Link
                    to="/"
                    className="harmony text-2xl font-bold bg-linear-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent"
                >
                    Harmony
                </Link>

                <div className="hidden md:flex space-x-6">
                    {Navitems.map((item) => {
                        const isActive = location.pathname === item.link;

                        return (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={`
                                    pb-1 
                                    transition-all 
                                    duration-200 
                                    ${isActive
                                        ? "border-b-2 border-purple-600 text-purple-600"
                                        : "text-gray-800 dark:text-white hover:border-b-2 hover:border-purple-400"
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="cursor-pointer"
                    >
                        {theme === "light" ? "Light" : "Dark"}
                    </button>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-2xl font-bold bg-linear-to-r from-[#4F46E5] to-[#9333EA] rounded-md"
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="fixed flex flex-col md:hidden bg-gray-700 px-6 py-4 space-y-4 h-screen w-screen text-white">
                    {Navitems.map((item) => (
                        <Link key={item.id} to={item.link} onClick={toggleMenu}>
                            {item.name}
                        </Link>
                    ))}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-md"
                    >
                        {theme === "light" ? "Light" : "Dark"}
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
