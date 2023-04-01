import React from "react";
import { ImLocation2 } from "react-icons/im";

function Contact() {
  return (
    <div className="sm:p-10 h-auto my-8">
      <h1 className=" text-center text-[18px] font-semibold  text-primaryText sm:text-[35px]">
        Contact us
      </h1>
      <div className="sm:flex sm:justify-center sm:items-center p-4 sm:py-4">
        <div className=" w-full sm:w-[400px] h-1 bg-primaryText flex justify-center items-center  ">
          <div className="w-32 h-1 bg-[#58ec1d]" />
        </div>
      </div>
      <div className=" space-y-10 flex flex-col justify-center sm:flex-row items-center sm:justify-between p-4">
        <div className=" hidden sm:block">
          <h1 className="text-[24px] text-primaryText font-medium py-6">
            our location
          </h1>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d252205.54306387072!2d38.786915!3d8.998662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854218d0cfdf%3A0x5dcf91fe0e76f0a8!2sTechnacy%20Systems!5e0!3m2!1sen!2set!4v1680292723230!5m2!1sen!2set"
              width="600"
              height="450"
              //style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" rounded-lg"
            ></iframe>
          </p>
          <h1 className="flex gap-3 items-center py-6 text-primaryText">
            <ImLocation2 /> Bole Edna Mall, Alemnesh Plaza 9th Floor
          </h1>
        </div>
        <div className="w-full sm:w-auto ">
          <form className=" p-5  shadow-lg shadow-primaryText  border-y-[4px]  border-primaryText flex flex-col gap-5 ">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className=" flex flex-col gap-3">
                <label>your name</label>
                <input
                  type="text"
                  className="p-2 border-primaryText border-[1.5px] rounded-lg "
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label>your email</label>
                <input
                  type="email"
                  className="p-2 border-primaryText border-[1.5px] rounded-lg "
                />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
                <label>Subject</label>
                <input
                  type="email"
                  className="p-2 border-primaryText border-[1.5px] rounded-lg "
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label>Message</label>
              <textarea  className="p-4 h-32 border-primaryText border-[1.5px] rounded-lg " type='text'/>
              </div>
              <div className="flex justify-center items-center">
              <button type="submit" className="p-2 bg-primaryText text-[#fff] rounded-xl w-28 ">Submit</button>

              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
