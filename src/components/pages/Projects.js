import React from "react";

export default function Projects() {
    return (
        <div name="Projects" className="w-full h-full h-screen bg-indigo-600 text-white pt-10">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full flex justify-center py-5">
                    <div className="sm:text-right pb-8 pl-4 pt-6">
                        <p className="text-4x1 font-bold inline border-b-4 text-orange-200 border-cyan-100">
                            Projects
                        </p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-1 px-4">
                    <div className="shadow-md shadow-[#0404c16] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-4">
                        <img className="w-50" src="./img/project-1-img.jpg" alt="The Avengers icon" />
                        <p className="my-5 text-xl">The Avengers</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://rslaughter12.github.io/The-Avengers" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/rslaughter12/The-Avengers" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                    <div className="shadow-md shadow-[#040c16 hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
                        <img className="w-50" src="./img/project-2-img.jpg" alt="Bikini Bottom Booking Bonanza icon" />
                        <p className="my-5 text-xl">Bikini Bottom Booking Bonanza</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://bbbooking.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/Omarggm/BikiniBottomBooking" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                    <div className="shadow-md shadow-[#040c16 hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
                        <img className="w-50" src="./img/project-3-img.jpg" alt="Code Quiz icon" />
                        <p className="my-5 text-xl">Code Quiz</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://saway11.github.io/code-quiz" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/saway11/code-quiz" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                    <div className="shadow-md shadow-[#040c16 hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
                        <img className="w-50" src="./img/project-4-img.jpg" alt="Weather Dashboard icon" />
                        <p className="my-5 text-xl">Weather Dashboard</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://saway11.github.io/Weather-Dashboard" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/saway11/Weather-Dashboard" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                    <div className="shadow-md shadow-[#040c16 hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
                        <img className="w-50" src="./img/project-5-img.jpg" alt="Work Schedule icon" />
                        <p className="my-5 text-xl">Work Schedule</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://saway11.github.io/Third-Party-APIs" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/saway11/Third-Party-APIs" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                    <div className="shadow-md shadow-[#040c16 hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
                        <img className="w-50" src="./img/project-5-img.jpg" alt="Note Taker icon" />
                        <p className="my-5 text-xl">Note Taker</p>
                        <p className="my-3 text-xl hover:text-orange-300"><a href="https://bbbooking.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
                        <p className="text-xl hover:text-orange-300"><a href="https://github.com/saway11/Note-Taker.git" target="_blank" rel="noreferrer">Source Code</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}