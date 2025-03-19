import React from 'react'

const Contact = () => {
    return (
        <section className='mt-28 border-t border-white/10 px-4'>
            <div className="max-w-5xl mx-auto py-24  border-b border-white/10">
                <div className="flex flex-col items-center max-w-2xl mx-auto md:px-8">
                    <div className="max-w-xl md:mx-auto text-center lg:max-w-3xl md:mb-12">
                        <h2 className="max-w-2xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white/80 sm:text-5xl md:mx-auto">
                            Join the most flexible user-centric platform for teams
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-4 lg:gap-8 md:flex-row">
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
            </div>
        </section>
    )
}

export default Contact