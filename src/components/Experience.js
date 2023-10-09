import React from "react";
import { ExperienceData } from "../config/staticdata";

const Experience = () => {
  return (
    <>
      {ExperienceData.map((exp) => {
        return (
          <div className=" mb-3 p-4 group hover:shadow-md hover:bg-slate-800/50  hover:shadow-greentext rounded-lg">
            <div className="lg:mt-0 sm:mt-4 sm:p-1 flex lg:flex-row sm:flex-col  ">
              <div className="lg:mr-6 lg:w-1/3 sm:w-2/3 sm:pr-2 sm:ml-0 ml-3">
                <p className="text-base text-darkertext">{exp.time}</p>
              </div>
              <div className=" lg:w-80 sm:w-full sm:mt-2 lg:mt-0">
                <p className="text-lg group-hover:text-greentext text-brighttext ">
                  {exp.title}
                </p>
                <p className=" mt-1 text-base text-darkertext">{exp.company}</p>
                <p className="  mt-1  text-sm text-darktext ">{exp.desc}</p>
                <ul className=" mt-2 flex flex-wrap text-sm text-greentext">
                  {exp.skills.map((value) => {
                    return (
                      <li className="mt-2 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {value}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Experience;
