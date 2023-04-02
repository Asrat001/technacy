import React, { useEffect } from "react";
import BlogCard from "./blogCard";
import Aos from "aos";
import 'aos/dist/aos.css';

function Blog() {
 
  return (
    <div className="  h-auto p-4  sm:p-10 bg-primary " id="blog">
      <h1 className="text-[25px] text-center sm:text-[35px] text-primaryText sm:py-3 font-semibold">
        our leatest blog
      </h1>
      <div className="flex justify-center items-center py-4">
        <div className=" w-full sm:w-[400px] h-1 bg-primaryText flex justify-center items-center  ">
          <div className="w-32 h-1 bg-[#ee7716]" />
        </div>
      </div>
      {/* blog card*/}
      <div className="grid  sm:grid-cols-3 grid-cols-1 gap-[23px]  sm:p-10 justify-items-center  "  >
      <BlogCard />
      <BlogCard/>
      <BlogCard/>
      </div>
    </div>
  );
}

export default Blog;
