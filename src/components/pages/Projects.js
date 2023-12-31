import React from "react";
import project1 from '../../assets/img/project-1-img.png';
import project2 from '../../assets/img/project-2-img.png';
import project3 from '../../assets/img/project-3-img.png';
import project4 from '../../assets/img/project-4-img.png';
import project5 from '../../assets/img/project-5-img.png';
import project6 from '../../assets/img/project-6-img.png';

export default function Projects() {
  return (
    <div name="Projects" className="w-full h-full h-screen bg-indigo-600 text-white pt-10">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center py-5">
          <div className="sm:text-right pb-8 pl-4 pt-6">
            <p className="text-4xl font-bold inline border-b-4 text-orange-200 border-cyan-100">
              Projects
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-1 px-14">
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-4">
            <img className="w-50" src={project1} alt="The Avengers" />
            <p className="my-5 text-xl">The Avengers</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://rslaughter12.github.io/The-Avengers" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/rslaughter12/The-Avengers" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
            <img className="w-50" src={project2} alt="Bikini Bottom Booking" />
            <p className="my-5 text-xl">Bikini Bottom Booking</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://bbbooking.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/Omarggm/BikiniBottomBooking" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-4">
            <img className="w-50" src={project3} target="_blank" alt="Code Quiz icon" />
            <p className="my-5 text-xl">Code Quiz</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://saway11.github.io/code-quiz" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/saway11/code-quiz" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 items-center m-4">
            <img className="w-full max-h-56" src={project4} target="_blank" alt="Weather Dashboard icon" />
            <p className="my-5 text-xl">Weather Dashboard</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://saway11.github.io/Weather-Dashboard" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://github.com/saway11/Weather-Dashboard" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 items-center max-h-90 m-4">
            <img className="w-full max-h-56" src={project5} target="_blank" alt="Work Schedule icon" />
            <p className="my-4 text-xl">Work Schedule</p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://saway11.github.io/Third-Party-APIs" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://github.com/saway11/Third-Party-APIs" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#efefef] hover:scale-110 duration-500 bg-blue-800 items-center m-4">
            <img className="w-full h-56" src={project6} target="_blank" alt="Note Taker icon" />
            <p className="my-5 text-xl">Card X</p>
            <p className="my-5 text-xl hover:text-orange-300"><a href="https://tranquil-reef-31022-45823b0e137b.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://github.com/escotoj/Card-X.git" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}