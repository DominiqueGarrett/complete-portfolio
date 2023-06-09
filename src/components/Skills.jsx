import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
// import MySQL from "../assets/mySql.png";
import Mongo from "../assets/mongo.png";
import reactImg from "../assets/react.png";
// import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-3">
            These are some of the technologies I have experience with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-orange-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-yellow-400 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-purple-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NodeJs icon" />
            <p className="my-4">NodeJs</p>
          </div>
          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MySQL} alt="MySQL icon" />
                  <p className='my-4'>MySQL</p>
              </div> */}
          <div className="shadow-md shadow-green-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo DB icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-pink-600 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                  <p className='my-4'>Github</p>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
