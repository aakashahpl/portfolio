import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-16 text-white flex justify-center items-center flex-col"
        >
            <div className=" w-8/12">
                <h1 className=" text-7xl">Contact :
                </h1>
                <p className="flex flex-row gap-6">
                    <h2 className=" text-5xl">aakashpatel315@gmail.com</h2>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashpatel315@gmail.com"
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >Send Mail  <MdOutlineKeyboardArrowRight size={25} className="ml-1" /></a>
                </p>

            </div>
        </div>
    );
};

export default Contact;
