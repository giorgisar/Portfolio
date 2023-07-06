import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000x] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Giorgi, welcome to my portfolio website! Please take a
              look around.
            </p>
          </div>
          <div>
            <p>
              I'm an aspiring junior developer eager to embark on a journey of
              growth and innovation in the world of technology. Feel free to
              explore my projects and get in touch! I'm excited about the
              possibilities that lie ahead and look forward to connecting with
              like-minded individuals in the tech community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
