import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { FaAngleDown, FaGithubAlt } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [elementMenuOpen, setElementMenuOpen] = useState(false);
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [smMenuOpen, setSmMenuOpen] = useState(false);

  const handleToolsMenuClick = () => {
    if (elementMenuOpen) setElementMenuOpen(false);
    if (toolsMenuOpen) {
      setOverlay(false);
      return setToolsMenuOpen(false);
    }
    setToolsMenuOpen(!toolsMenuOpen);
    setOverlay(true);
  };
  const handleElementMenuClick = () => {
    if (toolsMenuOpen) setToolsMenuOpen(false);
    if (elementMenuOpen) {
      setOverlay(false);
      return setElementMenuOpen(false);
    }
    setElementMenuOpen(!elementMenuOpen);
    setOverlay(true);
  };
  const handleSmMenuClick = () => {
    if (smMenuOpen) {
      setOverlay(false);
      return setSmMenuOpen(false);
    }
    setSmMenuOpen(!smMenuOpen);
    setOverlay(true);
  };
  // overlay click results in closing both menus
  const handleOverlayClick = () => {
    setElementMenuOpen(false);
    setToolsMenuOpen(false);
    setSmMenuOpen(false);
    setOverlay(false);
  };

  return (
    <header className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between px-6 py-4 ">
        {overlay && (
          <div
            onClick={handleOverlayClick}
            className="fixed top-0 left-0 w-full h-full "
            id="overlay"
          ></div>
        )}
        <Link to="/">
          <BrandLogo />
        </Link>
        <div className="hidden sm:flex items-center gap-1 ">
          <div className="relative">
            <button
              onClick={handleToolsMenuClick}
              className="flex items-center gap-1 hover:bg-[#454545] rounded px-2 py-1"
            >
              <span className="">Tools</span>
              <FaAngleDown
                className="text-xl"
                style={{ rotate: toolsMenuOpen && '180deg' }}
              />
            </button>
            {toolsMenuOpen && (
              <NavDropDown>
                <div className="grid grid-cols-3 grid-flow-row gap-3 bg-[#454545] text-center rounded w-[350px]">
                  <Link
                    to="/tools"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    All
                  </Link>
                  <Link
                    to="/tools/typography"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Typography
                  </Link>
                  <Link
                    to="/tools/box-shadow"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Box Shadow
                  </Link>
                  <Link
                    to="/tools/box-shadow"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Box Shadow
                  </Link>
                  <Link
                    to="/tools/box-shadow"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Box Shadow
                  </Link>
                  <Link
                    to="/tools/box-shadow"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Box Shadow
                  </Link>
                </div>
              </NavDropDown>
            )}
          </div>
          <div className="relative">
            <button
              onClick={handleElementMenuClick}
              className="flex items-center gap-1 hover:bg-[#454545] rounded px-2 py-1"
            >
              <span className="">Elements</span>
              <FaAngleDown
                className="text-xl"
                style={{ rotate: elementMenuOpen && '180deg' }}
              />
            </button>
            {elementMenuOpen && (
              <NavDropDown>
                <div className="grid grid-cols-3 grid-flow-row gap-2 text-center w-[300px] ">
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    All
                  </Link>
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Glass
                  </Link>
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Cards
                  </Link>
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Buttons
                  </Link>
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Buttons
                  </Link>
                  <Link
                    to="/elements/buttons"
                    className="bg-[#20262E] px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Buttons
                  </Link>
                </div>
              </NavDropDown>
            )}
          </div>
          <Link
            to="/challenges"
            className="flex items-center gap-1 hover:bg-[#454545] rounded px-2 py-1"
          >
            Challenges
          </Link>
          <Link
            to="/spotlights"
            className="flex items-center gap-1 hover:bg-[#454545] rounded px-2 py-1"
          >
            Spotlights
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            to="https://github.com/TechStarHub"
            target="_blank"
            className="hidden sm:flex items-center gap-2 bg-[#454545] hover:bg-[#20262E] rounded px-2 py-1 "
          >
            <FaGithubAlt className="text-2xl" />
            <span className="font-medium ">Join Us on GitHub</span>
          </Link>
          <button
            onClick={handleSmMenuClick}
            className="sm:hidden p-2 rounded bg-[#454545]"
          >
            {smMenuOpen ? (
              <IoClose className="text-xl" />
            ) : (
              <TiThMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>
      {smMenuOpen && (
        <div className="flex flex-col justify-start items-center gap-2 w-full text-lg px-2 mt-3 z-50">
          <Link
            to="/tools"
            className="bg-[#454545] rounded px-2 py-1 w-full text-center"
          >
            Tools
          </Link>
          <Link
            to="/elements"
            className="bg-[#454545] rounded px-2 py-1 w-full text-center"
          >
            Elements
          </Link>
          <Link
            to="/challenges"
            className="bg-[#454545] rounded px-2 py-1 w-full text-center"
          >
            Challenges
          </Link>
          <Link
            to="/spotlights"
            className="bg-[#454545] rounded px-2 py-1 w-full text-center"
          >
            Spotlights
          </Link>
          <Link
            to="https://github.com/TechStarHub"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#454545] rounded px-2 py-1 w-full text-center"
          >
            <FaGithubAlt className="text-2xl" />
            <span className="font-medium">Join Us on GitHub</span>
          </Link>
        </div>
      )}
    </header>
  );
}

function NavDropDown({ children }) {
  return (
    <div className="absolute w-fit top-10 let-4 p-3 rounded-md  z-50 bg-[#454545]">
      {children}
    </div>
  );
}
