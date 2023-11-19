import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

export default function GlassPreviewCard({
  children,
  heading,
  link,
  bgClasses = 'bg-white',
}) {
  return (
    <div
      className={`rounded bg-gradient-to-r flex justify-center items-center w-full h-[250px] overflow-hidden cursor-pointer relative group ${bgClasses} `}
    >
      {children}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-[#00000055] backdrop-blur-sm transition-all duration-500 group-hover:h-16 flex justify-between items-center overflow-hidden">
        <h3 className="text-lg font-medium ml-3 ">{heading}</h3>
        <Link
          to={link}
          className="mr-3 p-2 bg-slate-400 rounded-full shadow-lg"
        >
          <FaCode className="text-xl text-slate-600" />
        </Link>
      </div>
    </div>
  );
}
