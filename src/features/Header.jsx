import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative z-50" id="home">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-8 p-4 justify-between md:gap-0">


                {/* Logo */}
                <a href="/" className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src={logo} className="h-8" alt="Logo" /> */}
                   <img src={logo} alt="" className='size-20 md:size-24' />
                </a>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden"
                    aria-controls="navbar-default"
                >
                    <GiHamburgerMenu size={24} />
                </button>

                {/* Navbar Links */}
                <div className={`hidden lg:block md:w-auto py-6`} id="navbar-default">
                    <ul className="mt-4 flex flex-col items-center font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-2 md:border-0 md:p-0">
                        {[{ name: "Home", link: "/" }, { name: "About", link: "about" }, { name: "Services", link: "services" }, { name: "Contact", link: "contact" }].map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className={`cursor-pointer block py-2 px-2 font-inter font-medium text-white/80 text-md`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <a
                    href="/contact"
                    className="items-center hidden lg:inline-flex justify-center w-full h-11 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#59A52C] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Get Started
                </a>


                {/* Overlay (closes menu when clicked) */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Sidebar Menu */}
                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 z-50 transform 
${isOpen ? "translate-x-0" : "-translate-x-full"} 
transition-transform duration-300 ease-in-out md:relative md:w-auto md:h-auto py-6 lg:hidden`}
                    id="navbar-default"
                >
                    <ul className="mt-4 flex flex-col items-start font-medium space-y-4 md:mt-0 md:flex-row md:space-x-2 md:space-y-0 md:border-0 md:p-0">
                        {[{ name: "Home", link: "/" }, { name: "About", link: "about" }, { name: "Services", link: "services" }, { name: "Contact", link: "contact" }].map((item, index) => (
                            <li key={index} className="px-4">
                                <a
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className={`cursor-pointer block py-2 font-inter font-medium text-white/80 text-md`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
