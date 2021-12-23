import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { links } from '../constants/navlinks';

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between py-6 px-28">
            <div>
                <p className="font-bold text-2xl text-body opacity-80">DA</p>
            </div>
            <div className="px-2">
                {links.map((e,i) => <Link className="rounded-lg px-3 py-2 capitalize" key={i} to={e.url}>{e.text}</Link>)}
                <Link className="bg-outline rounded-lg px-3 py-2" to="#"> Resume</Link>
            </div>
        </div>
    )
}

export default Navbar;
