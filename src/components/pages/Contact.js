import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
    const section ={
        title: "Contact Me",
        message: "Feel free to reach out to me."
    }
    return (
        <div name="Contact" className="w-full h-screen bg-indigo-600 text-white h-full px-7">
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div className="flex flex-col items-center mt-32">
                    <p className="text-4x1 text-green-400 font-bold inline border-b-4 border-cyan-700">
                        {section.title}
                    </p>
                    <p className="pt-5 text-cyan-100 text-xl text-center">
                        {section.message}
                    </p>
                    <div className="pt-10">
                        <a href="mailto:rgarcia20.m@gmail.com">
                            <div className="flex justify-between bg-cyan-600 text-xl p-3 hover;BG-CYAN-700">
                                <FaRegEnvelope size={30} />
                                <span className="ml-5">rgarcia20.m@gmail.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="w-full pt-10">
                        <form className="flex flex-col max-w-[600px]">
                            <input
                                className="bg-[#ccd6f6] p-2 text-black"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="my-4 p-2 bg-[#ccd6f6] text-black"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <textarea
                                className="bg-[#ccd6f6] p-2 text-black"
                                name="message"
                                rows="8"
                                placeholder="Message"
                            ></textarea>
                            <button className="text-purple-300 hover:text-white-300 font-bold border-gray-400 border-2 hover:bg-purple-600 hover:border-purple-300 px-4 py-3 my-8 mx-auto flex items-center">
                                Submit!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}