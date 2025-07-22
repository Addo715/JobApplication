import React from "react";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 0, 58, 0.7), rgba(10, 0, 58, 0.7)), url(${assets.background})`,
        }}
      >
        <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 text-white m-5">

          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 max-w-4xl">
            Discover <br />
            Your Dream Job
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <p className="border-r border-blue-500 pr-4">Remote</p>
            <p className="border-r border-blue-500 pr-4">Full-time</p>
            <p className="border-r border-blue-500 pr-4">Part-time</p>
            <p className="flex items-center gap-1 border-r border-blue-500 pr-4">
            <CiCalendar />  Updated Daily 
            </p>
            <p className="flex items-center gap-1">
              <CiClock1 /> Quick Apply
            </p>
          </div>

          <div>
            <p className="text-md text-gray-400 max-w-md leading-snug mt-5">
              Find top opportunities across tech, finance, healthcare, and more.
              Join thousands of job seekers accelerating their careers with our platform.
            </p>

           <Link to='/signup'>
            <div className="mt-4">
              <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold border border-blue-600 px-4 py-2 rounded-full hover:bg-red-50 transition cursor-pointer">
                Browse Jobs <FaArrowRight />
              </button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
