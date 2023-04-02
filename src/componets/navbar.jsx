import React, { useState } from 'react'
import logo from '.././assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';



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
          <Link to='service' offset={-120} spy={true} duration={400} smooth={true}  >Service </Link>
          </li>
          <li>
          <Link to='about' offset={-120} spy={true} duration={500} smooth={true} >about </Link>
          </li>
          <li>
            <Link to='techno' offset={-120} spy={true} duration={500} smooth={true}>Techenology</Link>
          </li>
          <li>
          <Link to='blog' offset={-150} spy={true} duration={500} smooth={true}>blog</Link>
          </li>
          
        </ul>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full p-3  space-y-2 border-r border-r-gray-900 bg-[#fff]  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold  text-primaryText m-4 '>TechNacy.</h1>
        <li className='  border-[3px] border-primaryText p-2 rounded-xl  '>
          <Link to='service' offset={-120} spy={true} duration={400} smooth={true} onClick={handleNav}  >Service </Link>
          </li>
          <li className='border-[3px] border-primaryText p-2 rounded-xl '>
          <Link to='about' offset={-120} spy={true} duration={500} smooth={true} onClick={handleNav}  >about </Link>
          </li>
          <li className='border-[3px] border-primaryText p-2 rounded-xl '>
            <Link to='techno' offset={-120} spy={true} duration={500} smooth={true} onClick={handleNav} >Techenology</Link>
          </li>
          <li className='border-[3px] border-primaryText p-2 rounded-xl '>
          <Link to='blog' offset={-150} spy={true} duration={500} smooth={true} onClick={handleNav} >blog</Link>
          </li>
          
      </ul>
      </div>
       {/* buttons */ }
       <div onClick={handleNav} className='flex md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
       <div className='sm:flex justify-center items-center gap-4 hidden '>
        <button className=' border-[3px] border-primaryText h-12 w-auto  rounded-2xl flex justify-center items-center    text-[18px] p-4'  >
        <Link to='contact' offset={-150} spy={true} duration={500} smooth={true}>contact us</Link>
        </button>
        <button className=' bg-primaryText h-12 w-auto  rounded-2xl flex justify-center items-center text-[#fff] text-[18px] p-4'  >
        <Link to='foot' offset={-150} spy={true} duration={500} smooth={true}>order us</Link>
        </button>
       </div>

    </div>
  )
}

export default Navbar