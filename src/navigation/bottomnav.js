import React from 'react';
import "../App.css";
import dp from "../assets/images/dp.jpeg";
// import linkedin from "../assets/stacks/linkedin.svg";
// import twitter from "../assets/stacks/twitter.svg";

const BottomNav = () => {
    return (
        <footer className="relative w-full h-44 p-4 border-solid footer py-3 lg:py-8 xl:py-10 text-center bottom-0">
            {/* <div className="">
                <p className="text-sm">Written by <span className="text-blue-500">Daniel Alisi</span> Built with ❤️ and  <span className="text-blue-500">Tailwind CSS</span></p>
            </div> */}
            <div className="flex space-x-2 font-medium">
                <img className="w-14 h-14 rounded-full" src={dp} alt="Daniel"/>
                <span className="mt-4">Daniel Alisi</span>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex-start mr-96">
                    <p className="leading-5 font-serif mt-2">
                        I love to code and help in building ideas.
                    </p>
                </div>
                <div className="flex-end ml-96">
                    <div className="flex">
                        {/* <img className="w-12 h-14" src={linkedin} alt="linkedin" />
                        <img className="w-12 h-14" src={twitter} alt="twitter" /> */}
                    </div>
                    <span>© 2021</span>
                </div>
            </div>
        </footer>
    )
}

export default BottomNav;