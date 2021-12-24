import React from 'react';
import { Instagram, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';
import "../App.css";

const BottomNav = () => {
    return (
        <footer className="relative w-full border-solid py-2 text-center bottom-0 footer">
          <div className='ml-80 mr-80'>
           <div className='flex justify-center mb-2'>
               <div className="flex flex-row space-x-3">
                   <Link className='text-gray-300' to={{pathname: "https://twitter.com/alisidaniel"}} target="_blank"> <Twitter/></Link>
                   <Link className='text-gray-300' to={{pathname: "https://www.linkedin.com/in/daniel-alisi-852720143/"}} target="_blank"><Linkedin/></Link>
                   <Link className='text-gray-300' to={{pathname: "https://www.instagram.com/alisidaniel/"}} target="_blank"> <Instagram/></Link>
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