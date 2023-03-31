import React from 'react'
import logo from '.././assets/logo.png'


function Navbar() {
  return (
    <div className=' hidden bg-primary text-primaryText w-full h-24 fixed sm:flex justify-between p-10 items-center  top-0 left-0'>
      {/* logo */ }
      <div className=''>
        <img src={logo} className="w-44 h-44"/>
      </div>
       {/* nav bar */ }
      <div className=' '>
        <ul className='flex justify-center items-center gap-8 text-[20px] font-medium '>
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

      </div>
       {/* buttons */ }
       <div className='flex justify-center items-center gap-4'>
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