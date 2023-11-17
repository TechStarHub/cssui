import React from 'react';
import loaderSvg from '../assets/Rolling-1s-200px.svg';

export default function Loader() {
  return (
    <div className="w-full h-screen bg-[#0F0F0F] flex flex-col justify-center items-center ">
      <img src={loaderSvg} alt="" className="w-10 h-10" />
      <h1 className="text-x text-white mt-3">Loading...</h1>
    </div>
  );
}
