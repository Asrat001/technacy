import React from "react";
import xd from "../assets/xd.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import boot from "../assets/boot.png";
import dj from "../assets/dj.png";
import mui from "../assets/mui.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import java from "../assets/java.png";

function Techno() {
  return (
    <div className=" sm:p-20 bg-primary h-auto mt-16 p-2" id="techno">
      <h1 className="text-[15px] text-center sm:text-[35px] text-primaryText py-2 sm:py-3 font-semibold">
        Technology Stack
      </h1>
      <div className="flex justify-center items-center py-4">
        <div className=" w-full sm:w-[400px] h-1 bg-primaryText flex justify-center items-center  ">
          <div className="w-32 h-1 bg-[#165bee]" />
        </div>
      </div>
      <p className=" text-[16px] text-center text-primaryText sm:text-[18px] pb-8">
        One theme that serves as an easy-to-use operational toolkit that meets
        customer's needs.
      </p>
      <div className="slider ">
        <div className="slide_track ">
          <div className="slide  bg-[#fff] ">
            <img src={figma} className="" />
          </div>
          <div className="slide  bg-[#fff] ">
            <img src={xd} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={react} className="h-[100px] w-[100px]" />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={boot} className="" />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={mui} className='w-[100px]  h-[100px]'/>
          </div>
          <div className="slide  bg-[#fff]">
            <img src={dj} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={html} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={java} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={flutter} className='w-[100px] h-[100px]' />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={react}  className='w-[100px] h-[100px]'/>
          </div>
          {/* repeting the same thing*/}
          <div className="slide  bg-[#fff] ">
            <img src={figma} className="" />
          </div>
          <div className="slide  bg-[#fff] ">
            <img src={xd} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={react} className="h-[100px] w-[100px]" />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={boot} className="" />x
          </div>
          <div className="slide  bg-[#fff]">
            <img src={mui} className='w-[100px] h-[100px]' />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={dj} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={html} className="w-[100] h-[100px]" />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={java} />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={flutter} className='w-[100px] h-[100px]' />
          </div>
          <div className="slide  bg-[#fff]">
            <img src={react} className='w-[100px] h-[100px]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techno;
