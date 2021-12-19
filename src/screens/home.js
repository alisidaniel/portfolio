
import Navbar from '../navigation/Navbar';
import "../App.css";
import { AtSign, GitHub } from 'react-feather';

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
    <section className="h-screen w-full body text-white">
       <Navbar />
     <div className="mt-24">
          <div className="ml-80 mr-80 py-6">
            <h1 className="font-bold text-4xl opacity-80 mb-8">Hi,</h1>
            <p className="opacity-80 text-lg leading-8 md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-blue-500 p-2 px-10 font-bold rounded-sm hover:bg-blue-400">
                <a className="flex space-x-2" href="https://github.com/alisidaniel" rel="noreferrer" target="_blank">
                    <GitHub color="white" />
                    <span>GitHub</span></a>
              </button>
              <button className="bg-blue-500 p-3 px-12 font-bold rounded-sm hover:bg-blue-400">
                <a className="flex space-x-2" href="https://medium.com/@alisidaniel" rel="noreferrer" target="_blank">
                    <AtSign color="white" />
                    <span>Meduim</span></a>
              </button>
            </div>
          </div>

       <div className="mt-10">
          <div className="ml-56 mr-56">
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
          </div>
       </div>
    </div>
    <div className="mt-10">
        <BottomNav/>
    </div>
    </section>
  );
}

export default Home;
