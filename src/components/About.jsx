import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-gray-300">
              Hey! I'm Dominique, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-gray-300">
              I am dedicated to building
              <h3 className="text-pink-600 inline">
                {" "}
                excellent, responsive web applications{" "}
              </h3>
              that improve the overall user exprience. I am an individual 
              with enhanced skills in problem solving and a strong ability 
              to execute user friendly applications utilizing various
              computer science languages. With each project, my goal is 
              to engage my audience with an effective, smooth 
              and problem free user-experience. I am excited to further
              enhance my skills in the future as part of a fast-paced, 
              quality-driven team in order to build better experiences 
              for users on the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
