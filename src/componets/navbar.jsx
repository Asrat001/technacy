import React, { useState } from 'react'
import logo from '.././assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='   bg-primary text-primaryText w-full h-24 fixed flex justify-between sm:p-10 p-6 items-center  top-0 left-0  z-50'>
      {/* logo */ }
      <div className=''>
        <img src={logo} className="w-44 h-44"/>
      </div>
       {/* nav bar */ }
      <div className=''>
        <ul className='sm:flex justify-center items-center gap-8 text-[20px] font-medium  hidden  '>
          <li>
            <a href='/' >service</a>
          </li>
          <li>
            <a href='/about'>about</a>
          </li>
          <li>
            <a href='/contact'>Techenology</a>
          </li>
          <li>
            <a href='/contact'>Blog</a>
          </li>
        </ul>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold  text-primaryText m-4'>TechNacy.</h1>
          <li className='p-4 border-b border-gray-600'>service</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Technology</li>
          <li className='p-4 border-b border-gray-600'>Blog</li>
          <li className='p-4'>Contact</li>
      </ul>
      </div>
       {/* buttons */ }
       <div onClick={handleNav} className='flex md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
       <div className='sm:flex justify-center items-center gap-4 hidden '>
        <button className=' border-[3px] border-primaryText h-12 w-auto  rounded-2xl flex justify-center items-center    text-[18px] p-4'  >
<p>contact us</p>
        </button>
        <button className=' bg-primaryText h-12 w-auto  rounded-2xl flex justify-center items-center text-[#fff] text-[18px] p-4'  >
<p>order now</p>
        </button>
       </div>

    </div>
  )
}

export default Navbar