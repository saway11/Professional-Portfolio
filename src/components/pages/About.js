import React from "react";

export default function About() {
    const section = {
        title: "About Me",
        bio: "Highly skilled and dedicated coder with a proven track record of developing, testing, and maintaining software programs that meet class requirements. Strong problem-solving and analytical skills with a commitment to staying up to date with the latest programing trends and technologies."
    };

    return (
        <div name= "About" classname="w-full h-full bg-blue-900 text-white px-5">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full flex justify-center py-10">
                    <div className="sm:text-right pb-8 pl-4 py-20">
                        <p className="text-4x1 text-orange-300 font-bold inline border-b-4 border-cyan-100">
                            {section.title}
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full h-screen grid sm:grid-cols-2 gapb-8 px-4">
                    <div className="px-5 py-0">
                        <img src="./img/portfolio-bg-img.jpg" alt="Profile Headsot" />
                    </div>
                    <div className="text-2x1 px-5 italic">
                        <p className="text-white">{section.bio}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}