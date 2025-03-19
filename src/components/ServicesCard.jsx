import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="keen-slider__slide  bg-gray-800  p-8">
            <div className="bg-[#6fca3a] rounded-full flex justify-center items-center mb-5 w-14 h-14">
                {service.icon}
            </div>
            <h4 className="mb-3 lg:mb-6 font-sans text-lg font-bold leading-none tracking-tight text-white/80 sm:text-xl">
                {service.title}
            </h4>
            <p className="text-base mx-auto  text-gray-500 md:text-md">
                {service.description}
            </p>
        </div>
    );
};

export default ServicesCard;
