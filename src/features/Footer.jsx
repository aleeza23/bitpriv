import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";

const sections = [
    {
        title: "Solutions",
        items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
    },
    {
        title: "Support",
        items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
        title: "Company",
        items: ["About", "Blog", "Jobs", "Press", "Partners"],
    },
    {
        title: "Legal",
        items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
    },
];

const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
    return (
        <div className="w-full mt-12 bg-slate-900 text-gray-300  px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-5 gap-8 ">
                <div>
                    {/* Logo */}
                    <a href="/" className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src={logo} className="h-8" alt="Logo" /> */}
                        <h1 className='font-bold text-white text-xl '>Logo</h1>
                    </a>
                </div>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className="py-1 text-gray-500 hover:text-white cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}


            </div>

            <div className="flex flex-col max-w-5xl px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <ul className="flex gap-2 pt-4">
                    <li className=" text-gray-500 hover:text-white">
                        Terms .
                    </li>
                    <li className="text-gray-500 hover:text-white">
                        Privacy Policy
                    </li>
                </ul>
                <div className="flex gap-4 text-[#59A52C]  pt-4 text-xl">
                    {items.map((x, index) => {
                        return <x.icon key={index} className="hover:text-white" />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;