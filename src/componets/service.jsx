import React, { useEffect } from "react";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import chart from "../assets/chart.png";
import erp from "../assets/erp.png";
import Aos from "aos";
import 'aos/dist/aos.css';

function Service() {
  useEffect(() => {
  
  Aos.init({duration:2000})
    
  }, [])
  
  return (
    <div className=" h-auto  sm:h-auto  bg-primary p-3 " >
    <h1 className=" text-[18px] text-center sm:text-[35px] text-primaryText sm:py-3 font-semibold">
        Services
      </h1>
     <div className="sm:flex sm:justify-center sm:items-center sm:py-4">
     <div className=" w-full sm:w-[400px] h-1 bg-primaryText flex justify-center items-center  ">
        <div className="w-32 h-1 bg-[#10e758]"/>
      </div>
     </div>

      <div className="sm:p-10 text-center my-2" data-aos='fade-out'>
        <h2 className="sm:text-[50px] text-primaryText font-medium text-[19px] py-3">
          We Offer Creative Services
        </h2>
        <p className=" text-[13px]">
          We are committed to providing technology-based solutions that are
          efficient and effective.
        </p>
      </div>
      <div className=" grid sm:grid-cols-4 grid-cols-1 gap-3 sm:p-10 justify-items-center  " >
        <div className=" bg-[#fff] shadow-lg shadow-primaryText px-6 py-8" data-aos='zoom-in-down'>
          <img src={globe} className="sm:w-12   sm:h-12 w-8 h-8" />
          <h1 className=" text-[15px] sm:text-[25px]  text-primaryText font-medium ">
            Web Development
          </h1>
          <p className=" text-[13px]">
            We build clean website & Apps with beatiful UI for your business. It
            is a huge satisfaction for us to be part of your success!. Order
            Now!
          </p>
        </div>
        <div className=" bg-[#fff] shadow-lg shadow-primaryText px-6 py-8" data-aos='zoom-in-down'>
          <img src={phone} className="w-8 h-8 sm:w-12 sm:h-12" />
          <h1 className="  text-[15px] sm:text-[25px] text-primaryText font-medium ">
            Mobile App Development
          </h1>
          <p className=" text-[13px]">
            We build clean website & Apps with beatiful UI for your business. It
            is a huge satisfaction for us to be part of your success!. Order
            Now!
          </p>
        </div>
        <div className=" bg-[#fff] shadow-lg shadow-primaryText px-6 py-8" data-aos='zoom-in-down'>
          <img src={chart} className='w-8 h-8 sm:w-12 sm:h-12' />
          <h1 className=" text-[15px] sm:text-[25px] text-primaryText font-medium ">
            Digital Marketing & SEO Optimisation
          </h1>
          <p className=" text-[13px]">
            With our digital marketing platform, you'll get the tools and
            insights to take your business to the next level. From SEO and
            content optimization to audience targeting and more, our platform
            offers everything you need for growth. Order Now!
          </p>
        </div>
        <div className=" bg-[#fff] shadow-lg shadow-primaryText px-6 py-8" data-aos='zoom-in-down'>
          <img src={erp} className='w-8 h-8 sm:w-12 sm:12' />
          <h1 className=" text-[15px] sm:text-[25px] text-primaryText font-medium ">
            ERP solutions
          </h1>
          <p className="text-[13px]">
            Streamline your business operations with ERP! Our all-in-one
            software solution provides a comprehensive suite of tools to help
            you run your business more efficiently.Order Now!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
