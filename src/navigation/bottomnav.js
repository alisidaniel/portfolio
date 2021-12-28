import React from 'react';
import { Instagram, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';
import "../App.css";

const BottomNav = () => {
    return (
        <footer className="relative w-full border-solid py-2 text-center bottom-0 footer">
          <div className=''>
           <div className='flex justify-center mb-2'>
               <div className="flex flex-row space-x-3">
                   <a className='text-gray-300' href='https://twitter.com/alisidaniel' rel='noreferrer' target="_blank"> <Twitter/></a>
                   <a className='text-gray-300' href='https://www.linkedin.com/in/daniel-alisi-852720143/' rel='noreferrer' target="_blank"><Linkedin/></a>
                   <a className='text-gray-300' href='https://www.instagram.com/alisidaniel/' rel='noreferrer' target="_blank"> <Instagram/></a>
               </div>
           </div>
            <div className=''>
                   {/* <p className='opacity-80 text-md'>Designed & Built with &#10084;&#65039; by Daniel Alisi</p> */}
            </div>
           </div>
        </footer>
    )
}

export default BottomNav;