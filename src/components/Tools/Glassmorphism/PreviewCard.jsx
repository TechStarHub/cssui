import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

export default function GlassPreviewCard() {
  return (
    <div className="rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 brand-bg-animation-400 flex justify-center items-center w-full h-[250px] overflow-hidden cursor-pointer relative group">
      <div className="w-[75%] h-[50%] p-4 rounded border bg-slate-500 bg-clip-padding opacity-20 backdrop-blur group-hover:rotate-[20deg] transition-transform duration-500 "></div>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-[#00000055] backdrop-blur-sm transition-all duration-500 group-hover:h-16 flex justify-between items-center overflow-hidden">
        <h3 className="text-lg font-medium ml-3 ">Glassmorphism</h3>
        <Link
          to="/tools/glassmorphism"
          className="mr-3 p-2 bg-slate-400 rounded-full shadow-lg"
        >
          <FaCode className="text-xl text-slate-600" />
        </Link>
      </div>
    </div>
  );
}
