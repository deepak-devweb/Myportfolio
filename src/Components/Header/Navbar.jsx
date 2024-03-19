import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {

   
    
        
 
  
  return (
    <header className=" h-24 flex items-center justify-center w-full">
      <nav className="flex  items-center justify-between h-full w-full px-14  ">
        <div className="logo h-full  flex items-center  font-bold text-4xl  ">
          <Link to="/">
            <h1 className=" text-white">
              Deepak <span className="text-slate-400">Singh</span>
            </h1>
          </Link>
        </div>
        <div className="navbar flex items-center h-full w-auto text-xl ">
          <ul className="flex flex-wrap justify-center py-4 mr-24 text-slate-400 text-center gap-14 font-bold ">
            <li className="hover:text-white">
              <Link
                to="/about"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                About
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="/skills"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="/projects"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                to="/contact"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex items-center h-full w-auto text-xl  ">
          <ul className="flex flex-wrap justify-end text-end text-black gap-6">
            <li className="bg-white rounded-full border p-2 border-white ">
              <button
                href="https://www.instagram.com"
                className="w-8 hover:text-[#fd2980]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </li>
            <li className="bg-white rounded-full border p-2 border-white ">
              <button className="w-8">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </li>
            <li className="bg-white rounded-full border p-2 border-white ">
              <button className="w-8 hover:text-[#0a66c2]">
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </li>
            <li className="bg-white rounded-full border p-2 border-white ">
              <button className="w-8 hover:text-[#0dc143]">
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>
            </li>
          </ul>
        </div>
        {/* <div className='relative'>
                            <h1 className='text-white'>Hello</h1>
                        <span className='text-slate-400'>I am {typeEffect}</span>
                    </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
