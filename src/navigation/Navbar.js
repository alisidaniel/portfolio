import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { links } from '../constants/navlinks';

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between py-6 px-28 sticky">
            <div>
                <p className="font-bold text-2xl text-body opacity-80">DA</p>
            </div>
            <div className="px-2">
                {links.map((e,i) => <a className="rounded-lg px-3 py-2 capitalize" key={i} href={e.url}>{e.text}</a>)}
                <Link className="bg-outline rounded-lg px-3 py-2" to="#"> Resume</Link>
            </div>
        </nav>
    )
}

export default Navbar;
