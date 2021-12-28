import React from 'react';
import './Navbar.css';
import { links } from '../constants/navlinks';

const Navbar = () => {
    const hanldeDrawer = () => {
        document.querySelector('#menu').style.display = 'none';
        document.querySelector('#toggle-menu').checked = false;
    }
    const handleDrawer2 = () => {
        const state = document.querySelector('#toggle-menu').checked;
        if (state){
            document.querySelector('#menu').style.display = 'block';
        }else {
            document.querySelector('#menu').style.display = 'none';
        }
    }
    return (
        <header className="header sticky">
            <div>
                <p className="font-bold text-body opacity-80">DA</p>
            </div>
            <div className='navigation'>
                <input type="checkbox" className='toggle-menu' id="toggle-menu" onClick={handleDrawer2} /> 
                <div className='hamburger'></div>
                <ul className="menu" id='menu'>
                    {links.map((e,i) =>
                    <li>
                        <a className="menu-list" key={i} href={e.url} onClick={hanldeDrawer} >
                            {e.text}
                        </a>
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
