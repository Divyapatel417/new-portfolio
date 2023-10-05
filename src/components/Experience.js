import React from "react";

const Experience = () => {
  return (
    <div className="p-3 mt-4 flex flex-row  group hover:drop-shadow-md hover:bg-slate-800/50">
      <div className="mr-6 ml-3">
        <p className="text-base text-darkertext">2018---PRESENT</p>
      </div>
      <div className=" w-80">
        <p className="text-lg group-hover:text-greentext text-brighttext ">
          LEad developer - provitious
        </p>
        <p className=" mt-1 text-base text-darkertext">
          React front-end developer
        </p>
        <p className="  mt-1  text-sm text-darktext max-w-sm">
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
