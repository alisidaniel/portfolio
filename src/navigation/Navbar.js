import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { links } from '../constants/navlinks';

const Navbar = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location - 64
        })
    }
    return (
        <nav className="flex flex-row justify-between nav px-28 sticky">
            <div>
                <p className="font-bold text-2xl text-body opacity-80">DA</p>
            </div>
            <div className="px-2">
                {links.map((e,i) => <a className="rounded-lg px-3 py-2 navlink" key={i} href={e.url} onClick={handleClick}>{e.text}</a>)}
                <a className="bg-outline rounded-lg px-3 py-2" href="/Alisidaniel.pdf" download> Resume</a>
            </div>
        </nav>
    )
}

export default Navbar;
