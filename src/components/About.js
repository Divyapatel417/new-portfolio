import React from "react";
import { AboutData } from "../config/staticdata";
// import { About } from '../../../config/staticdata';
const About = () => {
  return (
    <div className="flex-row grid gap-y-5">
      {AboutData.map(value=>{
        return(<p className="text-base text-darktext ">
        {value}
      </p>)
      })}
    </div>
  );
};

export default About;
