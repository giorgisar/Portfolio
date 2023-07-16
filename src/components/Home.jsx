import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-transparent font-bold font-style: italic bg-clip-text bg-gradient-to-r from-slate-600 via-purple-800 to-slate-900 leading-snug">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold leading-snug relative ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-purple-900 to-slate-900">
            Giorgi
          </span>
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold leading-snug relative text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-purple-900 to-slate-800">
          I'm a Front-End Web Developer
        </h2>
        <Link to="work" smooth={true} duration={500}>
          <button className="w-[180px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:scale-105 duration-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
