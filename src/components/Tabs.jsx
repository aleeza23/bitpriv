import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Everyone");

    const tabContent = {
        Everyone: {
            title: "Kickstart your project with these tools",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
        },
        Freelancers: {
            title: "Tech tools to kickstart freelance life",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
        },
        Organizations: {
            title: "Share your plan and clarify project risk",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
        }
    };

    return (
        <div className="w-full">
            <div className="relative right-0">
                <ul className="relative flex flex-wrap gap-2 list-none" role="list">
                    {["Everyone", "Freelancers", "Organizations"].map((tab) => (
                        <li key={tab} className={`z-30 border border-white/10 rounded-full px-4 py-1 ${activeTab === tab ? "bg-[#59A52C] text-white/80" : "bg-gray-600 text-white/80"}`}>
                            <button
                                className="z-30 flex items-center px-0 text-md font-medium mb-0  border-0 rounded-md cursor-pointer bg-inherit"
                                onClick={() => setActiveTab(tab)}
                                role="tab"
                                aria-selected={activeTab === tab}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6  ">
                <h2 className="max-w-3xl mb-2 font-sans text-4xl font-bold leading-[1.3] tracking-tight text-white/90 sm:text-4xl md:mx-auto">
                    {tabContent[activeTab].title}
                </h2>
                <p className="text-base text-gray-500 md:text-lg">{tabContent[activeTab].description} </p>

            </div>
        </div>
    );
};

export default Tabs;
