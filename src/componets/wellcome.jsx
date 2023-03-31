import React, { useEffect } from "react";
import mess from "../assets/mess.png";
import ques from "../assets/ques.png";
import Aos from "aos";
import 'aos/dist/aos.css';

function Wellcome() {
 
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="sm:p-10 p-6  h-screen ">
    <div data-aos="flip-down">
    <h1 className="text-[25px] text-center sm:text-[35px] text-primaryText sm:py-3 font-semibold">
        Wellcome to Technacy
      </h1>
      <div className="sm:flex sm:justify-center sm:items-center py-4">
        <div className=" w-full sm:w-[400px] h-1 bg-primaryText flex justify-center items-center  ">
          <div className="w-32 h-1 bg-[#e7c010]" />
        </div>
      </div>
    </div>

      <div className="flex flex-col sm:flex-row  justify-between items-center  sm:px-20 sm:py-16  gap-2">
        <div className="flex gap-4  flex-col   " data-aos="zoom-in" >
          <div
            className="w-20 h-20 border-primaryText border-[4px] p-5 rounded-full flex justify-center 
"
          >
            <img src={mess} />
          </div>

          <div className="sm:w-[500px]">
            <h1 className=" text-primaryText text-[30px]">about us</h1>
            <p className="">
              We are a software development company situated in Addis Ababa,
              Ethiopia, dedicated to guiding customers through the next phase of
              business innovation powered by technology and delivering
              world-class software products and solutions.
            </p>
          </div>
        </div>
        <div className="    ">
          <div className="flex gap-4 flex-col " data-aos="zoom-in">
            <div
              className=" h-20 w-20  border-primaryText border-[4px] p-5 rounded-full flex justify-center ite
"
            >
              <img src={ques} />
            </div>
            <div className="sm:w-[500px]">
              <h1 className=" text-primaryText text-[30px]">why us</h1>
              <p className="">
                As our name suggests, we seek to deliver projects that
                demonstrate a thorough understanding of technology in terms of
                conceptualization, design, development, and implementation,
                allowing us to deliver real-world problem-solving, long-term,
                and maintainable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
