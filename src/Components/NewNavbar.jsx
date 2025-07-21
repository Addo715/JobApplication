import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const NewNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 border-b border-gray-300 bg-white relative">
      <Link to="/">
        <img className="h-[6.5rem]" src={assets.logo1} alt="Company Logo" />
      </Link>
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/user" className="hover:text-black transition">
          Job
        </Link>
        <Link to="/dashboard" className="hover:text-black transition">
          Dashboard
        </Link>
        <Link to="/contactus" className="hover:text-black transition">
          Contact Us
        </Link>
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615L15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#615fff"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5m0 0v1a3 3 0 006 0v-1m-6 0H9"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>
        <Link to='/signup'>
        <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
          Logout
        </button>
        </Link>
      </div>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to="/user" className="block">
          Job
        </Link>
        <Link to="/dashboard" className="block">
          Dashboard
        </Link>
        <Link to="/contactus" className="block">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NewNavbar;