import React from 'react';
import Header from '../features/Header';
import { InlineWidget } from "react-calendly";
import Footer from '../features/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <section className='pt-16 px-4'>
                <div className='max-w-7xl mx-auto text-white/90 border-b border-white/10 pb-32'>
                    <h2 className="text-2xl font-bold mb-8">Schedule a Meeting</h2>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg  ">
                        <div className="overflow-hidden max-h-[600px] ">
                            <InlineWidget url="https://calendly.com/rubaab-dev/30min" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
