import React from "react";

const Routing = (props) => {
  return (
    <div className="grid grid-cols gap-5 max-w-xs ">
      <div
        className=" group transition ease-in-out  inline-flex items-center cursor-pointer"
        onClick={() => props.changepos("about")}
      >
        <hr className=" w-10 transition-all ease-in-out delay-60 group-hover:w-24  group-hover:bg-gray-200 h-px  bg-gray-700 border-0 "></hr>
        <span className=" pl-3 text-base font-bold group-hover:text-brighttext text-darkertext ">
          ABOUT
        </span>
      </div>
      <div
        className=" group transition ease-in-out  inline-flex items-center cursor-pointer"
        onClick={() => props.changepos("experience")}
      >
        <hr className=" w-10 transition-all ease-in-out delay-60 group-hover:w-24  group-hover:bg-gray-200 h-px  bg-gray-700 border-0 "></hr>
        <span className=" pl-3 text-base font-bold group-hover:text-brighttext text-darkertext ">
          EXPERIENCE
        </span>
      </div>
      <div
        className=" group transition ease-in-out  inline-flex items-center cursor-pointer "
        onClick={() => props.changepos("projects")}
      >
        <hr className=" w-10 transition-all ease-in-out delay-60 group-hover:w-24  group-hover:bg-gray-200 h-px  bg-gray-700 border-0 "></hr>
        <span className=" pl-3 text-base font-bold group-hover:text-brighttext text-darkertext ">
          PROJECTS
        </span>
      </div>
    </div>
  );
};

export default Routing;
