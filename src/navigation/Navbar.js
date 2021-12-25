import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { links } from '../constants/navlinks';

const Navbar = () => {
    return (
        <header className="header sticky">
            <div>
                <p className="font-bold text-body opacity-80">DA</p>
            </div>
            <div className='navigation'>
                <input type="checkbox" className='toggle-menu' />
                <div className='hamburger'></div>
                <ul className="menu">
                    {links.map((e,i) =>
                    <li>
                        <a className="" key={i} href={e.url} >{e.text}</a>
                    </li>
                    )}
                    <li>
                        <a className="text-sm" href="/Alisidaniel.pdf" download> Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
