import React from "react";
import { Typewriter } from "react-simple-typewriter";
import tech from "../assets/tech.png";

function Baner() {
  return (
    <div className="p-3  bg-primary  w-full   h-screen   sm:p-24  flex justify-center items-center flex-col  ">
      {/* ontype effect*/}
      <div className=" space-y-6 sm:p-10  sm:w-[800px] text-center  ">
        <span className=" text-[19px]  sm:text-[50px] text-[#03303b] font-semibold ">
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
          <h1 className="sm:text-[50px] text-[20px] font-bold  text-primaryText  ">
            Not only a web presence;
          </h1>
          <p className=" text-primaryText text-[15px] ">
            you can also increase interactivity and thus revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Baner;
