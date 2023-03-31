import React from "react";
import node from "./../assets/node.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

function BlogCard(props) {
  return (
    <div className="bg-[#fff] shadow-lg shadow-primaryText rounded-lg ">
      <img src={node} className='h-[250px] w-full rounded-lg' />
      <div className="p-4">
        <p className=" text-[20px] font-medium text-primaryText ">
          what is ERP Sysyems ?
        </p>
        <div className="flex gap-3 items-center py-3">
          <p className="flex gap-1 items-center justify-center ">
            <BsFillPersonFill size={24} className=" text-primaryText" /> by
            Technacy
          </p>
          <p className="flex gap-1 items-center justify-center ">
            <BiTimeFive size={24} className=" text-primaryText" /> 2020-10-9
          </p>
        </div>
        <p className=" text-primaryText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          possimus consectetur soluta ipsum qui itaque sint. Dolore nisi vero
          inventore voluptas voluptatum quam impedit. Sequi aspernatur labore
          ducimus iure? Optio.
        </p>
        <div className="flex gap-3 items-center py-3">
        <button className=" border-[3px] border-primaryTextBody text-white font-medium py-2 px-4 rounded"> read more</button>
        <button className="border-[3px] border-primaryText text-white font-medium py-2 px-4 rounded">share</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
