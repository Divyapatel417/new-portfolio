import React from "react";
// import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Links = () => {
  return (
    <div className="flex flex-row gap-3 max-w-sm">
      <div
        className="text-darktext cursor-pointer hover:text-brighttext"
        onClick={() => {
          window.open("https://github.com/Divyapatel417", "_newtab");
        }}
      >
        <span>
          <AiFillGithub size="30px" />
        </span>
      </div>
      <div
        className="text-darktext cursor-pointer hover:text-brighttext"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/divya-patel-b41b6b177/","_newtab");
        }}
      >
        <AiFillLinkedin size="30px" />
      </div>
      
    </div>
  );
};

export default Links;
