import React from 'react';
import {Link} from 'react-router-dom';

const BottomNav = () => {
    return (
        <nav className="absolute w-full text-center bottom-0">
            <div className="p-10">
                <p className="text-sm">Written by <span className="text-blue-500">Daniel Alisi</span> Built with ❤️ and  <span className="text-blue-500">Tailwind CSS</span></p>
            </div>
        </nav>
    )
}

export default BottomNav;