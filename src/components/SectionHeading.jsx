import React from 'react'

const SectionHeading = ({ heading, text }) => {
    return (
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-3xl md:mb-12">
            <h2 className="max-w-3xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white/80 sm:text-6xl md:mx-auto">
                {heading}
            </h2>
            {text && <p className="text-base mx-auto max-w-xl text-gray-500 md:text-lg">{text} </p>}
        </div>
    )
}

export default SectionHeading 