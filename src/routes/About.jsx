import React from 'react'
import Header from '../features/Header'
import Footer from '../features/Footer'

const About = () => {
    return (
        <>
            <Header />
            <section className="pt-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 pb-32 border-b border-white/10">
                        {/* Left Side: Text Content */}
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-white/80 sm:text-4xl">About Us</h2>
                            <p className="mt-4 text-gray-500 text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat
                                hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris
                                eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet
                                nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
                            </p>
                            <div className="mt-8">
                                <a href="/contact" className="text-[#59A52C] hover:text-[#58a52cab] font-medium">
                                    Contact us <span className="ml-2">&#8594;</span>
                                </a>
                            </div>
                        </div>
                        {/* Right Side: Image */}
                        <div className="mt-12 md:mt-0">
                            <img
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us"
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About