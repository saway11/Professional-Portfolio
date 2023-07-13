import React, { useState } from "react";
import { FaGithub, FaLinked } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
    FaBars,
    FaTimes,
} from "react-icons/fa";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="w-full fixed flex justify-between items-center px-4 py-5 bg-blue-900 text-white z-20">
            <h1 className="flex text-3xl font-serif italic justify-start font-semibold text-cyan-100">
                Rosa Garcia
            </h1>
            <ul className="hidden md:flex">
                <li className="hover:text-[#ed6a5a] hover:animate-pulse px-5">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse px-5">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse px-5">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse px-5">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            {/* Mobile Menu */}
            <div onClick={ handleClick } className="md:hidden z-50">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={
                !nav
                ? 'hidden'
                : 'absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-blue-900'
            }>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse py-6 text-3xl">
                    <Link onClick={ handleClick } to="/">Home</Link>
                </li>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse py-6 text-3xl">
                    <Link onClick={ handleClick } to="/projects">Projects</Link>
                </li>
                <li className="hover:text-[#ed6a5a] hover:animate-pulse py-6 text-3xl">
                    <Link onClick={ handleClick } to="/contact">Contact</Link>
                </li>
            </ul>

            {/* Media Menu */}
            <div className="hidden lg:flex fixed flex-col top-[60%] left-[95%] px-5">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-blue-600 text-cyan-100 hover:text-gray-300 px-3">
                        <a
                        className="flex justify-between items-center w-full"
                        href="linkedin.com/in/rosa-maría-garcia-447937176"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={30} /> Linkedin
                    </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-blue-600 text-cyan-100 hover:text-gray-300 px-3">
                        <a
                        className="flex justify-between items-center w-full"
                        href="https://github.com/saway11"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={30} /> Github
                    </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-blue-600 text-cyan-100 hover:text-gray-300 px-3">
                        <a
                        className="flex justify-between items-center w-full"
                        href="https://docs.google.com/document/d/1JwuxGZ_tqEV_Mpcp444NSO3eHRKsuGYd6in7Sjh6zn4/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={30} /> Resume
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}