import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between py-6 px-28">
            <div>
                <p className="font-bold text-2xl text-body opacity-80">DA</p>
            </div>
            <div className="">
                <Link className="font-bold hover:bg-gray-300 hover:text-black rounded-lg p-2" to="/"> Home</Link>
                <Link className="font-bold hover:bg-gray-300 hover:text-black rounded-lg p-2" to="/resume"> Resume</Link>
                <Link className="font-bold hover:bg-gray-300 hover:text-black rounded-lg p-2" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
