import BrandLogo from './BrandLogo';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="px-6 py-10  bg-gradient-to-b from-indigo-600/20 to-black/10  ">
      <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
        <div className="flex flex-col items-start">
          <BrandLogo />
          <p className="mt-3 text-sm text-slate-300">
            <span className="font-medium">CSS UI</span> is a collection of
            handcrafted CSS UI components.
          </p>
          <div className="flex gap-2 items-center my-4">
            <span className="flex justify-center items-center border border-slate-200 rounded-full p-2 cursor-pointer group hover:bg-slate-200 hover:border-black transition-all duration-300">
              <FaGithub className="text-2xl text-slate-400 group-hover:text-black transition-all duration-300 ml-[1.2px] mt-[1.2px]" />
            </span>
            <Link
              to="https://github.com/TechStarHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-medium hover:text-sky-700 transition-all duration-300"
            >
              GitHub
            </Link>
            <Link
              to="https://github.com/TechStarHub/svelte-typer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-medium hover:text-sky-700 transition-all duration-300"
            >
              Code
            </Link>
            <Link
              to="https://github.com/TechStarHub/svelte-typer/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-medium hover:text-sky-700 transition-all duration-300"
            >
              Issues
            </Link>
            <Link
              to="https://github.com/TechStarHub/svelte-typer/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-medium hover:text-sky-700 transition-all duration-300"
            >
              License
            </Link>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="">
            <h3 className="text-lg font-medium text-slate-400">Quick Links</h3>
            <div className="flex flex-col ite gap-2 mt-2">
              <Link
                to="/"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/tools"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Tools
              </Link>
              <Link
                to="/elements"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Elements
              </Link>
              <Link
                to="/challenges"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Challenges
              </Link>
              <Link
                to="/spotlights"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Spotlights
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-medium text-slate-400">Other</h3>
            <div className="flex flex-col ite gap-2 mt-2">
              <Link
                to="/"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-slate-300 hover:text-sky-700 transition-all duration-300"
              >
                Copyright
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-8">
        <p className="mt-3">
          &copy; {new Date().getFullYear()}{' '}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 font-medium hover:text-sky-700 transition-all duration-300"
          >
            TechStarHub
          </a>
        </p>
      </div>
    </footer>
  );
}
