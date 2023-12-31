import React from 'react';

export default function LeftSideBorder() {
    return (
        <div className="h-100 z-50 sticky top-0 opacity-0 SideBarLeftIntro">
            <div className="h-full w-20 border-l-2 border-r-2 border-content bg-border hidden md:block sticky top-0 absolute">
            </div>
        </div>
    );
}
