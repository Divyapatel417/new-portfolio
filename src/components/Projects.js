import React from "react";
import portfolio from "../assets/portfolio.png";
const Projects = () => {
  return (
    <div className="p-3 mt-4 sm:mt-7 sm:p-1 flex lg:flex-row sm:flex-col  group hover:drop-shadow-md hover:bg-slate-800/50">
      <div className="lg:mr-6 lg:w-1/3 sm:w-2/3 sm:pr-2 sm:ml-0 ml-3">
        <img alt="portfolio" src={portfolio} className="w-40 h-20 border-2 border-white"></img>
      </div>
      <div className="  lg:w-80 sm:w-full sm:mt-2 lg:mt-0">
        <p className="sm:mt-3 text-lg group-hover:text-greentext text-brighttext ">
          Myportfolio
        </p>

        <p className=" sm:mt-2 mt-1  text-sm text-darktext ">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.
        </p>
        <ul className=" mt-2 flex flex-wrap text-sm text-greentext">
          {/* <li className='mr-1.5'><div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>React</div></li> */}

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

export default Projects;
