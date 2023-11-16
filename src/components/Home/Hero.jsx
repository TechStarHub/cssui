import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Hero() {
  return (
    <div className="flex w-full justify-center  bg-[url('/blobanimation2.svg')] bg-no-repeat bg-center ">
      <div className="mt-10 flex flex-col items-center  ">
        <h1 className="text-4xl lg:text-[3rem] leading-tight font-bold text-white text-center w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]  ">
          An Open Source Collections of UI ELements and CSS Tools 🚀
        </h1>
        <p className="text-2xl text-center text-white mt-3 px-4">
          A collection of CSS UI components
        </p>
        <div className="my-8 w-full relative">
          <IoSearch className="absolute top-3 left-3 text-black text-xl " />
          <input
            type="text"
            role="search"
            placeholder="Quick Search for CSS UI Elements and Tools"
            className="w-full text-lg pl-9 pr-[5.4rem] py-2 rounded-full text-black border border-sky-400 outline outline-sky-500 "
          />
          <button className="absolute top-[7px] right-1 flex items-center gap-1 px-2 py-1 bg-slate-400 rounded-full shadow-md">
            <IoSearch className="text-black text-xl " />
            <span className="text-black">Search</span>
          </button>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-4 py-2 text-center font-medium shadow-xl mt-3">
          Get Started
        </button>
      </div>
    </div>
  );
}
