import React from 'react'
import Header from '../features/Header'
import Footer from '../features/Footer'

const ServicesPage = () => {
    return (
        <>
            <Header />
            <section className="pt-16 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto pb-32 border-b border-white/10">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        {/* Left Side: Text & Button */}
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2 className="text-white/80 text-4xl font-bold leading-normal lg:text-start text-center">
                                    Building Stronger Communities through Collaboration and Empowerment
                                </h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments
                                    where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement
                                    but also strengthens the fabric of society.
                                </p>
                            </div>
                            <a
                                href="/contact"
                                className="items-center hidden lg:inline-flex justify-center w-full h-11 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#59A52C] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get Started
                            </a>
                        </div>
                        {/* Right Side: Image */}
                        <img
                            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                            src="https://pagedone.io/asset/uploads/1717751272.png"
                            alt="About Us"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ServicesPage