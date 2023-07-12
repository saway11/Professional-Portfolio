import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const intro = {
        name: "Rosa Garcia",
        position: "Full Stack Web Developer",
        direction: 
        "Below you will view the list of work I have completed through my journey as a Web Developer and the best way to contact me.",
        btnText: "View My Work"
    };

    return (
        <div 
            name="Home"
            className="w-full h-screen flex justify-center items-center bg-indigo-600"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-white">Hello World! My name is</p>
                <h1 className="text-4x1 sm:text-7x1 font-bold text-green-300">
                    {intro.name}
                </h1>
                <h2 className="text-4x1 font-bold text-orange-300">{intro.position}</h2>
                <p className="text-white py-4 max-w-[700px]">{intro.direction}</p>
                <div>
                    <Link to="/projects">
                        <button className="animate-bounce hover:animate-none hover:bg-blue-300 bg-blue-200 px-10 py-3 text-x1 uppercase mt-10 rounded-lg">
                            {intro.btnText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}