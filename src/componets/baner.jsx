import React from "react";
import { Typewriter } from "react-simple-typewriter";
import tech from "../assets/tech.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

function Baner() {
  return (
    <div className="p-3  bg-primary  w-full   h-screen   sm:p-24  flex justify-center items-center flex-col  ">
      {/* ontype effect*/}
      <div className=" space-y-6 sm:p-10  sm:w-[800px] text-center  ">
        <h1 className="sm:text-[50px] text-[25px] font-bold  text-primaryText  ">
          Not only a web presence;
        </h1>

        <span className=" text-[19px]  sm:text-[35px] text-[#03303b] font-semibold ">
          <Typewriter
            words={[
              "Innovative technology",
              "App Development",
              "Website Development",
              "ERP Development",
            ]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className=" text-primaryText text-[15px] font-medium ">
          you can also increase interactivity and thus revenue.
        </p>
        <div className="flex  justify-around items-center sm:hidden ">
          <p className="border-[3px] border-primaryText rounded-full p-4">
            <a href="https://www.facebook.com/technacysystems">
              <FaFacebookF />
            </a>
          </p>
          <p className="border-[3px] border-primaryText rounded-full p-4">
            <a href="https://t.me/mehretugonche">
              <FaTelegramPlane />
            </a>
          </p>
          <p className="border-[3px] border-primaryText rounded-full p-4">
            <a href="https://www.linkedin.com/in/mehretugonche">
              <FaLinkedinIn />
            </a>
          </p>
        </div>
        <div className=" flex items-center justify-center py-4">
          <button className=" bg-primaryText h-12 w-auto  rounded-2xl flex justify-center items-center text-[#fff] text-[18px] p-4">
          <Link to='contact' offset={-150} spy={true} duration={500} smooth={true}>let's talk about your project</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Baner;
