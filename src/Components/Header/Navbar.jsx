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
    <header className="h-24 flex items-center justify-center w-full">
  <nav className="flex flex-wrap items-center justify-between h-full w-full px-4 md:px-14">
    <div className="logo mx-4 ml-24 md:mx-26 h-full flex items-center font-bold">
      <Link className="text-4xl" to="/">
        <h1 className="text-white">
             Deepak <span className="text-slate-400">Singh</span>
        </h1>
      </Link>
    </div>
    <div className="navbar flex items-center h-full w-auto text-xl">
      <ul className="flex flex-wrap justify-center py-4 md:py-0 mr-4 md:mr-24 text-slate-400 text-center gap-4 md:gap-14 font-bold">
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
    <div className="flex items-center h-full w-auto text-xl">
      <ul className="flex flex-wrap justify-end text-end text-black gap-4 md:gap-6">
        <li className="bg-white rounded-full border p-2 border-white">
          <button href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 hover:text-[#fd2980]">
            <FontAwesomeIcon icon={faInstagram} />
            </button>
        </li>
        <li className="bg-white rounded-full border p-2 border-white">
          <button href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8">
          <FontAwesomeIcon icon={faGithub} />
            </button>
        </li>
        <li className="bg-white rounded-full border p-2 border-white">
          <button href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 hover:text-[#0a66c2]">
          <FontAwesomeIcon icon={faLinkedin} />
            </button>
        </li>
        <li className="bg-white rounded-full border p-2 border-white">
          <button href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 hover:text-[#0dc143]">
          <FontAwesomeIcon icon={faWhatsapp} />
            </button>
        </li>
       
      </ul>
    </div>
   
  </nav>
</header>
  );
}

export default Navbar;
