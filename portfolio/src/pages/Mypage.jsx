import React from 'react'
import Nav from '../component/Nav'
import Bio from '../component/Bio'
import About from '../component/About'
import Frameworks from '../component/Frameworks'
import Projects from '../component/Projects'
import Footer from '../component/Footer'


function Mypage() {
  return (
    <div>
        <Nav/>
        <Bio />
        <About />
        <Frameworks />
        <Projects />
        <Footer />
    </div>
  )
}

export default Mypage