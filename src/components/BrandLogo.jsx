import React from 'react';

export default function BrandLogo() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-si rounded p-1 brand-bg-animation hover:shadow-2xl shadow-purple-500 ">
      <div className="bg-black p-1 rouded">
        <h1 className="text-2xl font-medium text-white">
          <span className="">CSS</span>
          <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded bg-clip-text text-transparent font-extrabold brand-bg-animation">
            UI
          </span>
        </h1>
      </div>
    </div>
  );
}
