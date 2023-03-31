import React, { useEffect } from "react";
import node from "./../assets/node.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Aos from "aos";
import 'aos/dist/aos.css';

function BlogCard(props) {
  useEffect(() => {
  
    Aos.init({duration:2000})
      
    }, [])
  return (
    <div className="bg-[#fff] shadow-lg shadow-primaryText rounded-lg " data-aos='fade-up'>
      <img src={node} className='h-[150px] sm:h-[250px] w-full rounded-lg' />
      <div className="p-4 ">
        <p className="  sm:text-[20px] font-medium text-primaryText ">
          what is ERP Sysyems ?
        </p>
        <div className="flex gap-3 items-center py-3">
          <p className="flex gap-1 items-center justify-center text-[10px] ">
            <BsFillPersonFill size={24} className=" text-primaryText" /> by
            Technacy
          </p>
          <p className="flex gap-1 items-center justify-center text-[10px] ">
            <BiTimeFive size={24} className=" text-primaryText" /> 2020-10-9
          </p>
        </div>
        <p className=" text-primaryText text-[13px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          possimus consectetur soluta ipsum qui itaque sint. Dolore nisi vero
          inventore voluptas voluptatum quam impedit. Sequi aspernatur labore
          ducimus iure? Optio.
        </p>
        <div className="flex gap-3 items-center py-3">
        <button className=" border-[3px] border-primaryTextBody text-white font-medium sm:py-2 sm:px-4 rounded-lg p-[2px]"> <p className="text-[13px]">read more</p></button>
        <button className="border-[3px] border-primaryText text-white font-medium sm:py-2 sm:px-4 rounded-lg p-[2px]"><p className="text-[13px]">share</p></button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
