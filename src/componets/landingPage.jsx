import React from 'react'
import Navbar from './navbar'
import Baner from './baner'
import Wellcome from './wellcome'
import Service from './service'
import Img from './img'
import Techno from './techno'
import Blog from './blog'
import Contact from './contact'
import Footer from './footer'
import Empity from './empity'

function LandingPage() {
  return (
    <div
    className=' '>
<Navbar/>
<Baner/>
<Wellcome/>
<Service/>
<Img/>
<Techno/>
<Empity/>
<Blog/>
<Contact/>
<Footer/>



    </div>
  )
}

export default LandingPage