import React, { useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout';

export default function GlassMorphic() {
  const [cardColor, setCardColor] = useState('#9e9e9e');
  const [blur, setBlur] = useState(10);
  const [opacity, setOpacity] = useState(20);
  const [saturation, setSaturation] = useState(180);
  const [borderColor, setBorderColor] = useState('#ffffff');
  const [code, setCode] = useState('css');

  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center w-full h-full container mx-auto">
        <h1 className="text-3xl font-bold">GlassMorphism</h1>
        <div className="w-full p-3 rounded border flex-wrap flex justify-around items-center gap-2 bg-[#232D3F] my-3">
          <div className="flex flex-col gap-2 justify-between items-center ">
            <span className="">Card Color</span>
            <input
              type="color"
              className="h-10 rounded w-full"
              value={cardColor}
              onChange={(e) => setCardColor(e.target.value)}
              defaultValue="#ffffff"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between items-center ">
            <span className="">Blur Value</span>
            <input
              type="range"
              value={blur}
              max={40}
              onChange={(e) => setBlur(e.target.value)}
              className="h-10 rounded w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between items-center ">
            <span className="">Opacity</span>
            <input
              type="range"
              max={100}
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              className="h-10 rounded w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between items-center ">
            <span className="">Saturation</span>
            <input
              type="range"
              max={200}
              value={saturation}
              onChange={(e) => setSaturation(e.target.value)}
              className="h-10 rounded w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between items-center ">
            <span className="">Border Color</span>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              className="h-10 rounded w-full"
              defaultValue={'#ffffff'}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="bg-[#232D3F] w-full p-3 rounded border">
            {' '}
            <div className="w-full h-60 grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 brand-bg-animation-400">
              <div
                className="w-[70%] h-40 rounded-lg shadow-xl bg-slate-50  "
                style={{
                  backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
                  WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
                  border: `1px solid ${borderColor}`,
                  backgroundColor: `${cardColor}`,
                  opacity: `${opacity}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="bg-[#232D3F] w-full flex flex-col gap-3 p-3 rounded border ">
            <div className="flex gap-2 w-full">
              <span
                onClick={() => setCode('css')}
                className="bg-slate-700 hover:bg-slate-400 hover:text-slate-900 rounded-md px-2 py-1 cursor-pointer"
              >
                Css
              </span>
              <span
                onClick={() => setCode('tailwind')}
                className="bg-slate-700 hover:bg-slate-400 hover:text-slate-900 rounded-md px-2 py-1 cursor-pointer"
              >
                TailwindCss
              </span>
            </div>
            <div className="w-full h-full bg-[#445069] rounded p-2">
              <code className="">
                {code === 'css' ? (
                  <pre className="text-sm">
                    <code className="language-css">
                      {`background: ${cardColor};
backdrop-filter: blur(${blur}px) saturate(${saturation}%);
-webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
border: 1px solid ${borderColor};
opacity: ${opacity}%;`}
                    </code>
                  </pre>
                ) : (
                  <pre className="text-sm">
                    <code className="language-css">
                      {`<div class= `}
                      {`"bg-[#${cardColor.slice(1)}]
backdrop-blur-[${blur}] saturate-[${saturation}];
border-[#${borderColor.slice(1)}]
opacity-${opacity}"`}
                      {`></div>`}
                    </code>
                  </pre>
                )}
              </code>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
