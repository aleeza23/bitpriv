import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Tabs from '../components/Tabs';
import featureImg from '../assets/features-image.png'

const Features = () => {
    return (
        <section className='my-28 pt-20 border-t border-white/10 px-4'>
            <SectionHeading heading={'Features to help you create your best designs'} />

            <div className="max-w-5xl mx-auto p-8 pb-0  rounded-sm" style={{ backgroundColor: 'rgb(30 41 59 / 1)' }}>
                <div className="grid lg:grid-cols-2">
                    <div>
                        <Tabs />
                    </div>

                    <div>
                        <img src={featureImg} alt="feature-img" className='h-72 lg:h-full w-full' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features