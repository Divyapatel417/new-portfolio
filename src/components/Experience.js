import React from "react";

const Experience = () => {
  return (
    <div className="p-3 mt-4 sm:mt-7 sm:p-1 flex lg:flex-row sm:flex-col  group hover:drop-shadow-md hover:bg-slate-800/50">
      <div className="lg:mr-6 lg:w-1/3 sm:w-2/3 sm:pr-2 sm:ml-0 ml-3">
        <p className="text-base text-darkertext">2018---PRESENT</p>
      </div>
      <div className=" lg:w-80 sm:w-full sm:mt-2 lg:mt-0">
        <p className="text-lg group-hover:text-greentext text-brighttext ">
          LEad developer - provitious
        </p>
        <p className=" mt-1 text-base text-darkertext">
          React front-end developer
        </p>
        <p className="  mt-1  text-sm text-darktext ">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <ul className=" mt-2 flex flex-wrap text-sm text-greentext">
          {["ReactJS", "HTML", "Css3", "Git", "Tailwind css", "Javascript"].map(
            (value) => {
              return (
                <li className="mt-2 mr-1.5">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {value}
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
