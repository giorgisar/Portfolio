import React from "react";
import bankist from "../assets/bankist.png";
import finance from "../assets/finance.png";
import weekaway from "../assets/weekaway.png";
import pig from "../assets/pig.png";
import bankist1 from "../assets/bankist1.png";
import Gym from "../assets/gym.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// My recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Gym})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Typescript Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://c0e62d7b.gym-awj.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Gym/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${bankist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://64b41ce52a1b904e20d9d0ea--sage-truffle-c51f9b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Bankist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${finance})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://giorgisar.github.io/Finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weekaway})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://giorgisar.github.io/Companion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Companion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pig})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://iridescent-gelato-7d50ed.netlify.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Pig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bankist1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://starlit-cobbler-0a6e36.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giorgisar/Bankist1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
