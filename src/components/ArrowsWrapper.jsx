import React from 'react';

export const ArrowsWrapper = ({ children, slide, active }) => {
    return (
        <button onClick={slide} className="light-gradient-border hover:bg-opacity-80 rounded-full">
            <div className={` z-10 rounded-full flex justify-center w-12 h-12  items-center shadow-[inset_0px_4px_8px_#FFFFFF26] ${active}`}>
                {children}
            </div>
        </button>
    );
};
