import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import {FaRegCopyright} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-primary h-auto sm:px-10 py-4">
      <div className="flex gap-4  sm:justify-between justify-center">
        <div>
          <h1 className=" text-[20px] text-primaryText text-center">
            our socials
          </h1>
          <div className="flex flex-col gap-3">
            <a
              href="malto:info@technacysystems.com"
              className=" border-[3px] border-[#757970fa] p-2 flex gap-3 items-center rounded-full "
            >
              <MdEmail /> info@technacysystems.com
            </a>
            <a
              href="tel:251910497908"
              className=" border-[3px] border-[#757970fa] p-2 flex gap-3 items-center rounded-full"
            >
              <BsTelephoneFill /> + 251-910-497908
            </a>
            <a
              href="tel:251911285638"
              className=" border-[3px] border-[#757970fa] p-2 flex gap-3 items-center rounded-full"
            >
              <BsTelephoneFill /> +251-911-285638
            </a>
            <div className="flex  justify-around items-center ">
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
          </div>
        </div>
        <div className=" hidden sm:block">
          <h1 className="text-center text-primaryText text-[22px] ">
            our service
          </h1>
          <div className="flex justify-between items-center flex-row-reverse gap-6">
            <div className="flex flex-col gap-4  items-center justify-center">
              <p className=" text-primaryText text-[15px] font-medium flex items-center  justify-between">
                <span>ERP solution</span>
              </p>
              <p className=" text-primaryText text-[15px] font-medium flex items-center  justify-between">
                Web Developement
              </p>
              <p className=" text-primaryText text-[15px] font-medium flex items-center  justify-between ">
                Software Developement
              </p>

              <p className=" text-primaryText text-[15px] font-medium flex items-center  justify-between ">
                Mobile Application Developemnt
              </p>
              <p className=" text-primaryText text-[15px] font-medium flex items-center justify-between  ">
                Digital Markating and SEO solution
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
            <FaRegHandPointRight />
            <FaRegHandPointRight />
            <FaRegHandPointRight />
            <FaRegHandPointRight />
            <FaRegHandPointRight />
          </div>
          </div>
       
        </div>
        <div className=" hidden sm:block">
            <h1 className="text-center text-primaryText text-[22px] py-4">
              join our  Newsletter
            </h1>
            <div className=" flex gap-4 items-center">
            <input type="text" className="border-[3px] border-primaryText rounded-2xl p-3"/>
            <button className="p-3 rounded-2xl bg-primaryText text-[#fff]">subscribe</button>
            </div>
        </div>
      </div>
      <p className=" text-[13px] p-2 flex items-center justify-center text-primaryText "> <FaRegCopyright/>  Copyright Technacy Systems. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
