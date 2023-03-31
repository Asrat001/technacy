import React from "react";
import { Typewriter } from "react-simple-typewriter";
import tech from "../assets/tech.png";

function Baner() {
  return (
    <div className="p-6  bg-primary  w-full h-screen  sm:p-24  flex justify-center items-center flex-col  ">
      {/* ontype effect*/}
      <div className=" space-y-6 sm:p-10 p-3  sm:w-[800px] text-center  ">
        <span className=" text-[27px]  sm:text-[50px] text-[#1d6679ab] font-semibold ">
          <Typewriter
            words={[
              "Inovative Techenology",
              "App Developement",
              "Website Developemt",
              "ERP Developemnt",
            ]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div>
          <h1 className="sm:text-[50px] text-[40px] font-bold  text-primaryText  ">
            Not only a web presence;
          </h1>
          <p className=" text-primaryText ">
            you can also increase interactivity and thus revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Baner;
