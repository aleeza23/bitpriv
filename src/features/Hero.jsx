import React from 'react';
import heroImg from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
            <div className="flex flex-col items-center max-w-2xl md:px-8">
                <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white/80 sm:text-6xl md:mx-auto">
                        A powerful suite of user-centric products
                    </h2>
                    <p className="text-base text-gray-500 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-4 mb-4 lg:gap-6 md:flex-row">
                    <a
                     href="/contact"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#59A52C] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Get Started Free
                    </a>
                    <button
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Signup
                    </button>
                </div>             
            </div>
            <img
                src={heroImg}
                className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto mt-8 lg:max-w-screen-md"
                alt="Hero Image"
            />
        </div>
    );
};

export default Hero;
