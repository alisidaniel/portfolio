import React from 'react';
import Navbar from '../navigation/Navbar';
import "../App.css";
import { AtSign, GitHub } from 'react-feather';
import SideDrawer from '../navigation/SideDrawer';

// Images
import logo from '../logo.svg';
import node from "../assets/stacks/node.svg";
import ts from "../assets/stacks/ts.svg";
import nest from "../assets/stacks/nest.svg";
import php from "../assets/stacks/php.svg";
import mysql from "../assets/stacks/mysql.svg";
import mongo from "../assets/stacks/mongo.svg";
import redis from "../assets/stacks/redis.svg";
import docker from "../assets/stacks/docker.svg";
import laravel from "../assets/stacks/laravel.svg";
import BottomNav from '../navigation/bottomnav';

function Home() {
      
  return (
    <main className="h-screen w-screen body text-white" id="about">
    <Navbar />
    {/* <section className="ml-52 mr-52">
        <h1 className="text-1xl opacity-80 mb-4">Hi, my name is</h1>
        <h3 className='text-gray-100 text-6xl font-medium mb-3'>Daniel Alisi.</h3>
        <h4 className='mb-3 opacity-90 text-4xl mb-6'>I build things with my hands.</h4>
        <p className="opacity-80 text-lg leading-relaxed md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex space-x-4 mt-8">
            <a className="bg-blue-500 p-3 px-8 font-bold rounded-sm hover:bg-blue-400" href="https://medium.com/@alisidaniel" rel="noreferrer" target="_blank">
            <p className="flex space-x-2">
                <AtSign color="white" />
                <span>Articles</span>
            </p>
            </a>
        </div>
    </section> */}

    {/* <section className='ml-52 mr-52 section bg-green-200' id="experience">
        <p>Experience section</p>
    </section>

    <section className='ml-52 mr-52 section bg-red-200' id="projects">
        <p>projects section</p>
    </section> */}

    {/* <section className="ml-56 mr-56" id="topskills">
        <h1 className="font-bold text-2xl text-center">
            <span className="border-b-2 border-yellow-300">Top Skills </span></h1>
            <div className="flex flex-row justify-around mt-4">
                <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={node} alt="Node" />
                        <span className="mt-2 font-bold text-2xl"></span>
                    </div>
                </a>
                <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={ts} alt="Typescript" />
                        <span className="mt-2 font-bold text-2xl">TypeScript</span>
                    </div>
                </a>
                <a href="https://nestjs.com/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={nest} alt="Nest" />
                        <span className="mt-2 font-bold text-2xl">Nest</span>
                    </div>
                </a>
                <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={logo} alt="React" />
                        <span className="mt-2 font-bold text-2xl">React</span>
                    </div>
                </a>
                <a href="https://www.php.net/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={php} alt="Php" />
                        <span className="mt-2 font-bold text-2xl"></span>
                    </div>
                </a>
            </div>
            <div className="flex flex-row justify-around mt-6">
                <a href="https://www.mysql.com/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={mysql} alt="mysql" />
                        <span className="mt-2 font-bold text-2xl">Mysql</span>
                    </div>
                </a>
                <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={mongo} alt="mongodb" />
                        <span className="mt-2 font-bold text-2xl">Mongodb</span>
                    </div>
                </a>
                <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
                    <div className="flex flex-row space-x-1">
                        <img className="w-14 h-14" src={docker} alt="docker" />
                        <span className="mt-2 font-bold text-2xl">Docker</span>
                    </div>
                </a>
            <a href="https://redis.io/" rel="noreferrer" target="_blank">
                <div className="flex flex-row space-x-1">
                    <img className="w-14 h-14" src={redis} alt="Redis" />
                    <span className="mt-2 font-bold text-2xl">Redis</span>
                </div>
            </a>
            <a href="https://laravel.com/" rel="noreferrer" target="_blank">
                <div className="flex flex-row space-x-1">
                    <img className="w-14 h-14" src={laravel} alt="Laravel" />
                    <span className="mt-2 font-bold text-2xl">Laravel</span>
                </div>
            </a>
          </div>
    </section> */}


       {/* <section className='mr-52 ml-52 section bg-blue-200' id="contact">
        <p>Contact</p>
       </section> */}

        {/* <div className="mt-10">
            <BottomNav/>
        </div> */}
    </main>
  );
}

export default Home;
